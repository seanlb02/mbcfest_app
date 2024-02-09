import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
import Navdrawer from "@/Components/Navbar";
import Note from "@/Components/Note";

export default function Account() {
  const mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.pageContainer}>
      <Navdrawer />
      <div className={styles.title}>Hi User</div>

      <div className={styles.subtitle}>Your Notes</div>

      <div className="flex flex-col bg-[#363537] overflow-y-scroll">
        {mapper.map((el) => (
          <Note
            text={"note text goes here"}
            timestamp={"timestamp"}
            button={"delete"}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: "flex text-white bg-[#404040] flex-col overflow-y-none",
  title: "text-2xl p-3 ml-5 mb-2 text-white",
  subtitle: "text-xl p-3 ml-5 mb-2",
  form: "flex w-full justify-center",
  text: "flex w-full p-2 mx-3 rounded border-2 resize-none",
  button:
    "flex rounded-full bg-black text-white p-3 px-5 m-5 w-fit text-center justify-center",
};
