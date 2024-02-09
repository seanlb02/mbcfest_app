import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
import Feed from "@/Components/Feed";
import Navdrawer from "@/Components/Navbar";

export default function FeedPage() {
  return (
    <div className="h-[100h] w-[100vw]">
      <Navdrawer />
      <Feed />
    </div>
  );
}
