import Link from "next/link";

const LinkButton = ({ children, href }) => {
  return (
    <Link
      className="w-fit block bg-sky-500 hover:bg-sky-700 px-4 py-2 rounded text-gray-50"
      href={href}
    >
      {children}
    </Link>
  );
};

export const RedLinkButton = ({ children, href }) => {
  return (
    <Link
      className="w-fit block bg-red-500 hover:bg-red-700 px-4 py-2 rounded text-gray-50"
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
