import Rohullah from "../../assests/RohullahProfile.png";
import Latif from "../../assests/latifProfile.jpeg";
import Hanif from "../../assests/hanifPorfile.jpeg";
import Mahram from "../../assests/mahramProfile.jpeg";
import Ali from "../../assests/hashimiProfile.jpeg";
import Mazhar from "../../assests/Mazhar.png";
import Karimi from "../../assests/Karimi.png";
// project logo
import boxmarket from "./logo/boxmarketlogo.png";
import devgroup from "./logo/devgrouplogo.png";
import ums from "./logo/UMSlogo.png";
// icons
import {
  FaVuejs,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { DiDjango, DiMsqlServer } from "react-icons/di";
import { PiAngularLogoBold } from "react-icons/pi";
import { LiaDocker } from "react-icons/lia";
import { SiDart } from "react-icons/si";

// main list
const Users = [
  {
    id: 1,
    name: "Rohullah Ahmadi",
    image: Rohullah,
    username: "Rohullah",
    password: "neo",
    group: [
      {
        id: 1,
        name: "DevGroup",
        logo: devgroup,
      },
      {
        id: 2,
        name: "University",
        logo: ums,
      },
      {
        id: 3,
        name: "BoxMarket",
        logo: boxmarket,
      },
    ],
    role: "Junior Developer && Admin",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
      { id: 7, name: "Git", Icon: FaGitAlt },
    ],
    socialMedia: [
      { id: 1, link: "https://wa.me/93749542078?text=Hello", Icon: FaWhatsapp },
      {
        id: 2,
        link: "https://www.instagram.com/_4K_rohi_Official",
        Icon: FaInstagram,
      },
      { id: 3, link: "https://github.com/Rdevlab", Icon: FaGithub },
    ],
  },

  {
    id: 2,
    name: "Latif Kheradmand",
    image: Latif,
    username: "latif",
    password: "l0ve",
    group: [
      {
        id: 1,
        name: "DevGroup",
        logo: devgroup,
      },
      {
        id: 2,
        name: "University",
        logo: ums,
      },
      {
        id: 3,
        name: "BoxMarket",
        logo: boxmarket,
      },
    ],
    role: "Junior Developer && Admin",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 5, name: "React", Icon: FaReact },
      { id: 6, name: "Github", Icon: FaGithub },
      { id: 7, name: "Python", Icon: FaPython },
      { id: 8, name: "Java", Icon: FaJava },
    ],
    socialMedia: [
      {
        id: 1,
        link: "https://wa.me/+989964328909?text=Hello",
        Icon: FaWhatsapp,
      },
      {
        id: 2,
        link: "https://www.instagram.com/latifkhradmand/",
        Icon: FaInstagram,
      },
      { id: 3, link: "https://github.com/latifkhradmand", Icon: FaGithub },
    ],
  },
  {
    id: 3,
    name: "Hanif Sarabi",
    image: Hanif,
    username: "sarabi",
    password: "Hanif@#2001",
    group: [
      {
        id: 3,
        name: "BoxMarket",
        logo: boxmarket,
      },
    ],
    role: "Junior Developer",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      {
        id: 1,
        link: "https://wa.me/+93770711494?text=Hello",
        Icon: FaWhatsapp,
      },
      { id: 2, link: "https://www.instagram.com/myinsta/", Icon: FaInstagram },
      { id: 3, link: "https://github.com/myusername", Icon: FaGithub },
    ],
  },
  {
    id: 4,
    name: "Mahram Rezaiee",
    image: Mahram,
    username: "mahram",
    password: "M523",
    group: [
      {
        id: 3,
        name: "BoxMarket",
        logo: boxmarket,
      },
    ],
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
      {
        id: 1,
        link: "https://wa.me/+93775509373?text=Hello",
        Icon: FaWhatsapp,
      },
      { id: 2, link: "https://www.instagram.com/myinsta/", Icon: FaInstagram },
      { id: 3, link: "https://github.com/mahranjan0093-cmyk", Icon: FaGithub },
    ],
  },
  {
    id: 5,
    name: "Ali Reza Hashimi",
    image: Ali,
    username: "hashimi",
    password: "Ali435",
    group: [
      {
        id: 3,
        name: "BoxMarket",
        logo: boxmarket,
      },
    ],
    role: "Junior Developer",
    tech: [
      { id: 1, name: "Html", Icon: FaHtml5 },
      { id: 2, name: "Css", Icon: FaCss3 },
      { id: 3, name: "JavaScript", Icon: FaJsSquare },
      { id: 4, name: "Tailwindcss", Icon: BiLogoTailwindCss },
      { id: 6, name: "Github", Icon: FaGithub },
    ],
    socialMedia: [
      {
        id: 1,
        link: "https://wa.me/+93774385487?text=Hello",
        Icon: FaWhatsapp,
      },
      { id: 2, link: "https://www.instagram.com/myinsta/", Icon: FaInstagram },
      { id: 3, link: "https://github.com/Ali13767676", Icon: FaGithub },
    ],
  },
  {
    id: 6,
    name: "Ali Mazhar",
    image: Mazhar,
    username: "Mazhar",
    password: "M465",
    group: [
      {
        id: 2,
        name: "University",
        logo: ums,
      },
    ],
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
      {
        id: 1,
        link: "https://wa.me/+93776774953?text=Hello",
        Icon: FaWhatsapp,
      },
      { id: 2, link: "https://www.instagram.com/myinsta/", Icon: FaInstagram },
      { id: 3, link: "https://github.com/myusername", Icon: FaGithub },
    ],
  },
  {
    id: 6,
    name: "Rezwan Karimi",
    image: Karimi,
    username: "Karimi",
    password: "R6532",
    group: [
      {
        id: 2,
        name: "University",
        logo: ums,
      },
    ],
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
      {
        id: 1,
        link: "https://wa.me/+93728327121?text=Hello",
        Icon: FaWhatsapp,
      },
      { id: 2, link: "https://www.instagram.com/myinsta/", Icon: FaInstagram },
      { id: 3, link: "https://github.com/myusername", Icon: FaGithub },
    ],
  },
];
export default Users;
