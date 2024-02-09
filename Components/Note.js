import Head from "next/head";
import Image from "next/image";

import React, { useState, useContext, useEffect, useRef } from "react";
import Info from "./Info";
import { Sidebar_props } from "../context/context";

export default function Note({ username, text, likes, timestamp, button }) {
  return (
    <div className={styles.noteContainer}>
      <div className={styles.noteHead}>
        <div className={styles.username}>{username}</div>
        <div className={styles.timestamp}>{timestamp}</div>
        <div>{button}</div>
      </div>

      <div className={styles.noteBody}>{text}</div>
    </div>
  );
}

const styles = {
  noteContainer:
    "flex bg-[#141414] text-white flex-col p-5 w-full h-contain overflow-y-scroll",
  noteHead: "flex flex-row gap-12 items-center",
  username: "text-xl",
  timestamp: "text-slate-300 italic",
  noteBody: "flex word-wrap text-sm pt-1",
};
