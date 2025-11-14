import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo and description */}
          <div className="text-center md:text-left">
            <Logo />
            <p className="text-sm text-gray-600 mt-2 max-w-md">
              Discover and compare the best AI tools for your workflow.
            </p>
          </div>

          <div className="flex flex-col  gap-1">

            {/* Simple links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/tools" className="text-gray-600 hover:text-purple-600 transition-colors">
                All Tools
              </a>
              <a href="/categories" className="text-gray-600 hover:text-purple-600 transition-colors">
                Categories
              </a>
              <a href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                Contact
              </a>
            </div>
            {/* Copyright */}
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} <span className="textGradient" > AI Folio</span>. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}