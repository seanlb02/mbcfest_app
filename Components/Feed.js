import Head from "next/head";
import Image from "next/image";

import React, { useState, useContext, useEffect, useRef } from "react";
import Info from "./Info";
import { Sidebar_props } from "../context/context";
import Note from "./Note";

export default function Feed() {
  const mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.pageContainer}>
      {mapper.map((el) => (
        <Note
          username={"MBC"}
          text={"announcement text goes here"}
          timestamp={"timestamp"}
        />
      ))}
    </div>
  );
}

const styles = {
  pageContainer: "bg-[#141414] overflow-y-scroll no-scrollbar",
};
