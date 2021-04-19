import clsx from "clsx";

export default function Footer({classNames}) {
  return (
    <div className={clsx(classNames, "text-gray text-sm flex")}>
      <span className="inline-block mr-auto">
        created by <strong className="underline">Mohamad Ilham Ramadhan</strong>
      </span>
      <span className="inline-block ml-auto">devChallenges.io</span>
    </div>
  );
}
