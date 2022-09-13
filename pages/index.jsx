import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Main.module.css";

export default function Home() {
  return (
    <Link href={"/varieties"}>
      <div className={styles.varieties_box}>
        <h1>Go to varieties</h1>
      </div>
    </Link>
  );
}
