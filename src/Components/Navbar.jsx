import { useWindowScroll } from "react-use";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHomePage = window.location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      navContainerRef.current?.classList.add("floating-nav");
      return;
    }

    if (currentScrollY === 0) {
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      gsap.to(navContainerRef.current, { y: 0, opacity: 1, duration: 0.3 });
      return;
    }
    const isNavVisible = currentScrollY < lastScrollY || currentScrollY === 0;
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [currentScrollY, lastScrollY, isHomePage]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-0 z-50 h-16 border-none bg-white/10 backdrop-blur-sm text-white p-2 m-2"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="fle size-full item-center justify-between p-4 grid grid-cols-2 ">
          <div className="flex item-center justify-start">Gulshan Khemani</div>
          <div className="flex h-full items-center justify-end gap-7 mx-7">
            {navItems.map((item) => (
              <a key={item.path} className="nav-hover-btn">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
