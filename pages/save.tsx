import Link from "next/link";
import { useEffect, useState } from "react";
import DashboardLayout from "../src/components/DashboardLayout";
import { getCookie, slugify } from "../src/helper";
import styles from "./../styles/pages/Save.module.scss";

export default function Save() {
  const [listSaved, setListSaved]: any = useState();
  useEffect(() => {
    if (getCookie("dataBarang") !== "") {
      let tmp = getCookie("dataBarang");
      if (tmp !== undefined) {
        setListSaved(JSON.parse(tmp));
      }
    }
  }, []);

  return (
    <DashboardLayout pageTitle="Barang Tersimpan">
      <div className={styles.title}>Barang Tersimpan</div>
      {listSaved?.map((item: any, index: any) => {
        return (
          <Link
            href={`/${slugify(item.kategori)}/detail/${slugify(
              item.item
            )}?id_cat=${item.id_kategori}&id_barang=${item.id}`}
            passHref
          >
            <div key={index} className={styles.item}>
              <span style={{ marginRight: "16px" }}>{index + 1}.</span>
              {item.item}
            </div>
          </Link>
        );
      })}
    </DashboardLayout>
  );
}
