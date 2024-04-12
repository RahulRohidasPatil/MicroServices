import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import AuthDropdown from "./AuthDropdown";
import CreatePost from "./CreatePost";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import ThemeDropdown from "./ThemeDropdown";

export default async function Header() {
    const session = await getServerSession()
    return (
        <header className="flex sticky top-0 justify-between p-4">
            <Link className="flex items-center space-x-2" href="/">
                <Image src="/icon-32x32.png" alt="logo" width={32} height={32} priority />
                <h1 className="text-2xl">Promptopia</h1>
            </Link>
            {session && (
                <CreatePost />
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
