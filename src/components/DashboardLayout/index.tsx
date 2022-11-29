import styles from "./DashboardLayout.module.scss";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Header from "./Header";
import FooterMobile from "./FooterMobile";
import Helmet from "../common/Helmet";
interface DashboardLayoutProps {
  children: ReactNode;
  pageTitle: string;
  padding?: any;
  noFooter?: boolean;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children, padding, pageTitle, noFooter } = props;
  const [toggle, setToggle] = useState(false);

  function handleToggle(value: boolean) {
    setToggle(value);
  }

  return (
    <div className={styles.pageWrapper}>
      <Helmet pageTitle={pageTitle} />
      <Sidebar handleToggle={handleToggle} toggle={toggle} />
      <main className={styles.contentWrapper}>
        <Header handleToggle={handleToggle} />
        <section className={styles.dashboardContent}>
          {children}
        </section>
       {/* <FooterMobile /> */}
      </main>
    </div>
  );
}
