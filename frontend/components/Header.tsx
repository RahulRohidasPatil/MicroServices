import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import AuthDropdown from "./AuthDropdown";
import Dialog from "./Dialog";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import ThemeDropdown from "./ThemeDropdown";
import { cookies } from "next/headers";

export default async function Header() {
    const session = await getServerSession()

    async function createPrompt(formData: FormData) {
        "use server"
        const prompt = await fetch(`${process.env.BACKEND_URL}/prompt/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${cookies().get('accessToken')?.value}`,
            },
            body: JSON.stringify({ prompt: formData.get('prompt'), })
        }).then(response => response.json())
        console.log(22, prompt)
    }

    return (
        <header className="flex sticky top-0 justify-between p-4">
            <Link className="flex items-center space-x-2" href="/">
                <Image src="/icon-32x32.png" alt="logo" width={32} height={32} priority />
                <h1 className="text-2xl">Promptopia</h1>
            </Link>
            {session && (
                <nav className="flex items-center">
                    <Dialog triggerButtonText="Create Post" formId="createPrompt" submitButtonText="Create">
                        <form className="flex flex-col items-end space-y-2" action={createPrompt} id="createPrompt">
                            <textarea className="p-1 max-w-[67vw] max-h-[67vh] border focus:outline-0 resize" name="prompt" placeholder="What's on your mind?" />
                        </form>
                    </Dialog>
                </nav>
            )}
            <div className="flex items-center space-x-4">
                <ThemeDropdown />
                {session ? (
                    <AuthDropdown image={session.user?.image}>
                        <div className="fixed top-16 right-4 p-2 w-max text-end border">
                            <div className="flex space-x-1">
                                <strong>Name:</strong>
                                <span>{session.user?.name}</span>
                            </div>
                            <div className="flex space-x-1">
                                <strong>Email:</strong>
                                <span>{session.user?.email}</span>
                            </div>
                            <SignOutButton />
                        </div>
                    </AuthDropdown>
                ) : (
                    <SignInButton />
                )}
            </div>
        </header>
    )
}
