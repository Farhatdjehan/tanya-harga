import Link from "next/link";
import { useRouter } from "next/router";
import DashboardLayout from "../../src/components/DashboardLayout";
import styles from "./../../styles/pages/Category.module.scss";

export default function SearchCategory() {
  const router = useRouter();
  let urlData = router?.query?.name;
  console.log(router);
  return (
    <DashboardLayout pageTitle="Category">
      <div className={styles.wrapper}>
        <div>
          <div className={styles.title}>
            Harga
            <br /> Barang Apa?
          </div>
          <input placeholder="Ketik disini!" />
        </div>
        <div className={styles.container}>
          <div className={styles.randomPick}>Rekomendasi</div>
          <div className={styles.randomWrapper}>
            <Link href={`/${urlData}/detail/tes`} passHref>
              <div className={styles.randomOption}>Sapu Lidi</div>
            </Link>
            <Link href={`/${urlData}/detail/tes`} passHref>
              <div className={styles.randomOption}>Kain Pel</div>
            </Link>
            <Link href={`/${urlData}/detail/tes`} passHref>
              <div className={styles.randomOption}>Kemoceng</div>
            </Link>
            <Link href={`/${urlData}/detail/tes`} passHref>
              <div className={styles.randomOption}>Tong Sampah</div>
            </Link>
          </div>
          <div className={styles.btnWrapper}>
            <Link href={`/${urlData}/detail/tes`} passHref>
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
