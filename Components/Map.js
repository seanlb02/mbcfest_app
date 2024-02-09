import Head from "next/head";
import Image from "next/image";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import Recenter from "./Recenter";

import { Sidebar_props } from "../context/context";
import { useContext } from "react";
import { Router, useRouter } from "next/router";

import { getEvents } from "@/Services/DailyEventsFetch";

import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Redirect from "./blank";

import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";

// import Map from 'react-map-gl';

import MapboxMap from "./mapbox";
import moment from "moment";
import { accessToken } from "mapbox-gl";
import Navdrawer from "./Navbar";

const testResource = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [151.17835, -33.91318],
  },
  properties: {
    username: "user1",
    is_ent: false,
    text: "This is the first note ever to be writen on this app",
    category: "nothing",
    timestamp: Date.now(),
    likes: [{ username: "Jane" }, { username: "John" }],
  },
};

export default function Map() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const { sidebarprops, setSidebarprops } = useContext(Sidebar_props);
  const [filter, setFilter] = useState("Rock");
  const [eventsArray, setEventsArray] = useState([]);

  const [Position, setPosition] = useState(null);
  const [zoomDisable, setZoomDisable] = useState(true);

  const geolocationAPI = navigator.geolocation;
  const [long, setLong] = useState("");
  const [noGPS, setNoGPS] = useState(false);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(9);
  const [lat, setLat] = useState(-9);
  const [zoom, setZoom] = useState(7);

  useEffect(() => {
    //GPS init
    if ("geolocation" in navigator) {
      setNoGPS(true);
    }

    if (!geolocationAPI) {
      null;
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLng(coords.longitude);
        },
        (error) => {
          setError("Something went wrong getting your position!");
        },
        { enableHighAccuracy: true },
      );
    }
  }, [geolocationAPI.getCurrentPosition]);

  return (
    <div className={styles.pageContainer}>
      <MapboxMap />
      <div className="absolute right-0 bg-black p-1 rounded-full mr-5 mt-4 top-0">
        <img src="/mbc_small.png" height={40} width={40}></img>
      </div>

      {noGPS ? <></> : <Redirect />}
      {menuOpen ? (
        <div className={styles.filterReel}>
          <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
            <Image
              loading="eager"
              priority
              src="/down.png"
              width={20}
              height={20}
            ></Image>
          </div>

          <div className={styles.logo}>Venue Select</div>
          <div className={styles.logo}>Artist Search</div>
          <div className={styles.logo}>Report Issue</div>
        </div>
      ) : (
        <div className={styles.filterReel2}>
          <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
            <Image
              priority
              loading="eager"
              src="/hamburger_icon.png"
              width={20}
              height={20}
            ></Image>
          </div>
          <button
            className={styles.button}
            onClick={() => router.push("/announcements")}
          >
            News Feed
          </button>
        </div>
      )}
    </div>
  );
}
const styles = {
  filterReel:
    " font-text gap-2 no-scrollbar w-fit absolute bg-transparent bottom-4 left-0 right-0 z-50 overflow-x-scroll items-center px-2",
  filterReel2:
    " font-text flex gap-2 no-scrollbar absolute bg-transparent bottom-4 left-0 right-0 z-48 overflow-x-scroll items-center px-2",
  menu: "cursor-pointer text-md w-fit rounded-full bg-white px-2 py-2 border-1 shadow-md my-2 border-black",
  logo: "border-2 border-slate-600 flex items-center align-center gap-3 cursor-pointer text-md w-fit rounded-full bg-white px-4 py-1 border-1 shadow-md my-2 border-black",
  mainLogo:
    "bg-transparent absolute top-5 right-10 md:right-16 z-50 h-contain w-contain",
  pageContainer: "relative h-[75vh]  lg:w-[75vw] sm:w-[100vw]",
  popupTitle: "text-xl",
  button:
    "rounded-full bg-black text-white p-2 px-5 items-center align-center text-center pb-2",
  popupLink: "text-md pt-5",
  myLocation:
    "rounded-full p-1 absolute z-50 bottom-7 right-8 md:right-20 bg-white cursor-pointer",
};
