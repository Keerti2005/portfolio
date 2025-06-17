'use client';
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent w-full px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-5">
        <div className="mb-2 md:mb-0">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            KEERTI MADHUVANTIKA A
          </Link>
        </div>

        <ul
          id="navbar-default"
          className="flex flex-col items-start text-sm space-y-1 md:flex-row md:space-y-0 md:space-x-4"
        >
          <li>
            <Link href="/#about" className="text-white hover:text-pink-600">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-white hover:text-pink-600">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-white hover:text-pink-600">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-white hover:text-pink-600">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/#achievements" className="text-white hover:text-pink-600">
              ACHIEVEMENTS
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-white hover:text-pink-600">
              EDUCATION
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-white hover:text-pink-600">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
