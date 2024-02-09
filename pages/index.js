import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../Components/Sidebar";
import Info from "../Components/Info";
import Feed from "@/Components/Feed";

import { Sidebar_props } from "../context/context";
import { useContext } from "react";
import { useRouter } from "next/router";
import Navdrawer from "@/Components/Navbar";

// import { BrowserView, MobileView, isChrome, isBrowser, isMobile, CustomView, browserName, BrowserTypes } from 'react-device-detect';

const Map = dynamic(
  () => import("Components/Map"), // replace '@components/map' with your component's location
  { ssr: false }, // This line is important. It's what prevents server-side render
);

const CustomView = dynamic(() => import("react-device-detect"), { ssr: false });

export default function Home() {
  const { sidebarprops, setSidebarprops } = useContext(Sidebar_props);
  const [bool, setBool] = useState(true);
  useEffect(() => {
    setSidebarprops({ view: true });
  }, []);

  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    //   return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <CustomView condition={browserName === "Chrome"}>

    <div className={styles.pageContainer}>
      <Head>
        <title>King St Crawl</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {width > 1000 ? (
        <div id="leftpanel" className="flex flex-col w-fit h-fit">
          {sidebarprops.view ? <Map className={styles.map} /> : <></>}
          <div className="flex bottom-0 text-white w-full h-36 items-center justify-center mt-5 border">
            Banner Ad here (?)
          </div>
        </div>
      ) : (
        <>{sidebarprops.view ? <Map className={styles.map} /> : <></>}</>
      )}

      {sidebarprops.view ? <></> : <Navdrawer />}
      <div className={styles.sidebarContainer}>
        <Sidebar
          className={styles.sidebar}
          view={sidebarprops.view}
          username={sidebarprops.username}
          range={sidebarprops.range}
          time={sidebarprops.time}
          lat={sidebarprops.lat}
          long={sidebarprops.long}
          timestamp={sidebarprops.timestamp}
          text={sidebarprops.text}
          likes={sidebarprops.likes}
          show={sidebarprops.show}
        />
      </div>
      {sidebarprops.view ? <></> : <Feed className="relative" />}
    </div>
  );
}

const styles = {
  pageContainer:
    "bg-[#141414] flex flex-col lg:flex lg:flex-row w-[100vw] h-[100vh]",
  map: "flex lg:w-[100vw] lg:h-[100vh] sm:h-auto",
  sidebar: "flex",
  sidebarContainer: "flex h-auto flex-col justfiy-center",
};
