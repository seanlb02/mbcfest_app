import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
import Navdrawer from "@/Components/Navbar";

import { Sidebar_props } from "../context/context";
import { useContext } from "react";
import { Router, useRouter } from "next/router";

export default function newNote() {
  const [noGPS, setNoGPS] = useState(false);
  useEffect(() => {
    // initialise user GPS
    const geolocationAPI = navigator.geolocation;
    if ("geolocation" in navigator) {
      setNoGPS(true);
    }

    if (!geolocationAPI) {
      console.log("gps error");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          console.log("gps worked");
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          setError("Something went wrong getting your position!");
        },
        { enableHighAccuracy: true },
      );
    }
  }, []);

  const router = useRouter();
  const postNotes = async function (id, uname, time, text, long, lat) {
    // var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const reqBody = {
      user_id: `${id}`,
      username: `${uname}`,
      timestamp: `${time}`,
      text: `${text}`,
      long: `${long}`,
      lat: `${lat}`,
    };
    const res = await fetch(
      `https://mapdropapi-production.up.railway.app/notes/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(reqBody),
      },
    );
    return res.json().then((res) => router.push("/"));
  };

  const { sidebarprops, setSidebarprops } = useContext(Sidebar_props);

  const [id, setID] = useState("fake");
  const [uname, setUname] = useState("test");
  const [time, setTime] = useState(Date.now());
  const [text, setText] = useState("");
  const [long, setLong] = useState(151.33333);
  const [lat, setLat] = useState(-33.897);

  return (
    <div className={styles.pageContainer}>
      <Navdrawer />
      <div className={styles.title}>Create a note</div>

      <form className={styles.form}>
        <textarea
          className={styles.text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type what's on your mind"
        ></textarea>
      </form>

      <div
        className={styles.button}
        onClick={() => postNotes(id, uname, time, text, long, lat)}
      >
        Drop note
      </div>
    </div>
  );
}

const styles = {
  pageContainer: "",
  title: "text-2xl p-3 ml-5 mb-2",
  form: "flex w-full justify-center",
  text: "flex w-full p-2 mx-3 rounded border-2 resize-none",
  button:
    "flex rounded-full bg-black text-white p-3 px-5 m-5 w-fit text-center justify-center",
};
