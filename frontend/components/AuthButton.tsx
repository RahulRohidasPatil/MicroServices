"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Spinner from "./Spinner"

export default function AuthButton() {
    const { data: session, status } = useSession()

    if (status === 'loading') return <Spinner />
    else return session ? <>
        <div>Signed in as {session.user?.email}</div>
        <button className="p-1 border" type="button" onClick={() => signOut()}>Sign Out</button>
    </> : (
        <button className="p-1 border" type="button" onClick={() => signIn('github')}>Sign in</button>
    )
}