import Link from "next/link";

export const Button = ({ children, variant, href }) => {
  if (variant === "black") {
    return (
      <Link href={href || ""}>
        <button className="transition-all flex gap-4 items-center mt-4 px-6 py-2 rounded-full bg-brand-accent text-white">
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <Link href={href || ""}>
        <button className="transition-all flex gap-4 items-center mt-4 px-6 py-2 rounded-full bg-brand-accent text-black">
          {children}
        </button>
      </Link>
    );
  }
};
