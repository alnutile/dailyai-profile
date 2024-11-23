import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">DailyAI.Studio</span>
        </Link>
        {/* Add your navigation items here */}
      </div>
    </nav>
  )
}

export default Navbar 