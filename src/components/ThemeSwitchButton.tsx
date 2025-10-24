import { Moon, Sun } from 'lucide-react'
import { useAppStore } from '@/store/store'

const ThemeToggle = () => {
  const theme = useAppStore((s) => s.theme)
  const toggleTheme = useAppStore((s) => s.toggleTheme)

  return (
    <button
      onClick={toggleTheme}
      className={`px-2 py-2 ${theme === 'light' ? 'bg-oxfordBlue text-white' : 'bg-white text-oxfordBlue'} rounded-full text-sm fixed bottom-5 right-2 z-30`}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}

export default ThemeToggle
