import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import Image from "next/image";

import { Sidebar_props } from "../context/context";
import { useContext, useRef, useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import LoadAnimation from "./gpsLoader";

import moment from "moment";

// import the mapbox-gl styles so that the map is displayed correctly

function MapboxMap() {
  // this is where the map instance will be stored after initialization
  const [map, setMap] = React.useState();
  const { sidebarprops, setSidebarprops } = useContext(Sidebar_props);

  // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
  const mapNode = useRef(null);
  const mapp = useRef(null);
  const [lng, setLng] = useState(9);
  const [lat, setLat] = useState(-9);
  const [zoom, setZoom] = useState(17);

  const [noGPS, setNoGPS] = useState(false);
  const geolocationAPI = navigator.geolocation;

  const [loaded, setLoaded] = useState(false);
  const [markerData, setMarkerData] = useState([]);

  useEffect(() => {
    // initialise user GPS

    if (!geolocationAPI) {
      console.log("gps error");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          enableHighAccuracy: true;
          const { coords } = position;
          console.log("gps worked");
          setLat(coords.latitude);
          setLng(coords.longitude);
          setLoaded(true);
        },
        (error) => {
          setError("Something went wrong getting your position!");
        },
        { enableHighAccuracy: true },
      );
    }
  }, []);

  useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    // if (typeof window === "undefined" || node === null) return;

    // otherwise, create a map instance
    if (loaded) {
      mapp.current = new mapboxgl.Map({
        container: node,
        accessToken:
          "pk.eyJ1Ijoic2VhbjEyMzQ1Njc4OSIsImEiOiJjbHBhcTdtdjIwODRxMmxvd3JxdHE1Zms4In0.6PQO6PDIdekSvP3RX41Yhg",
        style: "mapbox://styles/mapbox/standard-beta",
        center: [lng, lat],
        zoom: zoom,
        pitch: 60,
        attributionControl: false,
      });

      // save the map object to React.useState
      setMap(mapp.current);
    }

    markerData.map((el) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([el.geometry.coordinates[0], el.geometry.coordinates[1]])
        .addTo(mapp.current);
      marker.getElement().addEventListener("click", () => {
        setSidebarprops({
          ...sidebarprops,
          show: true,
          username: el.properties[0].username,
          timestamp: el.properties[0].timestamp,
          text: el.properties[0].text,
        });
      });
    });
  }, [loaded]);

  const reCenter = function () {
    console.log("flying");
    mapp.current.flyTo({
      center: [lng, lat],
      zoom: zoom,
      pitch: -90,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };

  return loaded ? (
    <>
      <div
        ref={mapNode}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      <div
        onClick={() => reCenter()}
        className="absolute bg-white rounded-full w-fit h-fit cursor-pointer p-1 bottom-14 shadow-md right-3"
      >
        <Image
          className="z-50 cursor-pointer"
          onClick={() => reCenter()}
          src="/location.png"
          height={35}
          width={35}
        />
      </div>
    </>
  ) : (
    <LoadAnimation />
  );
}
export default MapboxMap;
