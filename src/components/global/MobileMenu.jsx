import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import Button from "./Button";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen, menuItems, currentPath, isScrolled  }) => {
  const isActive = (path) => {
    const [route, hash] = path.split("#");
    const isHome = route === "/" || route === "";
    const currentRoute = currentPath.split("#")[0];
    const currentHash = currentPath.includes("#") ? `#${currentPath.split("#")[1]}` : "";

    if (isHome) {
      return currentRoute === "/" && (hash ? currentHash === `#${hash}` : !currentHash);
    }
    return currentRoute === path;
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-400 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Slide-in panel */}
      <div
        className={`absolute top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-md border-l border-white/30 py-2 transform transition-transform duration-500 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end px-4 text-[var(--primary)]">
          <button onClick={() => setIsOpen(false)}>
            <IoIosClose size={40} />
          </button>
        </div>

        <ul className={`flex flex-col w-full pl-6 space-y-4 py-4 text-base font-medium`}>
          {menuItems.map((item) => (
            <li key={item.name} className="w-full">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full font-bold cursor-pointer hover:text-[var(--primary)] ${
                  isActive(item.path)
                    ? "border border-[var(--primary)] border-r-0  bg-[var(--secondary)] py-2 pl-4 pr-8 rounded-l-full shadow-lg"
                    : "py-2 pl-4 pr-8"
                }`}
              >
                <span className="text-shadow-lg/30">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="pr-6">
          <Button label="Login / Sign" variant="primary" onClick={() => alert("Primary clicked")} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;