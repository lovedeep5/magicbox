import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/todo">Todo</Link>
    </main>
  );
}
