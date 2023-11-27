import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import FeatureLink from "@/components/FeatureLink/FeatureLink";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title="Magic Box" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <FeatureLink />
        <FeatureLink />
        <FeatureLink />
      </div>
    </main>
  );
}
