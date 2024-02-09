// this is the loading animation rendered while map loads

import Head from "next/head";
import Image from "next/image";

import React, { useState, useContext, useEffect, useRef } from "react";
import { Puff } from "react-loader-spinner";
import Gradient from "./gradient";

export default function LoadAnimation() {
  return (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <div>
        <Gradient text="Loading your position..." />
      </div>
    </div>
  );
}
