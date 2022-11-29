import styles from "./Header.module.scss";
import Link from "next/link";
import BellSvg from "./../../../../public/assets/svg/bell.svg";
import SearchSvg from "./../../../../public/assets/svg/search.svg";
import ChevronDown from "./../../../../public/assets/svg/chevron-down.svg";
import logoCompanyWhite from "./../../../../public/assets/png/logoCompanyWhite.png";
import logoPelindoWhite from "./../../../../public/assets/png/logoPelindoWhite.svg";
import HamburgerSvg from "./../../../../public/assets/svg/hamburger.svg";
import Image from "next/image";
import { useRouter } from "next/router";

interface HeaderProps {
  handleToggle: any;
  landing?: boolean;
}

export default function Header(props: HeaderProps) {
  const { handleToggle, landing } = props;
  const src = `https://satukelas-fe-asset.ap-south-1.linodeobjects.com/profile1.png`;

  const renderNavMenu = () => {
    return (
      <>
        <li className={styles.navbarMenu}>
          <Link href="/">
            <a>Beranda</a>
          </Link>
        </li>
        <li className={styles.navbarMenu}>
          <Link href={`/dashboard/pengumuman`}>
            <a>Pengumuman</a>
          </Link>
        </li>
        <li className={styles.navbarMenu}>
          <Link href="/dashboard/global">
            <a>Dashboard CMS</a>
          </Link>
        </li>
        <li className={styles.navbarMenu}>
          <Link href="#">
            <a>Dashboard LMS</a>
          </Link>
        </li>
      </>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.mobile}>
          <div onClick={() => handleToggle(true)} className={styles.hamburger}>
            <Image src={HamburgerSvg} alt="sidebar" />
          </div>
          <div className={styles.logoWrapper}>
            {/* <Image src={logoCompanyWhite} alt={``} height={24} /> */}
          </div>
        </div>
      </header>
    </>
  );
}
