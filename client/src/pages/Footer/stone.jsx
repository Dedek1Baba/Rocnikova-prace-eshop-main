import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 50.0755, // Náhodná lokace, můžeš změnit
  lng: 14.4378, // Náhodná lokace, můžeš změnit
};

export default function Stone() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Naše kamenná prodejna</h1>
      <p>Navštivte nás na naší prodejně a objevte širokou nabídku produktů!</p>
      
      <LoadScript googleMapsApiKey="TVŮJ_GOOGLE_MAP_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>

      <div style={{ marginTop: '20px' }}>
        <h3>Kontaktní informace</h3>
        <p>Adresa: Naše prodejna, Ulice 123, Město</p>
        <p>Telefon: +420 123 456 789</p>
        <p>Otevřeno: Po-Pá 9:00 - 18:00, So 10:00 - 14:00</p>
      </div>
    </div>
  );
}
