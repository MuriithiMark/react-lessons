import React from "react";
import "./nav-bar.css";
import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = () => {
  const [current, setCurrent] = useState("/");

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/invest",
      name: "Invest",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  useEffect(() => {
    setCurrent(() => window.location.pathname);
  }, [window.location.pathname]);

  return (
    <>
      <div className="nav-bar">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({isActive, isPending}) => isActive ? "active" : "not-active"}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
