import { Globe, ChevronDown, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <div className="hidden lg:block border-b border-white/10">
      <div className="container-presto flex items-center justify-between py-2.5 text-xs">
        <div className="flex items-center gap-8 text-white/60">
          <a 
            href="tel:+34915782575" 
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>91 578 25 75</span>
          </a>
          <a 
            href="mailto:info@prestoiberica.com" 
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@prestoiberica.com</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors group">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium">ES</span>
            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
          </button>
          <Link 
            to="/area-pro" 
            className="text-white/60 hover:text-white transition-colors tracking-elegant uppercase font-medium"
          >
            Área Profesional
          </Link>
        </div>
      </div>
    </div>
  );
};
