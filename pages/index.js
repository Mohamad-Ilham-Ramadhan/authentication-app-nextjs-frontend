import Head from "next/head";
import styles from "../styles/home.module.css";
import clsx from "clsx";

export default function Home() {
  console.log(styles);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello there. I'm Ilham</h1>
        <br/>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, omnis dicta alias quam, qui ipsam consequatur in
          blanditiis non quibusdam vitae autem recusandae provident distinctio
          totam numquam minus voluptates. Odio.
        </p>
      </main>

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src="/chat-logo.svg" alt="chat logo" className="h-12 w-12" />
        </div>
        <div>
          <div className="text-tl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>

      <button className={clsx(styles.btn, styles["btn-green"])}>Click</button>
      <br />
      <button className="bg-green-500 active:bg-green-700">Click me</button>

      <form action="">
        <input type="text" placeholder="username" className="disabled:bg-red-500 w-[762px] !font-medium" disabled/>
      </form>
    </div>
  );
}
