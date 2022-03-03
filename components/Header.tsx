import React, { useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "beautiful-react-hooks";
import { RiCommandLine } from "react-icons/ri";
import ClientOnly from "components/ClientOnly";
import Avatar from "public/images/avatar.png";
import { useNavigationItems } from "hooks";

const MobileNavigation: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigationItems } = useNavigationItems();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <button
        aria-label="Menu"
        onClick={toggleMenu}
        className={clsx("tham tham-w-6 tham-e-squeeze z-20", {
          "tham-active": isOpen,
        })}
      >
        <div className="tham-box">
          <div className="tham-inner bg-slate-300" />
        </div>
      </button>

      {isOpen && (
        <div
          className={clsx(
            "absolute top-0 left-0 z-10 h-full w-full bg-slate-900"
          )}
        />
      )}

      {isOpen && (
        <div className="absolute top-0 left-0 z-10 h-full w-full">
          <nav className="grid h-full w-full content-center justify-center">
            <ul className="flex flex-col space-y-4 transition-opacity duration-200">
              {navigationItems.map(({ name, path, isActive }) => (
                <li
                  key={name}
                  className={clsx(
                    "text-2xl font-medium hover:text-slate-300",
                    isActive ? "text-slate-200" : "text-slate-400"
                  )}
                >
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

const DesktopNavigation: React.FC = () => {
  const { navigationItems } = useNavigationItems();

  return (
    <nav className="max-w-3xl flex-1">
      <ul className="flex justify-between">
        {navigationItems.map(({ name, path, isActive }) => (
          <li
            key={name}
            className={clsx(
              "rounded-lg py-2 px-3 font-medium",
              "transition-colors duration-100 ease-in hover:bg-slate-800 hover:text-slate-200",
              isActive ? "bg-slate-800 text-slate-200" : "text-slate-300"
            )}
          >
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <header className="flex items-center justify-between p-8 text-sm">
      <ClientOnly>
        <div
          className={clsx(
            "relative h-10 w-10 rounded-full border-2 border-solid border-slate-100",
            {
              hidden: isMobile,
            }
          )}
        >
          <Link href="/">
            <a>
              <Image src={Avatar} layout="fill" alt="Picture of Zsolt Gomori" />
            </a>
          </Link>
        </div>

        {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      </ClientOnly>

      <button
        aria-label="Command"
        className={clsx(
          "z-10 rounded-lg p-1.5",
          "group transition-colors duration-100 ease-in hover:bg-slate-800"
        )}
      >
        <RiCommandLine
          className={clsx(
            "h-6 w-6 text-slate-400",
            "transition-colors duration-100 ease-in  group-hover:text-slate-200"
          )}
        />
      </button>
    </header>
  );
};

export default Header;
