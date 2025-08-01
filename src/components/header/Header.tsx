"use client";
import React from "react";
import Link from "next/link";
import menu from "@/config/menu.json";
import config from "@/config/config.json";
import Logo from "@/components/Logo";
import { Disclosure } from "@headlessui/react";
import type { MenuConfig } from "@/types/menu";
const Header = () => {
  const { main } = menu as MenuConfig;
  const { logo } = config.site;
  const { label, link } = config.nav_button;
  return (
    <div className="w-[80%] mx-auto md:w-[90%] shadow-lg rounded-[50px] mt-4">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Logo src={logo} />

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href={link}
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              {label}
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {main.map((menu, i) => (
                    <div key={i}>
                      {menu.hasChildren ? (
                        <li className="nav-item nav-dropdown group relative">
                          <span className="nav-link inline-flex items-center">
                            {menu.name}
                            <svg
                              className="h-4 w-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.951.707 8.448 0 10l9.293 5.502 9.293-5.502 3.586.775-9.293 5.502L15 10z" />
                            </svg>
                          </span>
                          <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                            {menu.children.map((child, i) => (
                              <li
                                className="nav-dropdown-item"
                                key={`child-${i}`}
                              >
                                <Link
                                  href={child.url}
                                  className="nav-dropdown-link block"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li className="mr-3 nav__item">
                          <Link
                            href={menu.url}
                            className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                          >
                            {menu.name}
                          </Link>
                        </li>
                      )}
                    </div>
                  ))}
                </>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex flex-1 lg:items-center absolute left-1/2 transform -translate-x-1/2">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {main.map((menu, i) => (
              <div key={i}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.951.707 8.448 0 10l9.293 5.502 9.293-5.502 3.586.775-9.293 5.502L15 10z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={i}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="mr-3 nav__item">
                    <Link
                      href={menu.url}
                      className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
