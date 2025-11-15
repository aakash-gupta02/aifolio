import Logo from './Logo'

export default function Footer() {
  const footerLinks = [
    { label: 'All Tools', href: '/tools' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">
              Discover and compare the best AI tools for your workflow.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {/* Simple links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="mt-2 text-center text-xs text-gray-500 md:text-right dark:text-gray-500">
              © {new Date().getFullYear()} <span className="textGradient">AI Folio</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
