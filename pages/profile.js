import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/styles/profile.module.css";
import Footer from '@/components/Footer';
import { ChevronDownIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";
import { UserGroupIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";

function Backdrop({ onClick }) {
  return ReactDOM.createPortal(
    <div
      onClick={onClick}
      className="fixed top-0 left-0 w-full h-full z-1000 bg-transparent	"
    ></div>,
    document.body
  );
}
export default function Profile() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    document.body.classList.add("bg-gray-50");
  }, []);
  function toggleShowMenu(e) {
    const nav = document.getElementById("nav");
    if (nav !== null) {
      if (e.target.closest("#nav") === nav) {
        return;
      }
    }
    setShowMenu(!showMenu);
  }
  function closeMenu(e) {
    setShowMenu(false);
  }
  return (
    <section className="container mx-auto pb-20">
      <header className="flex mt-4 mb-8">
        <img
          src="/images/devchallenges.svg"
          alt="Logo"
          className="inline-block mr-auto"
        />
        {/* menu */}
        <div
          className="relative inline-flex ml-auto hover:cursor-pointer"
          onClick={(e) => {
            toggleShowMenu(e);
          }}
        >
          <div className="w-8 mr-2 rounded-lg overflow-hidden">
            <img src="/images/profile-twitter.jpg" alt="Profile picture" />
          </div>
          <div className="text-xs font-semibold flex items-center">
            <span className="mr-2">Ilham Grimwolf</span>
            <span>
              <ChevronDownIcon className="w-5 inline-block" />
            </span>
          </div>
          {showMenu && (
            <>
              <Backdrop
                onClick={(e) => {
                  closeMenu(e);
                }}
              />
              <nav
                id="nav"
                className="absolute top-14 right-0 border border-gray-ligth bg-white rounded-xl list-none p-3 w-48 z-1010 hover:cursor-default"
              >
                <li className="hover:bg-gray-lightest hover:cursor-pointer rounded-md py-2 text-xs text-gray-2 ">
                  <span>
                    <UserCircleIcon className="w-5 inline-block mx-3" />
                  </span>
                  <span>My Profile</span>
                </li>
                <li className="hover:bg-gray-lightest hover:cursor-pointer rounded-md py-2 text-xs text-gray-2 ">
                  <span>
                    <UserGroupIcon className="w-5 inline-block mx-3" />
                  </span>
                  <span>Group Chat</span>
                </li>
                <hr className="my-2" />
                <li className="hover:bg-gray-lightest hover:cursor-pointer rounded-md py-2 text-xs text-red">
                  <span>
                    <LogoutIcon className="w-5 inline-block mx-3" />
                  </span>
                  <span>Group Chat</span>
                </li>
              </nav>
            </>
          )}
        </div>
      </header>

      <div className={clsx(styles.wrapper, "mx-auto")}>
        <div className="text-center mb-8">
          <h1 className="text-3xl">Personal Info</h1>
          <p className="font-light">Basic info, like your name and photo</p>
        </div>
              
        <div className="border border-gray-lighter rounded-xl mb-4">
          <div className="px-12 py-8 grid grid-cols-2 border-b border-gray-lighter">
            <div>
              <h2 className="text-2xl mb-1">Profile</h2>
              <p className="text-2xs text-gray font-medium">
                Some info may be visible to other people
              </p>
            </div>
            <div className="flex justify-end items-center">
              <button className="border rounded-xl border-gray py-1 px-6 text-gray">
                Edit
              </button>
            </div>
          </div>

          <div className="px-12 py-3 grid grid-cols-4 border-b border-gray-lighter">
            <div className="flex items-center">
              <p className="text-2xs text-gray-light font-medium uppercase">
                photo
              </p>
            </div>
            <div className="col-span-3 flex items-center pl-6">
              <div className="w-18 mr-2 rounded-lg overflow-hidden">
                <img src="/images/profile-twitter.jpg" alt="Profile picture" />
              </div>
            </div>
          </div>

          <div className="px-12 py-8 grid grid-cols-4 border-b border-gray-lighter">
            <div className="flex items-center">
              <p className="text-2xs text-gray-light font-medium uppercase">
                name
              </p>
            </div>
            <div className="col-span-3 flex items-center pl-6">
              <p className="font-medium text-lg">Mohamad Ilham Ramadhan</p>
            </div>
          </div>

          <div className="px-12 py-8 grid grid-cols-4 border-b border-gray-lighter">
            <div className="flex items-center">
              <p className="text-2xs text-gray-light font-medium uppercase">
                bio
              </p>
            </div>
            <div className="col-span-3 flex items-center pl-6">
              <p className="font-medium text-lg whitespace-nowrap overflow-x-hidden overflow-ellipsis">I am a software developer and a big fan of devchallenges Lorem ipsum dolor sit.</p>
            </div>
          </div>

          <div className="px-12 py-8 grid grid-cols-4 border-b border-gray-lighter">
            <div className="flex items-center">
              <p className="text-2xs text-gray-light font-medium uppercase">
                phone
              </p>
            </div>
            <div className="col-span-3 flex items-center pl-6">
              <p className="font-medium text-lg">908249274292</p>
            </div>
          </div>

          <div className="px-12 py-8 grid grid-cols-4 border-b border-gray-lighter">
            <div className="flex items-center">
              <p className="text-2xs text-gray-light font-medium uppercase">
                email
              </p>
            </div>
            <div className="col-span-3 flex items-center pl-6">
              <p className="font-medium text-lg">ilham@gmail.com</p>
            </div>
          </div>
          
          <div className="px-12 py-8 grid grid-cols-4">
            <div className="flex items-center">
              <p className="text-2xs text-gray-light font-medium uppercase">
                password
              </p>
            </div>
            <div className="col-span-3 flex items-center pl-6">
              <p className="font-medium text-lg">************</p>
            </div>
          </div>

        </div>

        <Footer />

      </div>
    </section>
  );
}
