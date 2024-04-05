import Link from "next/link";
import AuthButton from "./AuthButton";
import Image from "next/image";

export default function Nav() {
    return (
        <nav className="p-4 flex justify-between items-center border-b">
            <Link className="flex items-center space-x-4" href="/">
                <Image src="/icon-512x512.png" alt="logo" width={64} height={64} priority />
                <span className="text-4xl">Promptopia</span>
            </Link>
            <AuthButton />
        </nav>
    )
}