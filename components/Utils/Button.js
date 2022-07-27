import Link from "next/link";

export const Button = ({ children, variant, href }) => {
  return (
    <Link href={href || ""}>
      <button className="transition-all flex gap-4 justify-center items-center mt-4 px-6 py-2 rounded-full bg-brand-button text-white hover:bg-brand-button-hover">
        {children}
      </button>
    </Link>
  );
};
