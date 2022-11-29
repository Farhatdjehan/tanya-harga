import Image from "next/image";
import { useRouter } from "next/router";
import BackButton from "../../../src/components/BackButton";
import DashboardLayout from "../../../src/components/DashboardLayout";
import styles from "./../../../styles/pages/DetailPages.module.scss";
import heart from "./../../../public/assets/png/heart.png";
export default function DetailProduct() {
  return (
    <DashboardLayout pageTitle="Detail Page">
      <div className={styles.wrapper}>
        <BackButton />
        <div className={styles.image}></div>
        <div className={styles.topWrapper}>
          <div className={styles.leftElement}>
            <div className={styles.title}>Sapu Lidi</div>
            <div className={styles.categoryText}>Pembersih</div>
          </div>
          <div className={styles.rightElement}>
            <button>
              <Image src={heart} />
            </button>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.infoDescription}>
          <div className={styles.title}>Range Harga</div>
          <div className={styles.info}>xxxxxxx</div>
          <div className={styles.title}>Cari di marketplace</div>
          <div className={styles.info}>
            <button>Tokopedia</button>
            <button>Tokopedia</button>
            <button>Tokopedia</button>
          </div>
          <div className={styles.title}>Rekomendasi Lainnya</div>
          <div className={styles.info}>
            <div className={styles.slide}></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
