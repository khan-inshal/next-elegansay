import React, { useState } from "react";
import { MobileSidebar } from "./MobileSidebar";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-black w-full py-4 fixed top-0 left-0 right-0 z-50">
      <section className="container container-width text-white flex justify-between items-center">
        <h2 className="font-bold tracking-wide text-2xl">
          <span className="text-brand-accent">Elegan</span>say.
        </h2>

        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            <NavLinks />
          </ul>
        </nav>

        <button className="lg:hidden" onClick={() => setNavOpen(true)}>
          <FaBars className="text-xl" />
        </button>

        {navOpen ? <MobileSidebar setNavOpen={setNavOpen} /> : ""}
      </section>
    </header>
  );
};

export default Navbar;
