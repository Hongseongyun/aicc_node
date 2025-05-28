import React from 'react';
import { navMenus } from '../../utils/menuList';
import { Link, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Navbar = () => {
  const path = useLocation();
  const isActive = (idx) => path.pathname === idx;

  return (
    <nav className="bg-[#212121] w-1/5 h-full rounded-sm border border-gray-500 py-10 px-4 flex flex-col justify-between items-center">
      <div className="logo-wrapper flex w-full items-center justify-center gap-8">
        <div className="logo"></div>
        <h2 className="font-semibold text-xl">
          <Link to="/">MARSHALL</Link>
        </h2>
      </div>
      <ul className="menus">
        {navMenus.map((menu, idx) => (
          <li
            key={idx}
            className={`rounded-sm mb-1 border border-gray-700 hover:bg-gray-950 transition-all duration-300 ${
              isActive(menu.to) ? 'bg-gray-950' : ''
            }`}
          >
            <Link to={menu.to} className="flex gap-x-4 items-center py-2 px-10">
              {menu.icon}
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="auth-wrapper flex justify-center w-4/5">
        <button className="flex justify-center items-center gap-2 bg-gray-300 text-gray-900 py-3 px-4">
          <FcGoogle />
          <span className="text-sm">Google Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
