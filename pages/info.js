import Head from "next/head";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";

export default function Sidebar() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.Title}>
        <h5>[App name]</h5>
      </div>
    </div>
  );
}

const styles = {
  pageContainer:
    "flex h-[40vh] bg-red-500 border-l-2 lg:w-[25vw] lg:h-[100vh] justify-center content-center text-center items-center p-5",
  Title: "w-full h-full text-2xl",
};
