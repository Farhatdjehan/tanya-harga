import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DashboardLayout from "../src/components/DashboardLayout";
import { getCookie, setCookie, slugify } from "../src/helper";
import styles from "./../styles/pages/Save.module.scss";

export default function Save() {
  const router = useRouter();
  const [listSaved, setListSaved]: any = useState();
  useEffect(() => {
    if (getCookie("dataBarang") !== "") {
      let tmp = getCookie("dataBarang");
      if (tmp !== undefined) {
        setListSaved(JSON.parse(tmp));
      }
    }
  }, []);

  const handleDelete = (e: any) => {
    e.preventDefault();
    let emptyMessage = listSaved;
    emptyMessage = [];
    setCookie("dataBarang", JSON.stringify(emptyMessage), 14);
    router.reload();
  };

  return (
    <DashboardLayout pageTitle="Barang Tersimpan">
      <div className={styles.title}>Barang Tersimpan</div>
      {listSaved?.length > 0 ? (
        <>
          {listSaved?.map((item: any, index: any) => {
            return (
              <Link
                key={index}
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
          <button className={styles.button} onClick={handleDelete}>
            Hapus Barang
          </button>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>Tidak Ada Barang Tersimpan</div>
      )}
    </DashboardLayout>
  );
}
