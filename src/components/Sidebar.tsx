import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMiniXMark, HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { navigation } from "../data/SidebarData";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 flex z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-neutral-900/80"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative flex w-full max-w-[250px] flex-1 bg-white dark:bg-neutral-800">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <HiMiniXMark className="h-6 w-6" />
            </button>

            <nav className="mt-6 flex flex-1 flex-col px-4">
              <ul role="list" className="flex flex-1 flex-col gap-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {item.subItems ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <DisclosureButton
                              className={classNames(
                                "group flex justify-between items-center w-full rounded-lg p-3 text-sm font-medium text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
                              )}
                            >
                              <div className="flex gap-x-3 items-center">
                                <item.icon className="h-4 w-4" />
                                {item.name}
                              </div>
                              <span>
                                {open ? (
                                  <HiChevronUp className="h-4 w-4" />
                                ) : (
                                  <HiChevronDown className="h-4 w-4" />
                                )}
                              </span>
                            </DisclosureButton>

                            <DisclosurePanel className="mt-1">
                              {item.subItems.map((subItem) => {
                                const isActive = location.pathname.startsWith(
                                  subItem.href.split("?")[0]
                                );

                                return (
                                  <NavLink
                                    key={subItem.name}
                                    to={subItem.href}
                                    className={classNames(
                                      isActive
                                        ? "bg-white text-black"
                                        : "text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700",
                                      "flex items-center gap-x-3 rounded-lg p-2 mt-1 text-sm"
                                    )}
                                  >
                                    <subItem.icon className="h-4 w-4" />
                                    {subItem.name}
                                  </NavLink>
                                );
                              })}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <NavLink
                        to={item.href}
                        className={classNames(
                          location.pathname.startsWith(item.href.split("?")[0])
                            ? "bg-white text-black"
                            : "text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700",
                          "group flex justify-between mt-1 items-center w-full rounded-lg p-3 text-sm font-medium"
                        )}
                      >
                        <div className="flex gap-x-3 items-center">
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </div>
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:flex-col lg:w-[250px]">
        <div className="flex grow flex-col overflow-y-auto bg-blue-50 border-neutral-200 dark:bg-neutral-900 px-4 pb-4">
          <div className="flex items-center justify-between pt-6 shrink-0">
            <a href="/" className="flex px-2 items-center">
              <p className="text-neutral-800 dark:text-white font-semibold text-base ">
                Healthcare Workforce
              </p>
            </a>
          </div>

          <nav className="mt-6 flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={classNames(
                              "group flex justify-between items-center w-full rounded-lg p-2 text-sm font-medium text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
                            )}
                          >
                            <div className="flex gap-x-3 items-center">
                              <item.icon className="h-4 w-4" />
                              {item.name}
                            </div>
                            <span>
                              {open ? (
                                <HiChevronUp className="h-4 w-4" />
                              ) : (
                                <HiChevronDown className="h-4 w-4" />
                              )}
                            </span>
                          </DisclosureButton>

                          <DisclosurePanel className="mt-1">
                            {item.subItems.map((subItem) => {
                              const isActive = location.pathname.startsWith(
                                subItem.href.split("?")[0]
                              );

                              return (
                                <NavLink
                                  key={subItem.name}
                                  to={subItem.href}
                                  className={classNames(
                                    isActive
                                      ? "bg-white text-black"
                                      : "text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700",
                                    "flex items-center gap-x-3 rounded-xl p-2 mt-1 text-sm"
                                  )}
                                >
                                  <subItem.icon className="h-4 w-4" />
                                  {subItem.name}
                                </NavLink>
                              );
                            })}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={classNames(
                        location.pathname.startsWith(item.href.split("?")[0])
                          ? "bg-white text-black"
                          : "text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700",
                        "group flex justify-between items-center mt-1 w-full rounded-xl p-2 text-sm font-medium"
                      )}
                    >
                      <div className="flex gap-x-3 items-center">
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </div>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
