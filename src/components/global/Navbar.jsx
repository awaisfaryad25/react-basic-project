import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/logo/awais.svg";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
  ];

  const isActive = (path) => {
    const [route, hash] = path.split("#");
    const isHome = route === "/" || route === "";
    const currentPath = location.pathname;
    const currentHash = location.hash;

    if (isHome) {
      return currentPath === "/" && (hash ? currentHash === `#${hash}` : !currentHash);
    }
    return currentPath === path;
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${isScrolled && !isOpen  ? "bg-white/20 backdrop-blur-md" : ""}`}>
      <div className="max-w-[1500px] mx-auto py-3">
        <div className="w-full max-w-[85%] md:max-w-[1280px] mx-auto flex justify-between items-center">
          <div className="w-full max-w-24 md:max-w-32 drop-shadow-[2px_3px_1px_#000000]">
            <Link to="/">
              {/* <img src={logo} alt="Logo" className="size-full object-fill cursor-pointer" /> */}
              <h4>Logo</h4>
            </Link>
          </div>

          <ul className="hidden md:flex space-x-6 font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="hover:text-[var(--primary)] cursor-pointer">
                <Link
                  to={item.path}
                  className={`hover:text-[var(--primary)] ${
                    isActive(item.path) ? "pb-1 pt-0.5 shadow-lg px-3 rounded-full bg-[var(--secondary)]  hover:text-white border border-[var(--primary)]" : ""
                  }`}
                >
                  <span className="text-shadow-lg/30">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button label="Login / Sign" variant="primary" onClick={() => alert("Primary clicked")} />
          </div>

          <div className="md:hidden text-[var(--primary)]">
            <button onClick={() => setIsOpen(true)} className="drop-shadow-[2px_3px_1px_#000000]">
              <IoIosMenu size={32} />
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems}
          currentPath={location.pathname + location.hash} isScrolled={isScrolled}
        />
      </div>
    </nav>
  );
};

export default Navbar;