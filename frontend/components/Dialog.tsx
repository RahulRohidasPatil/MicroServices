"use client"

import { useRef } from "react"

export default function Dialog({ trigger, children }: Readonly<{ trigger: string, children: React.ReactNode }>) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    return <div>
        <button onClick={() => dialogRef.current?.showModal()}>
            {trigger}
        </button>
        <dialog className="p-2 backdrop:bg-black/50 border" ref={dialogRef}>
            {children}
        </dialog>
    </div>
}