import React from 'react';
import Globe from 'react-globe.gl';
import { useEffect } from 'react';
import { useRef } from 'react';
function Earth() {
  const N = 30;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random()- 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['#8B0000', '#0000', '#008080', '#8FBC8F'][Math.round(Math.random() * 3)], ['#800000', '#F5F5F5 ', '#87CEEB', '#D1E189'][Math.round(Math.random() * 3)]]
  }));
  const globeRef = useRef();

  useEffect(() => {
    const globe = globeRef.current;
    globe.controls().autoRotate = true;
    globe.controls().enableZoom = false;
    globe.controls().enablePan = true;
    globe.controls().enableDamping = false;
    globe.controls().autoRotateSpeed  = 180;
  }, []);
  return (
    <div className='Earth'  >
    <Globe
    ref={globeRef}
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    arcsData={arcsData}
    arcColor={'color'}
    arcDashLength={() => Math.random()}
    arcDashGap={() => Math.random()}
    arcDashAnimateTime={() => Math.random() * 1000 + 500}
    backgroundColor="rgba(0,0,0,0)"
    
    width={800} height={950 / (4/3)}
  
    />
    </div>
  );
}

export default Earth;
