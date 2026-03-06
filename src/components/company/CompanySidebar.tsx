import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Empresa", href: "/empresa" },
  { label: "Noticias Blog", href: "/blog" },
];

export const CompanySidebar = () => {
  const location = useLocation();

  return (
    <nav className="w-full">
      <h3 className="font-display text-xl md:text-2xl text-primary mb-6 uppercase tracking-wide">
        Sobre Presto
      </h3>
      <ul className="space-y-3">
        {links.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`block text-sm uppercase tracking-wide transition-colors ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
