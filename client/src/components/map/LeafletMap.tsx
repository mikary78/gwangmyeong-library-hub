'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LibraryData } from '../../data/libraries';
import L from 'leaflet';

// Fix for default marker icon
const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface LeafletMapProps {
    libraries: LibraryData[];
}

export default function LeafletMap({ libraries }: LeafletMapProps) {
    // Center of Gwangmyeong
    const center: [number, number] = [37.4786, 126.8647];

    return (
        <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {libraries.map((lib) => (
                <Marker key={lib.id} position={[lib.lat, lib.lng]} icon={icon}>
                    <Popup>
                        <div style={{ minWidth: '200px' }}>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>{lib.name}</h3>
                            <p style={{ margin: '0 0 5px 0', fontSize: '13px' }}>{lib.address}</p>
                            <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>{lib.phone}</p>
                            <span style={{
                                display: 'inline-block',
                                marginTop: '5px',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                background: '#eee',
                                fontSize: '11px'
                            }}>
                                {lib.type}
                            </span>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
