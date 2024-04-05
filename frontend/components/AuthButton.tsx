"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import Dropdown from "./Dropdown"
import DropdownContainer from "./DropdownContainer"
import Spinner from "./Spinner"

export default function AuthButton() {
    const { data: session, status } = useSession()
    const [showDropdown, setShowDropdown] = useState(false)

    if (status === 'loading') return <Spinner />
    else return session ? (
        <DropdownContainer>
            <Image
                className="rounded-full cursor-pointer"
                src={session.user?.image as string}
                alt=""
                width={64}
                height={64}
                onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
                <Dropdown name={session.user?.name as string} email={session.user?.email as string}>
                    <button className="p-1 border border-black hover:bg-slate-400" onClick={() => signOut()}>Sign Out</button>
                </Dropdown>
            )}
        </DropdownContainer>
    ) : (
        <button className="p-1 border" type="button" onClick={() => signIn('github')}>Sign in</button>
    )
}