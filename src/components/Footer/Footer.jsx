import { Link } from "react-router-dom";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { GrNode } from "react-icons/gr";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="container-root px-6 py-4 flex justify-between items-center max-md:flex-col">
        <div className="flex flex-col basis-1/3">
          <Link to={"/"}>
            <h2 className="text-3xl font-bold mt-3">ErdalShop</h2>
          </Link>
          <p className="text-gray-300 mb-2 italic">&copy;All rights reserved</p>
        </div>
        <div className="flex justify-center gap-4 basis-1/3 max-md:my-3">
          <a
            href="https://www.linkedin.com/in/muhammederdal/"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <BsLinkedin size={24} />
          </a>
          <a
            href="https://github.com/coderdal"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <BsGithub size={24} />
          </a>
        </div>
        <div className="flex justify-end leading-3 font-thin italic gap-2 items-center max-md:my-3 basis-1/3">
          <span className="font-semibold">Made with</span> <FaReact size={22} />{" "}
          & <SiTailwindcss size={22} /> & <GrNode size={22} /> &
          <BsFillSuitHeartFill size={22} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
