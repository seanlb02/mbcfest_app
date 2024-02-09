import Head from "next/head";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";

export default function Info({ venue, name, event, link }) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.Title}>
        <h5>{venue}</h5>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>Event</button>
        <button className={styles.button}>Live playlist</button>
      </div>

      <div>{name}</div>
      <div>{event}</div>
      <a href={link}>Go to event page</a>
    </div>
  );
}

const styles = {
  pageContainer:
    " flex flex-col w-full h-full overflow-y-scroll p-5 text-center no-scrollbar",
};
