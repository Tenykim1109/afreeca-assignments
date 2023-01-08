import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  StThumbnailBox,
  StBroadcastAllow,
  StStartTime,
  StThumbnailHref,
} from "../style";

const Thumbnail = ({
  userId,
  broadNo,
  broadThumb,
  visitBroadType,
  broadStart,
}) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Box
      className="bd_tb_box"
      sx={{
        border: 1,
        borderRadius: 4,
        minWidth: 231,
        minHeight: 130,
        position: "relative",
        margin: 0,
        padding: 0,
      }}
      onMouseOver={() => setMouseOver((prev) => !prev)}
      onMouseLeave={() => setMouseOver((prev) => !prev)}
    >
      <StThumbnailBox>
        <StThumbnailHref
          href={`https://play.afreecatv.com/${userId}/${broadNo}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={broadThumb} alt="" loading="lazy" />
        </StThumbnailHref>
      </StThumbnailBox>
      <StBroadcastAllow mouseOver={mouseOver} visitBroadType={visitBroadType}>
        탐방하기
      </StBroadcastAllow>
      <StStartTime
        mouseOver={mouseOver}
      >{`${broadStart} 방송시작`}</StStartTime>
    </Box>
  );
};

export default Thumbnail;
