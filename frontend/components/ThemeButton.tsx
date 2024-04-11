"use client"

import { ComputerDesktopIcon as ComputerDesktopIconOutline, MoonIcon as MoonIconOutline, SunIcon as SunIconOutline } from "@heroicons/react/24/outline"
import { ComputerDesktopIcon as ComputerDesktopIconSolid, MoonIcon as MoonIconSolid, SunIcon as SunIconSolid } from "@heroicons/react/24/solid"
import { useState } from "react"
import { useTheme } from "./ThemeProvider"

export default function ThemeButton() {
    const [theme, dispatch] = useTheme()
    const [showDropdown, setShowDropdown] = useState(false)

    return <>
        {theme === 'system' ? <>
            <MoonIconOutline className="h-6 w-6 cursor-pointer hidden dark:block" onClick={() => setShowDropdown(!showDropdown)} />
            <SunIconOutline className="h-6 w-6 cursor-pointer dark:hidden" onClick={() => setShowDropdown(!showDropdown)} />
        </> : <>
            <MoonIconSolid className="h-6 w-6 cursor-pointer hidden dark:block" onClick={() => setShowDropdown(!showDropdown)} />
            <SunIconSolid className="h-6 w-6 cursor-pointer dark:hidden" onClick={() => setShowDropdown(!showDropdown)} />
        </>}
        {showDropdown && (
            <div className="absolute top-12 right-0 border flex p-2 space-x-2 z-10">
                {theme === 'system' ? <>
                    <ComputerDesktopIconSolid className="h-6 w-6" title="System Theme" />
                </> : <>
                    <ComputerDesktopIconOutline className="h-6 w-6 cursor-pointer" title="System Theme" onClick={() => {
                        localStorage.removeItem('theme')
                        dispatch('setSystemTheme')
                    }} />
                </>}
                {theme === 'dark' ? <>
                    <MoonIconSolid className="h-6 w-6" title="Dark Theme" />
                </> : <>
                    <MoonIconOutline className="h-6 w-6 cursor-pointer" onClick={() => {
                        localStorage.theme = 'dark'
                        dispatch("setDarkTheme")
                    }} title="Dark Theme" />
                </>}
                {theme === 'light' ? <>
                    <SunIconSolid className="h-6 w-6" title="Light Theme" />
                </> : <>
                    <SunIconOutline className="h-6 w-6 cursor-pointer" onClick={() => {
                        localStorage.theme = 'light'
                        dispatch('setLightTheme')
                    }} title="Light Theme" />
                </>}
            </div>
        )}
    </>
}