"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButton() {
    const { data: session, status } = useSession()

    if (status !== 'loading')
        return session ? (
            <div className="flex items-center space-x-1">
                <div>Signed in as {session.user?.email}</div>
                <button className="p-1 border" type="button" onClick={() => signOut()}>Sign Out</button>
            </div>
        ) : (
            <button className="p-1 border" type="button" onClick={() => signIn('github')}>Sign in</button>
        )
}