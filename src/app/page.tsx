import Header from "@/components/Header/Header";
import FeatureLink from "@/components/FeatureLink/FeatureLink";
import styles from "./page.module.scss";

export const Home = () => {
  return (
    <main className={styles.main}>
      <Header title="Magic Box" />
      <div className={styles.homeContentContainer}>
        <FeatureLink />
        <FeatureLink />
        <FeatureLink />
      </div>
    </main>
  );
};

export default Home;
