import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-4">
      <section className="container container-width flex  flex-col justify-between items-center lg:flex-row">
        <div className="text-center lg:text-left">
          <p className="text-lg">Elegansay</p>
          <p className="text-neutral-400">&copy; Copyright 2022</p>
        </div>
        <p className="text-neutral-400">
          Designed &amp; developed by{" "}
          <span className="text-white transition-all underline underline-offset-2 hover:text-blue-400">
            <Link className="" href="https://github.com/khaninshal24">
              Inshal Khan
            </Link>
          </span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
