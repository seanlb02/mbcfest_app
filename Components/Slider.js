import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import { useRef, useState, useEffect, useContext } from "react";

import { Sidebar_props } from "../context/context";

import {
  Slider,
  Box,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

export default function RangeSlider() {
  useEffect(() => {
    setSidebarprops({ range: 5 });
  }, []);

  const { sidebarprops, setSidebarprops } = useContext(Sidebar_props);

  const [sliderValue, setSliderValue] = useState(5);

  const labelStyles = {
    mt: "2",
    //   ml: '-2.5',
    fontSize: "sm",
  };

  return (
    <>
      <Box
        pt={6}
        pb={0}
        className="w-[85vw] bg-[#404040] flex justify-center items-center "
      >
        <Slider
          defaultValue={5}
          className="flex w-[20vw] "
          min={5}
          max={110}
          step={25}
          aria-valuetext="true"
          aria-label="slider-ex-6"
          onChangeEnd={(val) => setSidebarprops({ range: val })}
        >
          <SliderMark value={5} {...labelStyles}>
            5m
          </SliderMark>
          <SliderMark value={25} {...labelStyles}>
            30m
          </SliderMark>
          <SliderMark value={100} {...labelStyles}>
            100m
          </SliderMark>

          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </>
  );
}
