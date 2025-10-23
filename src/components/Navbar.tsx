import { Link } from '@tanstack/react-router'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Players', href: '/players' },
  { name: 'Contact', href: '/contact' },
  { name: 'Leaderboard', href: '/leaderboards' },
  { name: 'Highnoon Live', href: '/live' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
]

function Navbar() {
  return (
    <div className="h-20 w-full flex items-center justify-between px-8 py-4 border-b-2 border-cinnabar-opacity-60">
      {/* Navigation Links (First 4) */}
      <div className="flex items-center gap-6">
        {navLinks.slice(0, 4).map((link, index) => (
          <Link key={index} to={link.href} className="font-medium">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <h1 className="uppercase text-center leading-tight">
        <span className="font-bold text-3xl">Highnoon</span> <br />
        <span className="font-medium text-[20px] tracking-widest">Gaming</span>
      </h1>

      {/* Navigation Links (Last 4) */}
      <div className="flex items-center gap-6">
        {navLinks.slice(4, 8).map((link, index) => (
          <Link key={index} to={link.href} className="font-medium">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
