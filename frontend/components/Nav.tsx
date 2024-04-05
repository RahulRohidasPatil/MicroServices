import Link from "next/link";
import AuthButton from "./AuthButton";
import Image from "next/image";

export default function Nav() {
    return (
        <nav className="p-1 flex justify-between items-center border-b-[1px]">
            <Link href="/">
                <Image src="/icon-512x512.png" alt="logo" width={64} height={64} priority/>
            </Link>
            <AuthButton />
        </nav>
    )
}