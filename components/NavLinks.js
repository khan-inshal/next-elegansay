import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/properties">Properties</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">Contact Us</Link>
      </li>
    </>
  );
};

export default NavLinks;
