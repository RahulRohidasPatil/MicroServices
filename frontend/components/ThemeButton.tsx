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
            <MoonIconOutline className="hidden dark:block w-6 h-6 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
            <SunIconOutline className="dark:hidden w-6 h-6 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
        </> : <>
            <MoonIconSolid className="hidden dark:block w-6 h-6 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
            <SunIconSolid className="dark:hidden w-6 h-6 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
        </>}
        {showDropdown && (
            <div className="flex fixed top-16 right-4 z-10 p-2 space-x-2 border">
                {theme === 'system' ? <>
                    <ComputerDesktopIconSolid className="w-6 h-6" title="System Theme" />
                </> : <>
                    <ComputerDesktopIconOutline className="w-6 h-6 cursor-pointer" title="System Theme" onClick={() => {
                        setShowDropdown(false)
                        localStorage.removeItem('theme')
                        dispatch('setSystemTheme')
                    }} />
                </>}
                {theme === 'dark' ? <>
                    <MoonIconSolid className="w-6 h-6" title="Dark Theme" />
                </> : <>
                    <MoonIconOutline className="w-6 h-6 cursor-pointer" onClick={() => {
                        setShowDropdown(false)
                        localStorage.theme = 'dark'
                        dispatch("setDarkTheme")
                    }} title="Dark Theme" />
                </>}
                {theme === 'light' ? <>
                    <SunIconSolid className="w-6 h-6" title="Light Theme" />
                </> : <>
                    <SunIconOutline className="w-6 h-6 cursor-pointer" onClick={() => {
                        setShowDropdown(false)
                        localStorage.theme = 'light'
                        dispatch('setLightTheme')
                    }} title="Light Theme" />
                </>}
            </div>
        )}
    </>
}