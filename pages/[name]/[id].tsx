import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { data_json } from "../../src/components/common/data_json";
import DashboardLayout from "../../src/components/DashboardLayout";
import { shuffle, slugify } from "../../src/helper";
import styles from "./../../styles/pages/Category.module.scss";

export default function SearchCategory() {
  const router = useRouter();
  const [data, setData]: any = useState();
  const [shuffleData, setShuffleData]: any = useState();
  let urlData = router?.query?.name;
  let urlId: any = router?.query?.id;
  let converInt = parseInt(urlId);

  useEffect(() => {
    if (urlId) {
      let tmp = shuffle(data_json[converInt - 1]?.item);
      setShuffleData(tmp);
    }
  }, [urlId]);

  const handleChange = (e: any) => {
    e.preventDefault();
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  return (
    <DashboardLayout pageTitle="Category">
      <div className={styles.wrapper}>
        <div>
          <div className={styles.title}>
            Harga
            <br /> Barang Apa?
          </div>
          <input
            placeholder="Ketik disini!"
            id="barang"
            name="barang"
            onChange={handleChange}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.randomPick}>Rekomendasi</div>
          <div className={styles.randomWrapper}>
            {shuffleData &&
              shuffleData.slice(0, 4).map((e: any, i: any) => {
                return (
                  <Link
                    key={i}
                    href={`/${urlData}/detail/${slugify(
                      e.item
                    )}?id_cat=${converInt}&id_barang=${e.id}`}
                    passHref
                  >
                    <div className={styles.randomOption}>{e?.item}</div>
                  </Link>
                );
              })}
          </div>
          <div className={styles.btnWrapper}>
            <Link
              href={`/${urlData}/detail/${data?.barang}?id_cat=${converInt}`}
              passHref
            >
              <button>Cari Barang</button>
            </Link>
            <Link href="/" passHref>
              <button>Lihat Kategori Lagi</button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
