"use client"

import { signOut } from "next-auth/react"

export default function SignOutButton() {
    return (
        <button className="p-1 mt-2 border" onClick={() => signOut()}>Sign Out</button>
    )
}