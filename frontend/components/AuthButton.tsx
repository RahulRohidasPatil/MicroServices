"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import Dropdown from "./Dropdown"
import Spinner from "./Spinner"

export default function AuthButton() {
    const { data: session, status } = useSession()
    const [showDropdown, setShowDropdown] = useState(false)

    if (status === 'loading') return <Spinner />
    else return session ? <>
        <Image
            className="rounded-full cursor-pointer"
            src={session.user?.image as string}
            alt="Profile Image"
            width={32}
            height={32}
            onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
            <Dropdown name={session.user?.name as string} email={session.user?.email as string}>
                <button className="p-1 mt-2 hover:text-black hover:bg-white border" onClick={() => signOut()}>Sign Out</button>
            </Dropdown>
        )}
    </> : (
        <button type="button" onClick={() => signIn('github')}>Sign in</button>
    )
}