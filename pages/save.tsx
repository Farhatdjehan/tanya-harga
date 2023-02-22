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

  const handleDeleteSelected = (e: any, id: any) => {
    e.preventDefault();
    let tmp = getCookie("dataBarang");
    if (tmp !== undefined) {
      let parse = JSON.parse(tmp);
      let newData = [...parse];
      newData?.splice(id, 1);
      setCookie("dataBarang", JSON.stringify(newData), 14);
      router.reload();
    }
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
                )}?id_cat=${item.id_kategori}&id_barang=${item.no}`}
                passHref
              >
                <div key={index} className={styles.item}>
                  <div className={styles.wrapMain}>
                    <span style={{ marginRight: "16px" }}>{index + 1}.</span>
                    {item.item}
                  </div>
                  <div
                    onClick={(e) => handleDeleteSelected(e, index)}
                    style={{
                      backgroundColor: "red",
                      color: "#fff",
                      padding: "8px 16px",
                      fontSize: "12px",
                      borderRadius: "30px",
                    }}
                  >
                    Hapus
                  </div>
                </div>
              </Link>
            );
          })}
          <button className={styles.button} onClick={handleDelete}>
            Hapus Semua Barang
          </button>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>Tidak Ada Barang Tersimpan</div>
      )}
    </DashboardLayout>
  );
}
