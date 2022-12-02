import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "react-modal";
import styles from "./Sidebar.module.scss";
import whatsapp from "./../../../../public/assets/whatsapp.png";
import facebook from "./../../../../public/assets/facebook.png";
import twitter from "./../../../../public/assets/twitter.png";
import copy from "./../../../../public/assets/copy.png";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import logoCompany from "./../../../../public/assets/png/logoCompany.png";
import Image from "next/image";

interface SidebarProps {
  toggle: boolean;
  handleToggle: any;
}

export default function Sidebar(props: SidebarProps) {
  const { toggle, handleToggle } = props;
  const [share, setShare]: any = useState(false);
  const [copied, setCopied]: any = useState(false);
  const url = "https://tanya-harga.vercel.app";
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "16px",
      zIndex: 2,
    },
  };

  const shareLink = (e: any) => {
    e.preventDefault();
    setShare(true);
    handleToggle(false);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  const handleShare = (socmed: string) => {
    let share;
    if (socmed === "Facebook") {
      share = `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`;
    } else if (socmed === "Twitter") {
      share = `http://twitter.com/share?text=Nostalgia+yuk%2C+&url=${url}&hashtags=nostalgia,kamus,bahasagaul90an,kamnos`;
    } else {
      share = `https://wa.me/?text=Nostalgia+yuk%2C+${url}`;
    }
    window.open(share, "_blank")?.focus();
  };

  const redirectOpen = (e: any, id: number) => {
    e.preventDefault();
    let share;
    if (id === 1) {
      share =
        "https://api.whatsapp.com/send?phone=+6282311888360&text=Aku%20mau%20kasih%20masukkan%20dong!";
    } else {
      share =
        "https://play.google.com/store/apps/details?id=com.koneksi.kamnos";
    }
    window.open(share, "_blank")?.focus();
  };

  return (
    <aside className={styles.sidebar}>
      <ProSidebar breakPoint="xxl" toggled={toggle} onToggle={handleToggle}>
        <SidebarContent>
          <Menu className={`menu`}>
            <MenuItem>
              Kategori Barang
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>
              Barang Tersimpan
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem onClick={shareLink}>
              Bagikan Aplikasi
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem onClick={(e) => redirectOpen(e, 2)}>
              Nilai Aplikasi
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem onClick={(e) => redirectOpen(e, 1)}>
              Beri Masukkan
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      {share && (
        <>
          <Modal
            isOpen={share}
            onRequestClose={() => setShare(false)}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div className="sharelink">Bagikan Aplikasi</div>
            <div>
              <CopyToClipboard text={url} onCopy={handleCopy}>
                <button
                  className={`main-screen__button ${
                    copied && "animate__animated animate__pulse animate__faster"
                  }`}
                >
                  <span style={{ marginRight: "8px" }}>
                    <Image width={15} height={15} src={copy.src} alt="copy" />
                  </span>
                  Bagikan Tanya Harga
                </button>
              </CopyToClipboard>
            </div>
            <div className="or-text">ATAU</div>
            <div className="wrapper-btn">
              <button
                className="btn twitter"
                onClick={() => handleShare("Twitter")}
              >
                <span style={{ marginRight: "8px" }}>
                  <Image width={15} height={15} src={twitter.src} alt="copy" />
                </span>
                Twitter
              </button>
              <button
                className="btn facebook"
                onClick={() => handleShare("Facebook")}
              >
                <span style={{ marginRight: "8px" }}>
                  <Image width={15} height={15} src={facebook.src} alt="copy" />
                </span>
                Facebook
              </button>
              <button
                className="btn whatsapp"
                onClick={() => handleShare("Whatsapp")}
              >
                <span style={{ marginRight: "8px" }}>
                  <Image width={15} height={15} src={whatsapp.src} alt="copy" />
                </span>
                Whatsapp
              </button>
            </div>
          </Modal>
          {copied && (
            <div className="main-screen__toast animate__animated animate__bounceInUp animate__faster">
              <div className="toast-text">Berhasil menyalin!</div>
            </div>
          )}
        </>
      )}
    </aside>
  );
}
