import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            광명시 작은도서관을<br />만나보세요
          </h1>
          <p className={styles.heroSubtitle}>
            우리 동네 독서 문화 공간, 작은도서관에서 책과 이웃을 만나보세요.
            다양한 프로그램과 행사가 기다리고 있습니다.
          </p>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="도서관, 프로그램, 지역명으로 검색해보세요..."
              className={styles.searchInput}
            />
            <button className="btn btn-primary">검색</button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className="section-title">추천 도서관</h2>
          <p className="section-subtitle">우리 동네 인기 도서관을 둘러보세요.</p>

          <div className={styles.grid}>
            {/* Mock Data for now */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className={styles.cardImage} />
                <h3 className={styles.cardTitle}>광명 작은도서관 {i}</h3>
                <p className={styles.cardDesc}>
                  아이들과 부모님이 함께 책을 읽을 수 있는 아늑한 공간입니다.
                  다양한 그림책을 보유하고 있습니다.
                </p>
                <div className={styles.tags}>
                  <span className="badge badge-primary">독서모임</span>
                  <span className="badge badge-primary">어린이</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <Link href={`/libraries/${i}`} className="btn btn-outline" style={{ width: '100%' }}>
                    상세보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
