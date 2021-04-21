import { useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Input from "@/components/inputs/InputProfile";
import styles from "@/styles/profile-edit.module.css";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { CameraIcon } from "@heroicons/react/outline";

export default function ProfileEdit() {
  useEffect(() => {
    document.body.classList.add("bg-gray-50");
  }, []);

  return (
    <section className="container mx-auto pb-20">
      <Header classNames="mb-14 mt-7" />

      <div className={clsx(styles.wrapper, "mx-auto")}>
        <div className="mb-6">
          <Link href="/profile">
            <a className="text-blue-light text-lg">
              <span>
                <ChevronLeftIcon className="w-6 inline align-bottom" />
              </span>{" "}
              <span>Back</span>
            </a>
          </Link>
        </div>

        <div className="border border-gray-lighter rounded-xl py-8 px-12 mb-4">
          <div className="mb-6">
            <h1 className="text-2xl mb-2">Change Info</h1>
            <p className="text-2xs text-gray font-medium">
              Changes will be reflected to every services
            </p>
          </div>

          <div className={clsx(styles['form-wrapper'])}>

            <div className="flex items-center relative hover:cursor-pointer hover:ring-2 hover:ring-gray-900 rounded-md mb-8 ">
              <div className="flex justify-center items-center w-18 rounded-lg relative overflow-hidden mr-7">
                <img src="/images/profile-twitter.jpg" alt="" />
                <CameraIcon className="w-6 text-white absolute z-10" />
              </div>
              <div className="uppercase text-2xs text-gray font-medium">
                change photo
              </div>
              <input type="file" className="absolute z-20 w-full h-full hover:cursor-pointer opacity-0" />
            </div>

            <Input 
              classNames="mb-6"
              name="name"
              id="name"
              label="Name"
              placeholder="Enter your name..."
            />
            <Input 
              classNames="mb-6"
              id="bio"
              label="Bio"
              name="bio"
              placeholder="Enter your bio..."
              input="textarea"
            />

            <Input 
              classNames="mb-6"
              id="phone"
              label="Phone"
              name="phone"
              placeholder="Enter your phone..."
            />

            <Input 
              classNames="mb-6"
              id="email"
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email..."
            />

            <Input 
              classNames="mb-6"
              id="password"
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password..."
            />

            <button className="py-2 px-6 text-white bg-blue rounded-lg">Save</button>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
