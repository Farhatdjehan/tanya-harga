import Image from "next/image";
import Link from "next/link";
import { menuCategory } from "../src/components/common/menu_category";
import DashboardLayout from "../src/components/DashboardLayout";
import { slugify } from "../src/helper";
import styles from "./../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <DashboardLayout pageTitle="Home">
      <div className={styles.wrapper}>
        <div className={styles.title}>Mau Cari Barang Apa?</div>
        <div className={styles.wrapperMenu}>
          {menuCategory.map((item: any, index: any) => {
            return (
              <Link
                href={`/${slugify(item.title)}/${index + 1}`}
                key={index}
                passHref
              >
                <div className={styles.container}>
                  <div className={styles.menu}>
                    <Image src={item.image} />
                  </div>
                  <div className={styles.titleMenu}>{item.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
