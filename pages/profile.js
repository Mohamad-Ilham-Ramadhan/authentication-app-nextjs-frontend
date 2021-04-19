import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from '@/styles/profile.module.css';
import {ChevronDownIcon} from '@heroicons/react/solid';
import {UserCircleIcon} from '@heroicons/react/solid';
import {UserGroupIcon} from '@heroicons/react/solid';
import {LogoutIcon} from '@heroicons/react/outline';


function Backdrop({onClick}) {
  return ReactDOM.createPortal(
    <div onClick={onClick} className="fixed top-0 left-0 w-full h-full z-1000 bg-transparent	"></div>,
    document.body
  )
}

export default function Profile() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    document.body.classList.add('bg-gray-50')
  }, [])
  function toggleShowMenu(e) {
    const nav = document.getElementById('nav');
    if (nav !== null) {
      if (e.target.closest('#nav') === nav) {
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
      <header className="flex mt-4">
        <img src="/images/devchallenges.svg" alt="Logo" className="inline-block mr-auto"/>
        {/* menu */}
        <div className="relative inline-flex ml-auto hover:cursor-pointer" onClick={(e) => { toggleShowMenu(e) }}>
          <div className="w-8 mr-2 rounded-lg overflow-hidden">
            <img src="/images/profile-twitter.jpg" alt="Profile picture"/>
          </div>
          <div className="text-xs font-semibold flex items-center">
            <span className="mr-2">Ilham Grimwolf</span>
            <span><ChevronDownIcon className="w-5 inline-block" /></span>
          </div>
          {showMenu && 
          <>
          <Backdrop onClick={(e) => {closeMenu(e)}}/>
          <nav id="nav" className="absolute top-14 right-0 border border-gray-ligth bg-white rounded-xl list-none p-3 w-48 z-1010 hover:cursor-default">
            <li className="hover:bg-gray-lightest hover:cursor-pointer rounded-md py-2 text-xs text-gray-2 "><span><UserCircleIcon className="w-5 inline-block mx-3"/></span><span>My Profile</span></li>
            <li className="hover:bg-gray-lightest hover:cursor-pointer rounded-md py-2 text-xs text-gray-2 "><span><UserGroupIcon className="w-5 inline-block mx-3"/></span><span>Group Chat</span></li>
            <hr className="my-2"/>
            <li className="hover:bg-gray-lightest hover:cursor-pointer rounded-md py-2 text-xs text-red"><span><LogoutIcon className="w-5 inline-block mx-3"/></span><span>Group Chat</span></li>
          </nav> 
          </>
          }
        </div>

      </header>
      
      <div className={clsx(styles.wrapper, "")}></div>
    </section>
  );
}