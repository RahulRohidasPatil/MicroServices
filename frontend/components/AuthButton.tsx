"use client"

import Image from "next/image"
import { useState } from "react"

export default function AuthButton({ image, children }: Readonly<{ image?: string | null, children: React.ReactNode }>) {
    const [showDropdown, setShowDropdown] = useState(false)

    return <>
        <Image
            className="rounded-full cursor-pointer"
            src={image!}
            alt="Profile Image"
            width={32}
            height={32}
            onClick={() => setShowDropdown(!showDropdown)}
            priority
        />
        {showDropdown && children}
    </>
}
