import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    광명<span className={styles.highlight}>작은도서관</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/libraries" className={styles.navLink}>도서관 찾기</Link>
                    <Link href="/programs" className={styles.navLink}>문화프로그램</Link>
                    <Link href="/stories" className={styles.navLink}>도서관 이야기</Link>
                    <Link href="/notices" className={styles.navLink}>공지사항</Link>
                </nav>
                <div className={styles.actions}>
                    <Link href="/admin" className="btn btn-primary">관리자 로그인</Link>
                </div>
            </div>
        </header>
    );
}
