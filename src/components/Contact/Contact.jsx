import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  const icons = [
    {
      id: 1,
      Icon: FaWhatsapp,
      link: "",
    },
    {
      id: 2,
      Icon: FaInstagram,
      link: "",
    },
    {
      id: 3,
      Icon: FaFacebookF,
      link: "",
    },
  ];
  return (
    <section
      id="contact"
      className="w-full p-24 px-40 h-screen bg-[var(--background)] flex"
    >
      <div className="w-80 shrink-0 h-full border overflow-hidden border-[var(--primary)]/40 rounded-xl bg-[var(--primary)]/30 shadow-2xl shadow-[0_0_150px_-40px_#15ff00] text-[var(--primary)]">
        <form
          action="#"
          className="w-full h-full flex items-center p-8 gap-4 flex-col cursor-default"
        >
          <h1 className="text-4xl font-bold"> Contact Us</h1>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="#" className="text-xs">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 p-1  border-b text-[var(--text)]"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="#" className="text-xs">
              E-maail address
            </label>
            <input
              type="email"
              placeholder="Enter you e-mail address"
              className="px-4 p-1  border-b text-[var(--text)]"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="#" className="text-xs">
              Messsage
            </label>
            <textarea
              name="#"
              id=""
              placeholder="Message"
              rows={6}
              cols={15}
              className="border rounded-xl p-2 text-[var(--text)]"
            ></textarea>
          </div>
          <input
            type="submit"
            className="w-full p-2 bg-[var(--primary)]/70 font-bold rounded-xl text-[var(--text)]"
          />
        </form>
      </div>

      <div className="w-full h-full flex justify-center items-center gap-6 flex-col text-[var(--primary)]">
        <h1 className="text-2xl font-bold">Our team</h1>
        <p className="w-[40ch] text-center ">
          Providing the best ideas, Ui & Ux user interfaces and also responsive
          web applications. Editing Backend database and API update
        </p>

        <span className="flex gap-6 items-center w-50 justify-center p-2 rounded-full">
          {icons.map((icon) => {
            return (
              <a
                href={icon.link}
                key={icon.id}
                className="p-2 rounded-full border hover:shadow-[0_0_20px_#15ff00] hover:bg-[#15ff00] duration-300 text-[var(--text)] hover:scale-120"
              >
                <icon.Icon />
              </a>
            );
          })}
        </span>
      </div>
    </section>
  );
};

export default Contact;
