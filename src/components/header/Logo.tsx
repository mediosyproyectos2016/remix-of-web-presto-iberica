import { Link } from "react-router-dom";
import logoPresto from "@/assets/logo-presto.png";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center group">
      <img 
        src={logoPresto} 
        alt="Presto" 
        className="h-10 lg:h-11 w-auto object-contain transition-opacity group-hover:opacity-90 brightness-0 invert"
      />
    </Link>
  );
};
