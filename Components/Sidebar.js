import Head from "next/head";
import Image from "next/image";

import React, { useState, useContext, useEffect, useRef } from "react";
import Info from "./Info";
import { Sidebar_props } from "../context/context";

import RangeSlider from "./Slider";
import Gradient from "./gradient";

export default function Sidebar({
  view,
  username,
  range,
  time,
  lat,
  long,
  text,
  bio,
  timestamp,
  likes,
  show,
}) {
  const [showEvent, setShowEvent] = useState(true);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [mapView, setMapView] = useState(true);

  const { sidebarprops, setSidebarprops } = useContext(Sidebar_props);

  return (
    <div className={styles.pageContainer}>
      <div>
        <Gradient text="Explore the map, click a venue to open set times" />
      </div>
      {/* <div className="flex w-full h-24 border"> */}
      {/* <Image
        src="/white_spin_logo.gif"
        className="flex  z-50 w-full h-24"
        width={100}
        height={1000}
      ></Image> */}
      {/* </div> */}

      {show ? (
        <section className={styles.infoContainer}>
          <div className="flex align-center items-center">
            <div className={styles.eventName}>{sidebarprops.username}</div>
            <div className="flex ml-auto italic text-slate-400 text-sm">
              {timestamp}
            </div>
          </div>
          <div>{text}</div>
          <div className="flex gap-1 align-center items-center mt-4">
            <div className="h-fit w-fit">
              <Image priority src="/thumb.png" width={15} height={15}></Image>
            </div>
            <div className="text-sm">{likes}</div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}

const styles = {
  pageContainer:
    "flex bg-[#404040] font-text text-white rounded-3xl pb-8 m-2 flex-col  h-[25vh] items-center lg:h-contain text-center p-5",
  Title: "w-full h-auto text-2xl",
  buttonContainer: "flex items-center justify-center gap-8 pb-6",
  button:
    "rounded-full bg-black text-white p-2 px-5 items-center align-center text-center pb-2",
  buttonChosen:
    "rounded-full bg-green-300 text-white p-2 px-5 items-center align-center text-center pb-2",
  infoContainer: "flex flex-col pt-1 px-2 text-left",
  eventName: "text-3xl py-3 mb-1",
  eventBio: "text-justify",
  artists: "text-2xl italic font-bold",
  span: "flex text-lg text-slate-400 my-6",
  link: "text-md font-bold text-black mt-12 flex gap-1",
};
