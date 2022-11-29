import s from './FooterMobile.module.scss'
import GlobeBlueSvg from './../../../../public/assets/svg/globe-blue.svg';
import Image from 'next/image';
import Link from 'next/link'

export default function FooterMobile() {
    return (
        <>
            <div className={s.container}>
                <Link href="/global">
                    <a className={`${s.menuWrapper} ${s.active}`}>
                        <div className={`${s.logoWrapper} ${s.globe}`}>
                        </div>
                        <div className={s.title}>
                            Menu 1
                        </div>
                    </a>
                </Link>
                <Link href="/halaman">
                    <a className={`${s.menuWrapper}`}>
                        <div className={`${s.logoWrapper} ${s.globe}`}>
                        </div>
                        <div className={s.title}>
                            Menu 2
                        </div>
                    </a>
                </Link>

                <Link href="/pengumuman">
                    <a className={`${s.menuWrapper}`}>
                        <div className={`${s.logoWrapper} ${s.globe}`}>
                        </div>
                        <div className={s.title}>
                            Menu 3
                        </div>
                    </a>
                </Link>

                <Link href="/dashboard/komentar">
                    <a className={`${s.menuWrapper}`}>
                        <div className={`${s.logoWrapper} ${s.globe}`}>
                        </div>
                        <div className={s.title}>
                            Keluar
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}