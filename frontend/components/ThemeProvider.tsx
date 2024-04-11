"use client"

import { SessionProvider } from "next-auth/react";
import { Dispatch, ReactNode, createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";

let mediaQueryList: MediaQueryList

function updateTheme(isDark: boolean) {
    if (isDark) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

type Theme = 'system' | 'dark' | 'light'
type Action = 'setSystemTheme' | 'setDarkTheme' | 'setLightTheme'

const ThemeContext = createContext<[Theme, Dispatch<Action>] | null>(null);
const initialTheme = 'system'
function reducer(state: Theme, action: Action) {
    switch (action) {
        case 'setSystemTheme': {
            updateTheme(mediaQueryList.matches)
            return 'system'
        }
        case 'setDarkTheme': {
            updateTheme(true)
            return 'dark'
        }
        case 'setLightTheme': {
            updateTheme(false)
            return 'light'
        }
        default: {
            return state
        }
    }
}

export function useTheme() {
    return useContext(ThemeContext) as [Theme, Dispatch<Action>]
}

export default function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [theme, dispatch] = useReducer(reducer, initialTheme)
    const [mounted, setMounted] = useState(false)

    const mediaQueryListener = useCallback((event: MediaQueryList | MediaQueryListEvent) => {
        if (!localStorage.theme) {
            updateTheme(event.matches)
        }
    }, [])

    const storageListener = useCallback((event: StorageEvent) => {
        if (event.key === 'theme') {
            if (event.newValue) {
                const isDark = event.newValue === 'dark'
                const isLight = event.newValue === 'light'
                if (isDark || isLight) {
                    dispatch(isDark ? 'setDarkTheme' : 'setLightTheme')
                } else {
                    localStorage.removeItem('theme')
                    dispatch('setSystemTheme')
                }
            } else {
                dispatch('setSystemTheme')
            }
        }
    }, [])

    useEffect(() => {
        mediaQueryList = matchMedia('(prefers-color-scheme: dark)')
        if (localStorage.theme) {
            dispatch(localStorage.theme === 'dark' ? 'setDarkTheme' : 'setLightTheme')
        } else {
            dispatch('setSystemTheme')
        }

        mediaQueryList.addEventListener("change", mediaQueryListener)
        onstorage = storageListener
        setMounted(true)

        return () => {
            mediaQueryList.removeEventListener("change", mediaQueryListener)
            removeEventListener("storage", storageListener)
        }
    }, [mediaQueryListener, storageListener])

    if (mounted) {
        return (
            <ThemeContext.Provider value={[theme, dispatch]}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </ThemeContext.Provider>
        )
    }
}
