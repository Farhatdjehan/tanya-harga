import { useEffect, useState } from "react";
import DashboardLayout from "../src/components/DashboardLayout";
import { getCookie } from "../src/helper";
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
          <div key={index} className={styles.item}>
            {item.item}
          </div>
        );
      })}
    </DashboardLayout>
  );
}
