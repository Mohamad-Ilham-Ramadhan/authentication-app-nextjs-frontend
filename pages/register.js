import styles from "@/styles/register.module.css";
import clsx from "clsx";
import Link from 'next/link';
import InputIcon from "@/components/inputs/InputIcon";
import { MailIcon } from "@heroicons/react/solid";
import { LockClosedIcon } from "@heroicons/react/solid";
import GoogleIcon from "@/components/icons/GoogleIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

export default function Register() {
  return (
    <section className="container mx-auto py-20">
      <div className={clsx(styles.wrapper, "mx-auto")}>
        <div
          className="border border-gray-light rounded-3xl px-14 py-12 mb-4"
        >
          <img src="/images/devchallenges.svg" alt="Logo" className="pb-6" />
          <h1 className="text-lg font-semibold pb-4">
            Join thousands of learners from around the world{" "}
          </h1>
          <p className="pb-6">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>

          <form action="" className="mb-8">
            <InputIcon
              name="email"
              type="email"
              placeholder="Email"
              Icon={MailIcon}
              classNames="mb-4"
            />
            <InputIcon
              name="password"
              type="password"
              placeholder="Password"
              Icon={LockClosedIcon}
              classNames="mb-4"
            />

            <button
              type="submit"
              className="py-2 text-white bg-blue rounded-md w-full font-semibold"
            >
              Register
            </button>
          </form>
          <small className="text-center text-sm text-gray w-full block mb-6">
            or continue with these social profile
          </small>

          <div className="text-center mb-6">
            <a href="#" className="inline-block mx-3">
              <GoogleIcon />
            </a>
            <a href="#" className="inline-block mx-3">
              <GithubIcon />
            </a>
            <a href="#" className="inline-block mx-3">
              <TwitterIcon />
            </a>
            <a href="#" className="inline-block mx-3">
              <FacebookIcon />
            </a>
          </div>

          <small className="block text-center text-sm text-gray w-full">
            Adready a member?{" "}
            <Link href="/login">
              <a className="text-blue-light">
                Login
              </a>
            </Link>
          </small>
        </div>
        <div className="text-gray text-sm flex">
          <span className="inline-block mr-auto">created by <strong className="underline">Mohamad Ilham Ramadhan</strong></span>
          <span className="inline-block ml-auto">devChallenges.io</span>
        </div>
      </div>
    </section>
  );
}
