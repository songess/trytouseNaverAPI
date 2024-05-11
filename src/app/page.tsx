'use client'
import Script from 'next/script';
import { useRef } from 'react';
type NaverMap = naver.maps.Map;


const mapId = 'map';

export default function Home() {
  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 15,
      scaleControl: true,
      mapDataControl: true,
    };
    const map = new window.naver.maps.Map(mapId, mapOptions);
  };
  return (
    <main className="flex w-full h-full flex-col items-center justify-center">
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={initializeMap}
      />
       <div id = {mapId} className='w-full h-full'/>
    </main>
  );
}
