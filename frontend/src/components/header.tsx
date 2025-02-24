import { useRef, useState } from "react";
import cn from "classnames";
import useOnClickOutside from "../hooks/useClickOutside";
import burgerIcom from "../assets/bars-solid.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null!);
  const listItemClasses =
    "text-white sm:text-primary sm:text-lg sm:font-bold cursor-pointer hover:bg-secondary w-full p-2 rounded text-center hover:text-black";
  const navItems = ["Home", "Recent", "New"];

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));
  return (
    <header className="flex items-center justify-between bg-[#FBF8EE] text-white">
      <img
        src={"src/assets/blog-logo.png"}
        className="w-28 sm:w-32 lg:w-40"
        alt="blogs logo"
      />
      <img
        src={burgerIcom}
        alt="open header menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-6 cursor-pointer sm:hidden"
      />
      <div
        className={cn("fixed top-0 left-0 size-full bg-overlay z-30 hidden", {
          "!block": isMenuOpen,
        })}
      ></div>
      <div
        ref={menuRef}
        className={cn(
          "fixed scale-x-0 p-4 sm:p-0 bg-primary h-screen z-30 right-0 top-0 w-3/4 duration-300 transform origin-right sm:scale-100 sm:relative sm:bg-secondary sm:w-auto sm:h-auto",
          {
            "scale-x-100": isMenuOpen,
          }
        )}
      >
        <ul className="gap-4 w-full flex flex-col sm:flex-row items-center">
          {navItems.map((item) => (
            <li key={item} className={listItemClasses}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}