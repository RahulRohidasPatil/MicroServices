"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButton() {
    const { data: session } = useSession()

    if (session) console.log({ session })

    return session ? (
        <button className="p-1 border" type="button" onClick={() => signOut()}>Sign Out</button>
    ) : (
        <button className="p-1 border" type="button" onClick={() => signIn('github')}>Sign in</button>
    )
}