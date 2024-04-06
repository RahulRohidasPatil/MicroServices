import Link from "next/link";
import AuthButton from "./AuthButton";
import Image from "next/image";
import SunIcon from "@/components/icons/SunIcon";

export default function Nav() {
    return (
        <header className="flex sticky top-0 justify-between p-4 bg-black border-b">
            <Link className="flex items-center space-x-4" href="/">
                <Image src="/icon-512x512.png" alt="logo" width={32} height={32} priority />
                <h1 className="text-2xl">Promptopia</h1>
            </Link>
            <div className="flex relative items-center space-x-4">
                <SunIcon />
                <AuthButton />
            </div>
        </header>
    )
}