import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};

const DesktopNavbar = () => {
  return (
    <nav className="hidden md:min-w-[20%] lg:min-w-[15%] min-h-full md:flex flex-col bg-gray-800">
      <div className="bg-gray-950 p-4">
        <p className="text-gray-50 font-bold">
          <span className="text-sky-500">Data</span>Daerah
        </p>
      </div>
      <div className="flex flex-col py-4 text-gray-400 hover:bg-cursor-pointer">
        <Link prefetch={false} href="/" className="p-4 group hover:bg-gray-900">
          <p className="flex flex-row gap-x-3">
            <span className="group-hover:text-sky-600">
              <FontAwesomeIcon icon={faHouseChimney} />
            </span>
            <span className="group-hover:text-gray-50">Dashboard</span>
          </p>
        </Link>
        <Link
          prefetch={false}
          href="/add"
          className="p-4 group hover:bg-gray-900"
        >
          <p className="flex flex-row gap-x-4">
            <span className="group-hover:text-sky-600">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className="group-hover:text-gray-50">New Data</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  return (
    <nav className="md:hidden min-h-full md:flex flex-col bg-gray-800">
      <div className="bg-gray-950 p-4">
        <p className="text-gray-50 font-bold">
          <span className="text-sky-500">D</span>D
        </p>
      </div>
      <div className="flex flex-col py-4 text-gray-400 hover:bg-cursor-pointer">
        <Link prefetch={false} href="/" className="p-4 group hover:bg-gray-900">
          <p className="space-x-4 group-hover:text-sky-600">
            <FontAwesomeIcon icon={faHouseChimney} />
          </p>
        </Link>
        <Link
          prefetch={false}
          href="/add"
          className="p-4 group hover:bg-gray-900"
        >
          <p className="space-x-4 group-hover:text-sky-600 group-hover:text-gray-50">
            <FontAwesomeIcon icon={faPlus} />
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
