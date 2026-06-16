import React from "react";

const Alert = (props) => {
  return (
    props.state === true && (
      <div className="sticky top-10 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl bg-white flex items-center gap-4 text-2xl">
        <h1>{props.text}</h1>
      </div>
    )
  );
};

export default Alert;
