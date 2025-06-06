import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { toast } from "react-hot-toast";
import { Badge } from "antd";
import { useCart } from "../context/cart";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isnavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [cart] = useCart();

  // function to toggle user menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  // function to toggle nav menu
  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isnavMenuOpen);
  };

  // function to handle logout functionality
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="bg-white dark:bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <Link to="/" className="text-orange-600">
                  E-Commerce Store
                </Link>
              </div>
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                <li>
                  <Link
                    to="/"
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Home
                  </Link>
                </li>
                <li className="shrink-0">
                  <button
                    onClick={() => {
                      toast.success("Page will be added soon");
                    }}
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Best Products
                  </button>
                </li>
                <li className="shrink-0">
                  <button
                    onClick={() => {
                      toast.success("Page will be added soon");
                    }}
                    className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Today's Deals
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex items-center lg:space-x-2 ">
              <Badge count={cart?.length} showZero offset={[-8, 2]}>
                <Link
                  to="/cart"
                  id="myCartDropdownButton1"
                  data-dropdown-toggle="myCartDropdown1"
                  type="button"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white mx-2"
                >
                  <span className="sr-only">Cart</span>
                  <svg
                    className="w-5 h-5 lg:me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  <span className="hidden sm:flex"> My Cart</span>
                </Link>
              </Badge>

              <button
                onClick={toggleUserMenu}
                id="userDropdownButton1"
                data-dropdown-toggle="userDropdown1"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <svg
                  className="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Account
                <svg
                  className="w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  isUserMenuOpen ? "absolute" : "hidden"
                } z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700 mt-40`}
              >
                <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  {!auth?.user ? (
                    <>
                      <li>
                        <Link
                          to="/login"
                          className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          {" "}
                          Log In{" "}
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          {" "}
                          Log out{" "}
                        </button>
                      </li>
                    </>
                  )}
                </ul>
                {auth?.user ? (
                  <>
                    <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                      <Link
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {" "}
                        Dashboard{" "}
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                      <Link
                        to="/signup"
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {" "}
                        Sign Up{" "}
                      </Link>
                    </div>
                  </>
                )}

                {/* <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                  <a
                    href="#"
                    
                    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {" "}
                    Log Out{" "}
                  </a>
                </div> */}
              </div>

              <button
                onClick={toggleNavMenu}
                type="button"
                data-collapse-toggle="ecommerce-navbar-menu-1"
                aria-controls="ecommerce-navbar-menu-1"
                aria-expanded="false"
                className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="ecommerce-navbar-menu-1"
            className={`${
              isnavMenuOpen
                ? "bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4"
                : "hidden"
            } `}
          >
            <ul className="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Gift Ideas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Home &amp; Garden
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
