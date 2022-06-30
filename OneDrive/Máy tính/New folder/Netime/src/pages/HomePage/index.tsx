import React from "react";
import { Anime } from "../../types";
import Storage from "../../utils/Storage";
import Video from "../WatchScreen/Video";
import Section from "./Section";
import SlideCarousel from "./SlideCarousel";

const sections = [
  {
    title: "Xem gần đây",
    data: Storage.find<Anime>("recent").reverse(),
  },
  {
    title: "Mới cập nhật",
    category: "recently",
  },
  {
    category: "recommended",
    title: "Hôm nay xem gì?",
  },
  {
    category: "ranking",
    slug: "ngay",
    title: "Xem nhiều trong ngày",
  },
];

const HomePage = () => {
  return (
    <div className="px-8 py-20 lg:px-20 lg:py-24 w-full h-full space-y-6">
      <div className="hidden md:block">
        <SlideCarousel />
      </div>

      <div className="space-y-6">
        {sections.map((section, i) => (
          <Section {...section} key={i} />
        ))}
      </div>
      <div className="text-blue-600">Hello</div>
      <Video
                source={{
                    type: "video",
                    sources: [
                      {
                        src: "https://s861.imacdn.com/m7/playlist/e463d0e0b4c90271e563c87daaa2c9fb/e463d0e0b4c90271e563c87daaa2c9fb.m3u8?hash=TeE7-9VgsnRtjlIM4s7U-w&expire=1656606463"
                      },
                    ],
                  }}
                />
    </div>
  );
};

export default HomePage;
