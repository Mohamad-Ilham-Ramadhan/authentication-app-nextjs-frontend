import {useEffect} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Header from '@/components/Header';
import styles from '@/styles/profile.module.css';
import {ChevronLeftIcon} from '@heroicons/react/outline';

export default function ProfileEdit() {
  useEffect(() => {
    document.body.classList.add("bg-gray-50");
  }, []);
  
  return (
    <section className="container mx-auto pb-20">
      <Header classNames="mb-14 mt-7"/>

      <div className={clsx(styles.wrapper, "mx-auto")}>
        <Link href="/profile">
          <a className="text-blue-light text-lg"><span><ChevronLeftIcon className="w-6 inline" /></span> <span>Back</span></a>
        </Link>
      </div>
    </section>
  );
}