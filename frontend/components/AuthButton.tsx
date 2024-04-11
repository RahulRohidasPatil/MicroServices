"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
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
            priority
        />
        {showDropdown && (
            <div className="absolute top-12 right-0 p-2 w-max text-end border">
                <div className="flex space-x-1">
                    <strong>Name:</strong>
                    <span>{session.user?.name}</span>
                </div>
                <div className="flex space-x-1">
                    <strong>Email:</strong>
                    <span>{session.user?.email}</span>
                </div>
                <button className="p-1 mt-2 border" onClick={() => signOut({ redirect: false })}>Sign Out</button>
            </div>
        )}
    </> : (
        <button type="button" onClick={() => signIn('github')}>Sign in</button>
    )
}