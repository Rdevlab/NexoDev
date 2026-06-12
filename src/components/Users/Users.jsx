import Rohullah from "../../assests/RohullahProfile.png";
import Latif from "../../assests/latifProfile.jpeg";
import Hanif from "../../assests/hanifPorfile.jpeg";
import Mahram from "../../assests/mahramProfile.jpeg";
import Ali from "../../assests/hashimiProfile.jpeg";
import Mazhar from "../../assests/Mazhar.png";
import Karimi from "../../assests/Karimi.png";
import { FaWhatsapp, FaInstagram, FaPhone, FaGithub } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { DiDjango } from "react-icons/di";

const Users = [
  {
    id: 1,
    name: "Rohullah Ahmadi",
    image: Rohullah,
    username: "Rohullah",
    password: "neo",
    group: "Boxmarket && University",
    role: "Junior Developer && Admin",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      { id: 1, link: "", Icon: FaWhatsapp },
      { id: 2, link: "", Icon: FaInstagram },
      { id: 3, link: "", Icon: FaGithub },
    ],
  },
  {
    id: 2,
    name: "Latif Kheradmand",
    image: Latif,
    username: "latif",
    password: "l0ve",
    group: "Boxmarket && University",
    role: "Junior Developer && Admin",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      { id: 1, link: "", Icon: FaWhatsapp },
      { id: 2, link: "", Icon: FaInstagram },
      { id: 3, link: "", Icon: FaGithub },
    ],
  },
  {
    id: 3,
    name: "Hanif Sarabi",
    image: Hanif,
    username: "sarabi",
    password: "Hanif@#2001",
    group: "Boxmarket",
    role: "Junior Developer",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      { id: 1, link: "", Icon: FaWhatsapp },
      { id: 2, link: "", Icon: FaInstagram },
      { id: 3, link: "", Icon: FaGithub },
    ],
  },
  {
    id: 4,
    name: "Mahram Rezaiee",
    image: Mahram,
    username: "mahram",
    password: "M523",
    group: "Boxmarket",
    role: "Junior Developer",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      { id: 1, link: "", Icon: FaWhatsapp },
      { id: 2, link: "", Icon: FaInstagram },
      { id: 3, link: "", Icon: FaGithub },
    ],
  },
  {
    id: 5,
    name: "Ali Reza Hashimi",
    image: Ali,
    username: "hashimi",
    password: "Ali435",
    group: "Boxmarket",
    role: "Junior Developer",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      { id: 1, link: "", Icon: FaWhatsapp },
      { id: 2, link: "", Icon: FaInstagram },
      { id: 3, link: "", Icon: FaGithub },
    ],
  },
  {
    id: 6,
    name: "Ali Mazhar",
    image: Mazhar,
    username: "Mazhar",
    password: "M465",
    group: "University",
    role: "Senior Developer",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      { id: 1, link: "", Icon: FaWhatsapp },
      { id: 2, link: "", Icon: FaInstagram },
      { id: 3, link: "", Icon: FaGithub },
    ],
  },
  {
    id: 6,
    name: "Rezwan Karimi",
    image: Karimi,
    username: "Karimi",
    password: "R6532",
    group: "University",
    role: "Senior Developer",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      { id: 1, link: "", Icon: FaWhatsapp },
      { id: 2, link: "", Icon: FaInstagram },
      { id: 3, link: "", Icon: FaGithub },
    ],
  },
];
export default Users;
