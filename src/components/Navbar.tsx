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
    <header
      className="min-h-18 w-full flex items-center justify-between px-6 py-3 border-b"
      style={{ borderColor: 'var(--accent-color)' }}
    >
      {/* Navigation Links (First 4) */}
      <div className="flex items-center gap-6">
        {navLinks.slice(0, 4).map((link, index) => (
          <Link key={index} to={link.href} className="">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <h1 className="uppercase text-center leading-tight">
        <span className="font-bold text-2xl">Highnoon</span> <br />
        <span className="font-normal tracking-wide">Gaming</span>
      </h1>

      {/* Navigation Links (Last 4) */}
      <div className="flex items-center gap-6">
        {navLinks.slice(4, 8).map((link, index) => (
          <Link key={index} to={link.href} className="">
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Navbar
