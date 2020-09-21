import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Home() {
  const [viewport, setViewport] = useState({
    latitude: 33.5731104,
    longitude: -7.5898434,
    zoom: 8,
    width: '100vw',
    height: '100vh',
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/ceeyahya/ckfcsse1e14se19ozntzg4m56"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_API_KEY}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        marker
      </ReactMapGL>
    </div>
  );
}
