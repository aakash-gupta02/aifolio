import Logo from "./Logo";

export default function Footer() {
  const footerLinks = [
    { label: "All Tools", href: "/tools" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo and description */}
          <div className="text-center md:text-left">
            <Logo />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-md">
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
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-right mt-2">
              © {new Date().getFullYear()} <span className="textGradient">AI Folio</span>. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}