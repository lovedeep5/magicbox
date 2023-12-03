import React from "react";
import HeaderStyles from "./Header.module.scss";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return <div className={HeaderStyles.Header}>{title}</div>;
};

export default Header;
