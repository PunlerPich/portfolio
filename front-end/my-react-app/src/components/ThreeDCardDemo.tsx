"use client";

import { Image } from "@nextui-org/react";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var  ">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.01] w-auto sm:w-[60rem] h-auto rounded-xl p-6    ">
        <CardItem
          translateZ="50"
          className="text-4xl font-bold text-neutral-600 dark:text-white">
          Keo PunlerPich
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Web/Mobile Developer
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://mynewsforbelty.s3.amazonaws.com/TestImage/2+copy.jpg"
            height="1000"
            width="1000"
            className="h-[32rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Work experience →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Contact me
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
