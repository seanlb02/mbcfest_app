import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import { useRef, useState, useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

import { useRouter } from "next/router";

import { Sidebar_props } from "../context/context";

export default function Navdrawer() {
  const router = useRouter();
  const { sidebarprops, setSidebarprops } = useContext(Sidebar_props);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const mapView = function () {
    setSidebarprops({ view: true });
    router.push("/");
  };

  return (
    <div className="md:hidden fixed top-0 bg-white z-50 shadow-b-2 py-2 items-center align-center flex  ">
      <div className="">
        <div className=" p-2 pt-3 flex m-auto items-center w-[100vw] gap-4">
          <Image
            className="pl-2"
            loading="eager"
            src="/globe.png"
            width={40}
            height={40}
            onClick={() => mapView()}
          />

          <div className="flex w-[100vw] m-auto z-40 justify-center">
            <img src="/MBC_logo.png" height={100} width={250}></img>
          </div>

          {/* <Image onClick={() => router.back()} className="flex mr-4 ml-auto" src="/undo.png" height={25} width={25}/> */}
        </div>
      </div>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="bg-green-50">logo</DrawerHeader>

          <DrawerBody>
            <div className="flex h-full flex-col gap-12  pl-2 pt-12 ">
              <div>
                <Link href="/">
                  <div
                    onClick={() => setSidebarprops({ view: true })}
                    className="flex gap-3 align-center items-center mb-3 text-2xl"
                  >
                    <div>
                      <Image src="/globe.png" height={28} width={28} />
                    </div>
                    <div>Explore</div>
                  </div>
                </Link>

                <Link href="/Account">
                  <div className="flex gap-3 align-center items-center mb-3 text-2xl">
                    <div>
                      <Image
                        loading="eager"
                        src="/prof.png"
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>My Account</div>
                  </div>
                </Link>
                <Link href="/likes">
                  <div className="flex gap-3 align-center items-center mb-3 text-2xl">
                    <div>
                      <Image
                        loading="eager"
                        src="/serch.png"
                        height={32}
                        width={32}
                      />
                    </div>
                    <div>Search</div>
                  </div>
                </Link>
                <Link href="/settings">
                  <div className="flex gap-3 align-center items-center mb-3 text-2xl">
                    <div>
                      <Image
                        loading="eager"
                        src="/sets.png"
                        height={29}
                        width={29}
                      />
                    </div>
                    <div>Settings</div>
                  </div>
                </Link>
              </div>

              <div className="mt-auto pb-12">
                <div
                  className="flex gap-4 text-2xl"
                  onClick={() => router.push("/login")}
                >
                  <div>
                    <Image
                      loading="eager"
                      src="/logoot.png"
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>Log out</div>
                </div>
              </div>
            </div>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
