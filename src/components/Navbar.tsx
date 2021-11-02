import { ReactElement, useState } from "react";
import { IconType } from "react-icons";
import { FaCat, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const onAboutClick = () => {
    setShow(!show)
    const aboutItem = document.getElementById('about-item')

    if (show === true) {
      aboutItem!.style.opacity = '0'
      aboutItem!.style.display = 'none'
    } else {
      aboutItem!.style.opacity = '100%';
      aboutItem!.style.display = 'block';
    }
  }

  return (
    <nav className="bg-trueGray-800 p-4 w-full flex justify-around fixed lg:justify-between">
      <p className="inline-flex self-end">
        Random Cat Getter
        <FaCat className="ml-2 self-center" />
      </p>
      <ul className="justify-self-end flex">
        <span>
          <button id="about-button" className="cursor-pointer px-3" onClick={() => onAboutClick()}>
            <p id="about-button-text" className="border-b border-trueGray-200 border-opacity-0 transition duration-150 hover:border-opacity-100">About</p>
          </button>
          <p id="about-item" style={{opacity: 0, display: "none"}} className="bg-gray-300 p-3 absolute top-12 left-auto text-trueGray-900 rounded-lg transition duration-150 lg:text-sm">Made by <a className="text-blue-800 hover:underline" href="https://github.com/Ti7oyan" target="_blank">Ticiano Morvan</a></p>
        </span>
        <NavbarItem text="Fork me!" href="#github" icon={<FaGithub />} />
      </ul>
    </nav>
  );
}

interface NavbarInterface {
  text: string;
  href: string;
  icon: ReactElement<IconType>;
}

const NavbarItem: React.FC<NavbarInterface> = ({ text, href, icon }) => {
  return (
    <li className="self-center mx-2">
      <a className="inline-flex" href={href} rel="noreferrer">
        <span className="self-center mx-2">{icon}</span>
        <p className="border-b border-opacity-0 border-trueGray-200 transition duration-100 hover:border-opacity-100">{text}</p>
      </a>
    </li>
  );
};
