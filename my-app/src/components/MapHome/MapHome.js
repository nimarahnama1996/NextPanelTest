import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';


import './MapHome.css'


mapboxgl.accessToken ='pk.eyJ1IjoibmV4dGxsYyIsImEiOiJjbDV4Z21xZzUwdDF1M2lucG80eTh6MDBhIn0.6H_GxBFoUQDI58Za_iJdrg'
  



const MapHome = () => {


  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [lng, lat],
      zoom: zoom,
     
    });

    

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
   
    <div>
    <div className='sidebarStyle'>
      <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
    </div>
    <div className='map-container' ref={mapContainerRef} />
  </div>
  )
}

export default MapHome