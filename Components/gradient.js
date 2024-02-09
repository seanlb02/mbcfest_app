import Head from "next/head";
import Image from "next/image";

import React, { useState, useContext, useEffect, useRef } from "react";
import FancyText from "@carefully-coded/react-text-gradient";

export default function Gradient({ text }) {
  return (
    <FancyText
      gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
      animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
      animate
      animateDuration={1500}
    >
      {text}
    </FancyText>
  );
}
