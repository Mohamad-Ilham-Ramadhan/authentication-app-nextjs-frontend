import styles from "@/styles/register.module.css";
import clsx from "clsx";
import Link from "next/link";
import Footer from '@/components/Footer';
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
        <div className="border border-gray-light rounded-3xl px-14 py-12 mb-4">
          <img src="/images/devchallenges.svg" alt="Logo" className="pb-6" />
          <h1 className="text-lg font-semibold mb-6">Login </h1>

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
              Login
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
            Don't have an account yet?{" "}
            <Link href="/register">
              <a className="text-blue-light">Register</a>
            </Link>
          </small>
        </div>
        <Footer />
      </div>
    </section>
  );
}
