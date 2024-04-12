"use client"

import { useRef } from "react"

export default function CreatePost() {
    const dialogRef = useRef<HTMLDialogElement>(null)

    return <div>
        <button onClick={() => dialogRef.current?.showModal()}>Create Post</button>
        <dialog className="p-2 backdrop:bg-black/50 border" ref={dialogRef}>
            <form className="flex flex-col items-end space-y-2" method="dialog">
                <textarea className="p-1 max-w-[67vw] max-h-[67vh] border focus:outline-0 resize" placeholder="What's on your mind?" />
                <button className="p-1 border">OK</button>
            </form>
        </dialog>
    </div>
}