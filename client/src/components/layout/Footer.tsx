import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>광명시 작은도서관 통합 플랫폼</h3>
                        <p>시민과 지식, 그리고 이웃을 잇는 우리 동네 커뮤니티</p>
                    </div>
                    <div className={styles.links}>
                        <h4>문의처</h4>
                        <p>이메일: contact@gm-library.or.kr</p>
                        <p>전화: 02-1234-5678</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Gwangmyeong Small Library Hub. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
