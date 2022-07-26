import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

export const MobileSidebar = ({ setNavOpen }) => {
  return (
    <nav className="py-4 px-8 fixed top-0 right-0 w-9/12 min-h-screen bg-black lg:hidden">
      <button
        className="absolute right-8 w-fit"
        onClick={() => setNavOpen(false)}
      >
        <FaTimes className="text-2xl" />
      </button>

      <ul className="mt-16 min-h-full flex flex-col gap-4 text-2xl">
        <NavLinks />
      </ul>
    </nav>
  );
};
