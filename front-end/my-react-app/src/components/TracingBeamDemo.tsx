"use client";
import React from "react";
import { calsans } from "./utils/calsans";
import { Image } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <>
      <div className="max-w-[1000px]  m-auto  py-12  px-4 ">
        <div className=" space-y-2">
          <p className="text-lg text-muted-foreground ">
            WELCOME TO THE PAGE OF
          </p>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white">
            Work & Experience
          </h1>
        </div>
      </div>
      <TracingBeam className="pt-28 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-default-400  rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p
                className={twMerge(
                  calsans.className,
                  "text-xl mb-4 font-bold"
                )}>
                {item.title}
              </p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: "DON BOSCO KEP (Web Developer)",
    description: (
      <>
        <p>
          Built and maintained dynamic websites using PHP and WordPress for
          various departments within Don Bosco Kep. Developed user-friendly
          interfaces and implemented functionalities based on client
          requirements. Conducted comprehensive testing and debugging to ensure
          seamless website performance.
        </p>
        <p>
          Additionally, instructed Year 1 students on the fundamentals of web
          development, including HTML and CSS. Created engaging lesson plans and
          provided practical exercises to enhance learning. Cultivated a
          supportive learning environment to promote student understanding and
          growth.
        </p>
      </>
    ),
    badge: "Kep, 2020-2021",
    image:
      "https://mynewsforbelty.s3.amazonaws.com/TestImage/10.06.2021+Photo+At+Achool.jpg",
  },
  {
    title: "JZ Group (Web Developer)",
    description: (
      <>
        <p>
          I've utilized the Laravel framework to construct robust and scalable
          web applications, meaning they can handle high traffic volumes,
          complex interactions, and remain secure and adaptable. My work extends
          beyond new development as I also excel at enhancing and maintaining
          existing websites.
        </p>
        <p>
          This involves identifying areas for improvement through data and user
          feedback, followed by implementing new features that enhance user
          experience and address business objectives. Maintaining existing
          functionalities and actively participating in optimization initiatives
          ensures the websites I work on remain up-to-date, secure, and
          performant.
        </p>
      </>
    ),
    badge: "Phnom Penh, 2021-2022",
    image: "https://mynewsforbelty.s3.amazonaws.com/TestImage/2+copy.jpg",
  },
  {
    title: "True Money Cambodia (	Backend Developer)",
    description: (
      <>
        <p>
          I possess expertise in RESTful API development, leveraging Spring Boot
          to architect and implement robust APIs that facilitate seamless data
          exchange between backend services and mobile applications. I design
          efficient endpoints to handle various request types (GET, POST, PUT,
          DELETE) and ensure smooth communication
          <br /> I integrate Spring Data JPA for effective database interaction,
          simplifying data access and persistence tasks. This includes
          implementing CRUD operations for diverse data sources, guaranteeing
          data integrity and consistency. Moreover, I possess a strong
          understanding of microservices architecture and utilize Spring Cloud
          components to build scalable and resilient microservices.
          <br /> I prioritize security by integrating Spring Security to
          safeguard RESTful APIs, protecting sensitive data and preventing
          unauthorized access. I configure robust authentication and
          authorization mechanisms, encompassing role-based access control, to
          enforce user permissions.
        </p>
      </>
    ),
    badge: "Phnom Penh, 2023",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2Fpich.jpg?alt=media&token=1abf3687-50a3-45df-9473-4280c981739b",
  },
];
