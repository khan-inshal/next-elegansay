import Link from "next/link";

export const GhostButton = ({ variant, children, href }) => {
  if (variant === "black-outline") {
    return (
      <Link href={href || ""}>
        <button className="transition-all flex gap-4 justify-center items-center mt-4 px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white">
          {children}
        </button>
      </Link>
    );
  } else if (variant === "black-outline-small") {
    return (
      <Link href={href || ""}>
        <button className="transition-all text-sm flex gap-4 justify-center items-center mt-2 px-3 py-1 rounded-full border border-black hover:bg-black hover:text-white">
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <Link href={href || ""}>
        <button className="transition-all flex gap-4 justify-center items-center mt-4 px-6 py-2 rounded-full border border-brand hover:bg-brand hover:text-black">
          {children}
        </button>
      </Link>
    );
  }
};
