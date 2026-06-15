import React, { use, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaUser,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import Skills from "./Skills";
import ActiveProjects from "./ActiveProjects";
import Users from "../../Users/Users";
const Step1 = ({ setSign, sign }) => {
  const [users, setUsers] = useState(Users);
  const [name, setName] = useState(null);
  const [username, setUname] = useState(null);
  const [password, setPassword] = useState(null);
  const [whatsApp, setWhatsApp] = useState(null);
  const [github, setGithub] = useState(null);
  const [insta, setInsta] = useState(null);
  const [group, setGroup] = useState([]);
  const [social, setSocial] = useState([
    { id: 1, link: whatsApp, Icon: FaWhatsapp },
    {
      id: 2,
      link: insta,
      Icon: FaInstagram,
    },
    { id: 3, link: github, Icon: FaGithub },
  ]);
  const [techno, setTech] = useState([{ id: null, name: null, Icon: null }]);
  const [me, setMe] = useState([]);
  function addme() {}

  return (
    sign === true && (
      <div className=" text-white backdrop-blur-xs rounded-2xl flex flex-col gap-4 w-300 h-160 border p-4 flex relative">
        {/* profile */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4  items-center w-max shrink-0 justify-center text-md">
            <FaUserTie className="text-6xl" />
            <div className="flex flex-col w-full border-b p-2">
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                id="name"
                placeholder="type here"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col w-full border-b p-2 ">
              <label htmlFor="username">Enter your username</label>
              <input
                type="text"
                id="username"
                placeholder="type here"
                onChange={(e) => {
                  setUname(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col w-full border-b p-2">
              <label htmlFor="password">Enter your password</label>
              <input
                type="text"
                id="password"
                placeholder="type here"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col w-full border-b p-2">
              <label htmlFor="whatsapp">Enter your whatsApp number</label>
              <input
                type="text"
                id="whatsapp"
                placeholder="type here"
                onChange={(e) => {
                  setWhatsApp(`https://wa.me/${e.target.value}?text=Hello`);
                }}
              />
            </div>
            <div className="flex flex-col w-full border-b p-2">
              <label htmlFor="github">Enter your github username</label>
              <input
                type="text"
                id="github"
                placeholder="type here"
                onChange={(e) => {
                  setGithub(`https://github.com/${e.target.value}`);
                }}
              />
            </div>
            <div className="flex flex-col w-full border-b p-2">
              <label htmlFor="insta">Enter your instagram username</label>
              <input
                type="text"
                id="insta"
                placeholder="type here"
                onChange={(e) => {
                  setInsta(`https://www.instagram.com/${e.target.value}`);
                }}
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-6 items-center justify-center">
            <Skills tech={techno} setTech={setTech} />
            <ActiveProjects group={group} setGroup={setGroup} />
          </div>
          <button
            onClick={() => {
              Users.push({
                id: Number,
                name: name,
                image: null,
                image: null,
                username: username,
                password: password,
                group: group,
                role: "user",
                tech: techno,
                socialMedia: social,
              });
              setSign(false);
            }}
            className="flex gap-2 items-center absolute bottom-0 right-0 px-4 rounded-xl p-2 font-bold bg-white/10"
          >
            <FaUser /> Create Account
          </button>
        </div>
      </div>
    )
  );
};

export default Step1;
