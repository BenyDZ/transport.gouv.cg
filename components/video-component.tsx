"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default async function VideoComponent() {
  const src = await getVideoSrc();

  return (
    <div>
      <LiteYouTubeEmbed
        id={src}
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
      />
    </div>
  );
}

function getVideoSrc() {
  return "dicv7HdNnL8";
}
