import { Button } from "@material-tailwind/react";
import { BsWikipedia } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { GrGithub } from "react-icons/gr";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-10 flex items-center justify-between">
      <a className="text-2xl font-bold flex items-center gap-2" href="#">
        <BsWikipedia className="h-6 w-6 hidden md:block" />
        <span>Wikipedia Featured Content</span>
      </a>
      <nav className=" items-center gap-4">
        <a
          className="text-2xl md:text-lg font-medium hover:underline flex items-center gap-2"
          href="https://github.com/NicholasMendez11/Wiki-Project.git"
        >
          <GrGithub />
          <p className="hidden md:block"> Github Repository</p>
        </a>
      </nav>
    </header>
  );
}

export default Header;
