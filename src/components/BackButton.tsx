import { useRouter } from "next/router";
import styles from "./BackButton.module.scss";

export default function BackButton() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className={styles.backNavigation} onClick={handleBack}>
      ➜
    </div>
  );
}
