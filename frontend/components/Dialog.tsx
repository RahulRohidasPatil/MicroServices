"use client"

import { ReactNode, useRef } from "react"

type DialogProps = {
    triggerButtonText: string,
    formId?: string,
    submitButtonText?: string,
    children: React.ReactNode
}

export default function Dialog({ triggerButtonText, formId, submitButtonText, children }: Readonly<DialogProps>) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    return <div>
        <button className="focus:outline-none" onClick={() => dialogRef.current?.showModal()}>
            {triggerButtonText}
        </button>
        <dialog className="p-2 space-y-2 backdrop:bg-black/50 border" ref={dialogRef}>
            {children}
            {formId && (
                <div className="text-end">
                    <button className="p-1 border" form={formId} onClick={() => dialogRef.current?.close()}>
                        {submitButtonText}
                    </button>
                </div>
            )}
        </dialog>
    </div>
}