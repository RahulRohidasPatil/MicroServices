import Image from "next/image";
import Link from "next/link";
import AuthButton from "./AuthButton";
import ThemeButton from "./ThemeButton";

export default async function Header() {
    return (
        <header className="flex sticky top-0 justify-between p-4 bg-white dark:bg-black">
            <Link className="flex items-center space-x-2" href="/">
                <Image src="/icon-32x32.png" alt="logo" width={32} height={32} priority />
                <h1 className="text-2xl">Promptopia</h1>
            </Link>
            <div className="flex relative items-center space-x-4">
                <ThemeButton />
                <AuthButton />
            </div>
        </header>
    )
}
