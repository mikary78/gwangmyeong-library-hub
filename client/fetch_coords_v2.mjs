
const libraries = [
    {
        "id": 1,
        "name": "하늘꿈 작은도서관",
        "address": "경기도 광명시 너부대로45번안길 20-19 (광명동) 2층",
        "phone": "02-2686-3377",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 2,
        "name": "너 꿈 도서관",
        "address": "경기도 광명시 너부대로35번길 20 (광명동) 광명5동행정복지센터",
        "phone": "02-2680-5009",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 3,
        "name": "좋은친구들 작은도서관",
        "address": "경기도 광명시 광화로 6 (광명동) 4층",
        "phone": "02-2625-7634",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 4,
        "name": "서면 작은도서관",
        "address": "경기도 광명시 오리로403번길 3 (소하동) 4층",
        "phone": "02-897-8937",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 5,
        "name": "우리마을 작은도서관",
        "address": "경기도 광명시 범안로 1061 (하안동) 우리 마을 작은 도서관 7층",
        "phone": "000-0000-0000",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 6,
        "name": "새움작은도서관",
        "address": "경기도 광명시 도덕공원로 29 (소하동) 소하2동행정복지센터",
        "phone": "02-2680-5703",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 7,
        "name": "하안작은도서관",
        "address": "경기도 광명시 도덕로 27 (하안동) 하안4동우체국 3층",
        "phone": "02-897-3357",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 8,
        "name": "꿈드림 작은도서관",
        "address": "경기도 광명시 도덕로 83 (하안동) 흥안주공시범아파트",
        "phone": "02-497-4637",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 9,
        "name": "기쁨 작은도서관",
        "address": "경기도 광명시 도덕로 159 (하안동) 광문교회",
        "phone": "000-0000-0000",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 10,
        "name": "소망의 작은도서관",
        "address": "경기도 광명시 도덕로 171-3 (하안동) 광명평생교육원",
        "phone": "02-011-0000",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 11,
        "name": "모두의작은도서관",
        "address": "경기도 광명시 디지털로 34 (철산동) 2층 1호",
        "phone": "02-897-8296",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 12,
        "name": "디딤돌 작은도서관",
        "address": "경기도 광명시 범안로 919 (하안동) 5층 광명광성교회",
        "phone": "02-807-8339",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 13,
        "name": "하안청소년 작은도서관",
        "address": "경기도 광명시 범안로 1026 (하안동) 광명청소년수련관",
        "phone": "02-2617-9314",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 14,
        "name": "새마을작은도서관",
        "address": "경기도 광명시 범안로 1044 (하안동) 하안1동제1호공영주차장 3층",
        "phone": "02-2618-2060",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 15,
        "name": "교통안전 작은도서관",
        "address": "경기도 광명시 소하로 116 (소하동) GUU 능촌 매니저 아파트 113",
        "phone": "010-9913-9683",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 16,
        "name": "기쁨이있는 작은도서관",
        "address": "경기도 광명시 소하로 127 (소하동) 하안종합사회복지관",
        "phone": "02-898-7223",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 17,
        "name": "한내 작은도서관",
        "address": "경기도 광명시 소하로38번안길 6 (소하동) 평생학습원한내",
        "phone": "02-898-7173",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 18,
        "name": "해오름 작은도서관",
        "address": "경기도 광명시 시청로 37 (철산동)",
        "phone": "02-2614-5815",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 19,
        "name": "중앙 행복한 작은도서관",
        "address": "경기도 광명시 시청로 46 (철산동) 로데오빌딩 211호",
        "phone": "02-2684-6100",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 20,
        "name": "하안누리문고",
        "address": "경기도 광명시 오리로854번길 3 (하안동)",
        "phone": "02-897-6200",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 21,
        "name": "꿈을 여는 작은도서관",
        "address": "경기도 광명시 오리로907번길 3 (하안동) 3층(303호)",
        "phone": "02-803-2162",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 22,
        "name": "깨우는 작은도서관",
        "address": "경기도 광명시 오리로907번길 4 (하안동) 301호 작은도서관",
        "phone": "02-899-1192",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 23,
        "name": "너부 영유아 도서관",
        "address": "경기도 광명시 철산로 38 (철산동) 철산초등학교",
        "phone": "02-2680-5819",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 24,
        "name": "너부아트빌 도서관",
        "address": "경기도 광명시 철산로 37 (철산동) 아트빌아파트상가201호",
        "phone": "02-897-7973",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 25,
        "name": "우리동네 작은도서관",
        "address": "경기도 광명시 철산로 40 (철산동) 주공13단지 생활복지센터 내",
        "phone": "02-2619-0685",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 26,
        "name": "조은별유치원 작은도서관",
        "address": "경기도 광명시 철산로 42 (철산동) 조은별유치원",
        "phone": "02-2612-0202",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 27,
        "name": "지혜의 집 작은도서관",
        "address": "경기도 광명시 철산로 56 (철산동) 철산어린이집",
        "phone": "02-2683-2789",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 28,
        "name": "별빛 작은도서관",
        "address": "경기도 광명시 철산로 70 (철산동) 철산3동 행정복지센터 내 2층",
        "phone": "02-2680-6006",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 29,
        "name": "큰나무작은도서관",
        "address": "경기도 광명시 철산로17번길 4 (철산동) 4층",
        "phone": "02-2686-1191",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 30,
        "name": "성모 작은도서관",
        "address": "경기도 광명시 철산로21번길 27-5 (철산동) 성당사무실",
        "phone": "02-2682-6400",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 31,
        "name": "철산뜰 작은도서관",
        "address": "경기도 광명시 철산로39번길 16 (철산동) 104동 2층",
        "phone": "02-2680-6079",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 32,
        "name": "앤의 작은도서관",
        "address": "경기도 광명시 철산로41번길 21 (철산동) 주공1단지아파트 121동앞 상가",
        "phone": "02-2060-6080",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 33,
        "name": "푸른이삭학교 작은도서관",
        "address": "경기도 광명시 하안로 347 (소하동) 효성해링턴 플레이스 상가 지하1층",
        "phone": "02-2083-9143",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 34,
        "name": "새마을 중앙 작은도서관",
        "address": "경기도 광명시 한내일로 40 (광명동) 밤일마을 작은도서관",
        "phone": "02-2060-5445",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 35,
        "name": "이루마 작은도서관",
        "address": "경기도 광명시 한주로 463 (일직동) 광명6단지아파트 601-601호",
        "phone": "02-2250-7817",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 36,
        "name": "한결같은 작은도서관",
        "address": "경기도 광명시 한주로 523 (일직동) 상가동비스타동 205호",
        "phone": "02-2230-7433",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 37,
        "name": "꿈꾸는 도토리 작은도서관",
        "address": "경기도 광명시 한주로 606 (일직동) 2층 201호",
        "phone": "02-899-2010",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 38,
        "name": "책읽는소하 작은도서관",
        "address": "경기도 광명시 호랭이거리 4 (소하동) 3층",
        "phone": "02-894-8600",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 39,
        "name": "푸른하늘작은도서관",
        "address": "경기도 광명시 호봉골길 35 (하안동) 푸른하늘 어린이집 2층",
        "phone": "02-898-3653",
        "type": "사립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 40,
        "name": "광명6동 작은도서관",
        "address": "경기도 광명시 희광로 20 (광명동) 광명6동 행정복지센터 2층",
        "phone": "02-2680-5058",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 41,
        "name": "꿈틀 꿈틀 작은도서관",
        "address": "경기도 광명시 신기로 20 (소하동) 소하1동행정복지센터",
        "phone": "02-811-1242",
        "type": "공립",
        "lat": 0,
        "lng": 0
    },
    {
        "id": 42,
        "name": "포이즌 앤 북스 작은도서관",
        "address": "경기도 광명시 디지털로 34 31층 1호(철산동)",
        "phone": "02-2680-6575",
        "type": "사립",
        "lat": 0,
        "lng": 0
    }
];

async function fetchCoordinates() {
    const results = [];
    console.log(`Fetching coordinates for ${libraries.length} libraries...`);

    for (const lib of libraries) {
        try {
            // Strategy 1: Full address
            let query = lib['address'];
            let lat = 0;
            let lng = 0;

            // Helper to fetch
            const doFetch = async (q) => {
                const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`;
                const res = await fetch(url, {
                    headers: { 'User-Agent': 'GwangmyeongLibraryHub/1.0' },
                    signal: AbortSignal.timeout(5000)
                });
                if (!res.ok) throw new Error(res.statusText);
                return await res.json();
            };

            let data = await doFetch(query);

            if (data && data.length > 0) {
                lat = parseFloat(data[0].lat);
                lng = parseFloat(data[0].lon);
                console.log(`[OK] ${lib['name']}: ${lat}, ${lng}`);
            } else {
                // Strategy 2: Remove parentheses and floor info
                // e.g. "경기도 광명시 너부대로45번안길 20-19 (광명동) 2층" -> "경기도 광명시 너부대로45번안길 20-19"
                let simple = query.replace(/\([^)]*\)/g, '').split(' ').filter(p => !p.includes('층') && !p.includes('호')).join(' ');

                // Also remove building names if they are at the end
                // This is heuristic. Let's just try to keep the first 4 parts if it's long
                // "경기도 광명시 너부대로45번안길 20-19" is 4 parts.

                console.log(`[Retry 1] ${lib['name']}: ${simple}`);
                data = await doFetch(simple);

                if (data && data.length > 0) {
                    lat = parseFloat(data[0].lat);
                    lng = parseFloat(data[0].lon);
                    console.log(`  -> Found: ${lat}, ${lng}`);
                } else {
                    // Strategy 3: Just Road Name Address
                    // Try to extract "경기도 광명시 [RoadName] [Number]"
                    // Regex for "경기도 광명시" + anything until a number
                    const match = query.match(/(경기도\s+광명시\s+\S+\s+\d+(?:-\d+)?)/);
                    if (match) {
                        const roadAddr = match[1];
                        console.log(`[Retry 2] ${lib['name']}: ${roadAddr}`);
                        data = await doFetch(roadAddr);
                        if (data && data.length > 0) {
                            lat = parseFloat(data[0].lat);
                            lng = parseFloat(data[0].lon);
                            console.log(`  -> Found: ${lat}, ${lng}`);
                        } else {
                            console.log(`  -> Failed`);
                        }
                    } else {
                        console.log(`  -> Failed (No road address pattern)`);
                    }
                }
            }

            results.push({
                id: lib['id'],
                name: lib['name'],
                address: lib['address'],
                phone: lib['phone'],
                type: lib['type'],
                lat: lat,
                lng: lng
            });

            await new Promise(r => setTimeout(r, 1100)); // Rate limit

        } catch (error) {
            console.error(`Error processing ${lib['name']}: ${error.message}`);
            results.push({ ...lib, lat: 0, lng: 0 });
        }
    }

    const fs = await import('fs');
    fs.writeFileSync('libraries_with_coords_v2.json', JSON.stringify(results, null, 2), 'utf-8');
    console.log('Saved to libraries_with_coords_v2.json');
}

fetchCoordinates();
