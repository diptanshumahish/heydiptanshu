import React from "react";
import WorkCards from "./workCards";
import { Annie_Use_Your_Telescope } from "next/font/google";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });

export default function Work() {
  return (
    <div className="w-full lg:p-10 p-5 flex flex-col gap-4 text-backgroundDark dark:text-backgroundLight">
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex flex-col ">
          <span>Some of my </span>
          <span className="lg:text-3xl font-bold">Selected Works</span>
          <span className={`${annie.className} lg:text-2xl`}>
            Scroll to see more
          </span>
        </div>
        <button className="bg-backgroundDark w-auto rounded-md flex lg:p-2 lg:px-4 p-2 text-backgroundLight justify-center">
          <span>More</span>
        </button>
      </div>

      {/* render cards  */}
      <WorkCards
        cards={[
          {
            name: "Warrior's Group Website",
            date: "28th September, 2022",
            details:
              "The official website Of Warriors's Group LLC. This website is meant to attract potential customers needing staffing and recruitment solutions to get their technical and non technical solutions with  ease.",
            imageLink: "/logos/wg.png",
            liveLink: "",
            technologies: "Nextjs, CSS, Formsubmit",
            colors: ["#220839", "#c89c5c", "#7d4aaa"],
            type: "Client Project",
          },
          {
            name: "IRA Future Solutions Website",
            date: "4th March, 2023",
            details:
              "IRAFS is a cutting-edge online platform designed to revolutionize the staff recruitment and hiring process. It serves as a comprehensive solution for businesses seeking top talent and job seekers looking for exciting career opportunities. With its user-friendly interface and advanced features, IRAFS aims to streamline and simplify the hiring process for employers and candidates alike.",
            imageLink: "/logos/irafs.png",
            liveLink: "https://irafs.com/",
            technologies: "Nextjs, Tailwind, Formsubmit",
            colors: ["#559a55", "#6e6e6e"],
            type: "Client Project",
          },
          {
            name: "Wallpups ",
            date: "31st July, 2022",
            details:
              "Wallpups is a cute little wallpaper setting app. I made this app just as one of my first apps in FLutter. This app is available on Playstore as well. This app simply uses the random image generator and stores them in array and serves you amazing wallpapers. You can easily set the wallpapers on your devices.",
            imageLink: "/logos/wallpups.png",
            liveLink:
              "https://play.google.com/store/apps/details?id=com.diptanshumahish.wallpups",
            technologies: "Flutter, Unsplash",
            colors: ["#472078", "#f3cfcf"],
            type: "Personal Project",
          },
          {
            name: "Warrior's Group Work Application",
            date: "2nd April, 2023",
            details:
              "One of the most complex web apps I have made till now. This application serves as a major backbone in the company. It basically handles the working of the company, tracks employees working hours, scores and maintains a leaderboard. This application also allows employees to send multiple forms and do mass mailing",
            imageLink: "/logos/wgpwa.png",
            liveLink: "",
            technologies: "Nextjs, Tailwind, Firebase, Sendgrid API",
            colors: ["#220839", "#c89c5c"],
            type: "Client Project",
          },
        ]}
      />
    </div>
  );
}
