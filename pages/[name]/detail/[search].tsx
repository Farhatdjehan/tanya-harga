import Image from "next/image";
import { useRouter } from "next/router";
import BackButton from "../../../src/components/BackButton";
import DashboardLayout from "../../../src/components/DashboardLayout";
import styles from "./../../../styles/pages/DetailPages.module.scss";
import heart from "./../../../public/assets/png/heart.png";
import { data_json } from "../../../src/components/common/data_json";
import { useEffect, useState } from "react";
import { slugify, unslugify } from "../../../src/helper";
import Link from "next/link";
export default function DetailProduct() {
  const router = useRouter();
  const [data, setData]: any = useState();
  const [idBarang, setIdBarang]: any = useState();
  let urlData: any = router?.query?.name;
  let searchData: any = router?.query?.search;

  useEffect(() => {
    let urlIdBarang: any = router?.query?.id_barang;
    setIdBarang(urlIdBarang);
    let urlIdCat: any = router?.query?.id_cat;
    let convertIntIdBarang = parseInt(urlIdBarang);
    let convertIntIdCat = parseInt(urlIdCat);
    let tmp;
    if (urlIdBarang === undefined) {
      tmp = data_json[convertIntIdCat - 1]?.item?.filter((e) =>
        e.item.toLowerCase().includes(searchData?.toLowerCase())
      );
      setData(tmp);
      console.log(tmp);
    } else {
      tmp = data_json[convertIntIdCat - 1]?.item;
      setData(tmp?.filter((e) => convertIntIdBarang === e.id));
    }
  }, [router]);

  const handleSave = (e: any) => {
    e.preventDefault();
  };

  // let data = data_json.filter((e) =>)
  return (
    <DashboardLayout pageTitle="Detail Page">
      <div className={styles.wrapper}>
        <BackButton />
        {data?.map((e: any, i: any) => {
          return (
            <div key={i}>
              <div className={styles.image}></div>
              <div className={styles.topWrapper}>
                <div className={styles.leftElement}>
                  <div className={styles.title}>{e.item}</div>
                  <div className={styles.categoryText}>
                    {unslugify(urlData)}
                  </div>
                </div>
                <div className={styles.rightElement}>
                  <button onClick={handleSave}>
                    <Image src={heart} />
                  </button>
                </div>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.infoDescription}>
                <div className={styles.title}>Range Harga</div>
                <div className={styles.info}>{e.harga}</div>
                <div className={styles.title}>Cari di marketplace</div>
                <div className={styles.info}>
                  <Link
                    href={`https://www.tokopedia.com/search?st=product&q=${slugify(
                      e.item
                    )}`}
                    passHref
                  >
                    <a target="_blank">
                      <button
                        className={`${styles.button} ${styles.button__tokopedia}`}
                      >
                        Tokopedia
                      </button>
                    </a>
                  </Link>
                  <Link
                    href={`https://www.lazada.co.id/catalog/?q=${e.item}&_keyori=ss&from=input`}
                    passHref
                  >
                    <a target="_blank">
                      <button
                        className={`${styles.button} ${styles.button__lazada}`}
                      >
                        Lazada
                      </button>
                    </a>
                  </Link>
                  <Link
                    href={`https://shopee.co.id/search?keyword=${e.item}`}
                    passHref
                  >
                    <a target="_blank">
                      <button
                        className={`${styles.button} ${styles.button__shopee}`}
                      >
                        Shopee
                      </button>
                    </a>
                  </Link>
                  <Link
                    href={`https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search%5Bkeywords%5D=${e.item}&search_source=omnisearch_keyword&source=navbar`}
                    passHref
                  >
                    <a target="_blank">
                      <button
                        className={`${styles.button} ${styles.button__bukalapak}`}
                      >
                        Bukalapak
                      </button>
                    </a>
                  </Link>
                </div>
                <div className={styles.title}>Rekomendasi Lainnya</div>
                <div className={styles.info}>
                  <div className={styles.slide}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
