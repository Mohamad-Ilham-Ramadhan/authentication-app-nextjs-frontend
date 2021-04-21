import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "@/styles/profile.module.css";
import Footer from '@/components/Footer';
import Header from '@/components/Header';


export default function Profile() {
  useEffect(() => {
    document.body.classList.add("bg-gray-50");
  }, []);

  return (
    <section className="container mx-auto pb-20">

      <Header />

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
              <Link href="/profile/edit" className="border rounded-xl border-gray py-1 px-6 text-gray">
                Edit
              </Link>
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
