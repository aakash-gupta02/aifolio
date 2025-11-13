export default function Footer() {
  const sections = [
    {
      title: "Product",
      links: [
        { label: "All Tools", href: "#" },
        { label: "Categories", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Updates", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Licenses", href: "#" },
      ],
    },
  ];

  const socials = [
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* FIXED: Proper 4-column grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-600 text-white px-2.5 py-1.5 rounded-md text-sm font-semibold tracking-tight">
                AI
              </div>
              <span className="text-base font-semibold text-gray-900">
                Directory
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Your comprehensive guide to discovering and comparing the best AI tools available.
            </p>
          </div>

          {/* Mapped columns (Product, Company, Legal) */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © 2025 AI Folio. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                className="text-gray-600 hover:text-purple-600"
                href={s.href}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
