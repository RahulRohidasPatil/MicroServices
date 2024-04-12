import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "./AuthButton";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import ThemeButton from "./ThemeButton";

export default async function Header() {
    const session = await getServerSession()
    return (
        <header className="flex sticky top-0 justify-between p-4">
            <Link className="flex items-center space-x-2" href="/">
                <Image src="/icon-32x32.png" alt="logo" width={32} height={32} priority />
                <h1 className="text-2xl">Promptopia</h1>
            </Link>
            {session && (
                <button>Create Post</button>
            )}
            <div className="flex relative items-center space-x-4">
                <ThemeButton />
                {session ? (
                    <AuthButton image={session.user?.image}>
                        <div className="absolute top-12 right-0 p-2 w-max text-end border">
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
                    </AuthButton>
                ) : (
                    <SignInButton />
                )}
            </div>
        </header>
    )
}
