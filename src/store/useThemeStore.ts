import { create } from "zustand"

interface i_useThemeStore {
    theme: T_ThemeMode;
    setTheme: (theme: T_ThemeMode) => void;
    cycleTheme: () => void;
}

const useThemeStore = create<i_useThemeStore>(
    (set) => {
        const stored = (typeof window !== 'undefined' && localStorage.getItem('theme')) as T_ThemeMode | 'system';
        const initial = stored ?? 'system';

        if (typeof document !== 'undefined') {
            const html = document.documentElement;
            if (initial === 'dark') {
                html.classList.add('dark');
            } else if (initial === 'light') {
                html.classList.remove('dark')
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                html.classList.toggle('dark', prefersDark)
            }
        }
        return {
            theme: initial,
            setTheme: theme => {
                set({ theme })
                localStorage.setItem('theme', theme);
                const html = document.documentElement;
                if (initial === 'dark') {
                    html.classList.add('dark');
                } else if (initial === 'light') {
                    html.classList.remove('dark')
                } else {
                    const prefersDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
                    html.classList.toggle('dark', prefersDark);
                }
            },
            cycleTheme: () =>
                set((state) => {
                    const next: T_ThemeMode =
                        state.theme === 'system' ? 'light' :
                            state.theme === 'light' ? 'dark' :
                                'system'

                    localStorage.setItem('theme', next)
                    const html = document.documentElement
                    if (next === 'dark') {
                        html.classList.add('dark')
                    } else if (next === 'light') {
                        html.classList.remove('dark')
                    } else {
                        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                        html.classList.toggle('dark', prefersDark)
                    }

                    return { theme: next }
                }),
        }
    }
)

export default useThemeStore;