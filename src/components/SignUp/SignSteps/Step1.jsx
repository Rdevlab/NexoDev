import React, { use, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaUser,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import Skills from "./Skills";
import ActiveProjects from "./ActiveProjects";
import Users from "../../Users/Users";
import FinalPage from "./FinalPage";
import Alert from "../../Alert/Alert";
const Step1 = ({ setSign, sign }) => {
  const [users, setUsers] = useState(Users);
  const [name, setName] = useState("");
  const [username, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [github, setGithub] = useState("");
  const [insta, setInsta] = useState(null);
  const [group, setGroup] = useState([]);
  const [techno, setTech] = useState([]);
  const [social, setSocial] = useState([
    {
      link: `https://wa.me/${whatsApp}?text=Hello`,
      Icon: FaWhatsapp,
    },
    {
      link: `https://www.instagram.com/${insta}`,
      Icon: FaInstagram,
    },
    {
      link: `https://github.com/${github}`,
      Icon: FaGithub,
    },
  ]);
  const [next, setNext] = useState(false);
  const [final, setFinal] = useState(false);
  const sendData = () => {
    Users.push({
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
  };

  return (
    sign === true && (
      <div className=" text-white backdrop-blur-xs  rounded-2xl flex flex-col gap-4 max-w-300 max-h-160 w-max h-max duration-300 border p-10 flex relative">
        {/* profile */}
        <div className="flex gap-4">
          {next === false && (
            <div className="flex flex-col gap-4  items-center w-max shrink-0 justify-center text-md animate-[divAnimate_.4s_ease_forwards] duration-300">
              <h1 className="w-full p-2 bg-white/10 text-center rounded-xl text-2xl font-bold">
                Complete basic information
              </h1>
              <FaUserTie className="text-6xl" />
              {/* name and username */}
              <div className="flex gap-4 items-center w-full">
                <div className="flex flex-col w-full border-b p-2">
                  <label htmlFor="name">what's your first name?</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="type here"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full border-b p-2 ">
                  <label htmlFor="username">Choose a username</label>
                  <input
                    type="text"
                    id="username"
                    required
                    placeholder="type here"
                    onChange={(e) => {
                      setUname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 w-full">
                {/* password */}
                <div className="flex flex-col w-full border-b p-2">
                  <label htmlFor="password">Choose a password</label>
                  <input
                    type="text"
                    id="password"
                    required
                    placeholder="type here"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                {/* whatsapp number */}
                <div className="flex flex-col w-full border-b p-2">
                  <label htmlFor="whatsapp">Enter whatsApp number</label>
                  <input
                    type="text"
                    id="whatsapp"
                    required
                    placeholder="type here"
                    onChange={(e) => {
                      setWhatsApp(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4  w-full ">
                <div className="flex flex-col w-full border-b p-2">
                  <label htmlFor="github">Enter github username</label>
                  <input
                    type="text"
                    id="github"
                    placeholder="type here"
                    onChange={(e) => {
                      setGithub(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full border-b p-2 ">
                  <label htmlFor="insta">Enter instagram username</label>
                  <input
                    type="text"
                    id="insta"
                    required
                    placeholder="type here"
                    onChange={(e) => {
                      setInsta(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  if (
                    document.querySelector("#name").value != "" &&
                    document.querySelector("#username").value != "" &&
                    document.querySelector("#password").value != "" &&
                    document.querySelector("#insta").value != "" &&
                    document.querySelector("#github").value != "" &&
                    document.querySelector("#whatsapp").value != ""
                  ) {
                    setNext(true);
                  } else {
                    <Alert text={"please fill all the inputs"} state={true} />;
                  }
                }}
                className="flex gap-4 items-center w-full p-2 bg-white/10 rounded-xl hover:bg-white/20 duration-300 cursor-pointer justify-center"
              >
                Next <FaArrowRight />
              </button>
            </div>
          )}

          {next === true && (
            <Skills
              tech={techno}
              setTech={setTech}
              group={group}
              setGroup={setGroup}
              setFinal={setFinal}
              final={final}
            />
          )}

          {/* lastbtn */}
          {final === true && <FinalPage sendData={sendData} />}
        </div>
      </div>
    )
  );
};

export default Step1;
