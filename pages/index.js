import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        hello from next
        <button className="btn btn-primary">button from bootstrap</button>
      </div>
      {/* <img src="/food1.png" height={200} width={200} />
      <Image src="/food1.png" height={400} width={400} quality={1} priority /> */}
    </div>
  );
}
