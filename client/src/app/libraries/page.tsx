'use client';

import { useState, useMemo } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { libraries } from '../../data/libraries';

// Dynamically import LeafletMap to avoid SSR issues
const LeafletMap = dynamic(() => import('../../components/map/LeafletMap'), {
    ssr: false,
    loading: () => <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>지도를 불러오는 중...</div>
});

export default function LibrariesPage() {
    const [activeFilter, setActiveFilter] = useState('전체');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLibraries = useMemo(() => {
        return libraries.filter(lib => {
            const matchesFilter = activeFilter === '전체' || lib.type === activeFilter;
            const matchesSearch = lib.name.includes(searchTerm) || lib.address.includes(searchTerm);
            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchTerm]);

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.sidebar}>
                <div className={styles.filters}>
                    <input
                        type="text"
                        placeholder="도서관 검색..."
                        className={styles.searchBar}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className={styles.filterGroup}>
                        {['전체', '공립', '사립'].map((filter) => (
                            <button
                                key={filter}
                                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.list}>
                    {filteredLibraries.map((lib) => (
                        <div key={lib.id} className={`card ${styles.card}`}>
                            <h3 style={{ marginBottom: '0.5rem' }}>{lib.name}</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                {lib.address}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="badge badge-primary">{lib.type}</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{lib.phone}</span>
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                <Link href={`/libraries/${lib.id}`} className="btn btn-outline" style={{ width: '100%', padding: '0.5rem' }}>
                                    상세보기
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.mapContainer}>
                <LeafletMap libraries={filteredLibraries} />
            </div>
        </div>
    );
}
