import React from "react";

const nav = () => {
  const nav = [
    { link: "Top" },
    { link: "Work" },
    { link: "Portfolio" },
    { link: "Contact" },
  ];

  return (
    <div>
      <header className="navbar">
        {nav.map((items, index) => {
          return <span key={index}>{items.link}</span>;
        })}
      </header>
      <hr />
    </div>
  );
};

export default nav;
