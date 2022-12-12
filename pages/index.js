import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        Hello Alvin Jamal Azkya
        <button
          className="btn btn-primary"
          href="/Profile"
          style={{ marginLeft: "4rem" }}
        >
          Ganteng
        </button>
      </div>
      <h4 className={styles.container} style={{ marginLeft: "42%" }}>
        Welcome To New Manager{" "}
        <h3 style={{ fontWeight: "bold", marginLeft: "3rem" }}>ALVIN CORPS</h3>
      </h4>
      <Image
        src="/alvin1.png"
        height={400}
        width={400}
        quality={1}
        priority
        alt=""
      />
      <Image
        src="/alvin1.png"
        height={400}
        width={400}
        quality={1}
        priority
        alt=""
      />
      <Image
        src="/alvin1.png"
        height={400}
        width={400}
        quality={1}
        priority
        alt=""
      />
      <Image
        src="/alvin1.png"
        height={400}
        width={400}
        quality={1}
        priority
        alt=""
      />
    </div>
  );
}
