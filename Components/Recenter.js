import Head from "next/head";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function Recenter({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}
