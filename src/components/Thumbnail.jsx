import React, { useState } from "react";
import { Box } from "@mui/material";
import { StBJThumbnail, StBroadcastAllow, StStartTime } from "../style";

const Thumbnail = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Box
      className="bd_tb_box"
      sx={{
        border: 1,
        borderRadius: 4,
        minWidth: 231,
        minHeight: 130,
        // maxWidth: 306,
        // maxHeight: 172,
        position: "relative",
        margin: 0,
        padding: 0,
      }}
      onMouseOver={() => setMouseOver((prev) => !prev)}
      onMouseLeave={() => setMouseOver((prev) => !prev)}
    >
      <StBJThumbnail
        href="https://afreecatv.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="" loading="lazy" />
      </StBJThumbnail>
      <StBroadcastAllow mouseOver={mouseOver}>탐방하기</StBroadcastAllow>
      <StStartTime mouseOver={mouseOver}>방송시작</StStartTime>
    </Box>
  );
};

export default Thumbnail;
