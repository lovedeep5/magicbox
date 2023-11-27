import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FeatureLink.module.scss";

const FeatureLink = () => {
  return (
    <Link href="/todo">
      {/* <Image src="" alt="background-image" /> */}
      <div className={styles.featureLink}>Todo</div>
    </Link>
  );
};

export default FeatureLink;
