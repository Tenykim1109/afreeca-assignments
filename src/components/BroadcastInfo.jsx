import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import { StBJThumbnail } from "../style";

const BroadcastInfo = () => {
  return (
    <div
      style={{ position: "relative", minHeight: "107px", marginTop: "12px" }}
    >
      <StBJThumbnail
        href="https://afreecatv.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="" alt="BJ" style={{ objectFit: "cover" }} />
      </StBJThumbnail>
      {/* <Avatar sx={{ width: 40, height: 40 }} /> */}
      <h3 style={{ display: "flex", marginLeft: "50px", fontSize: "14px" }}>
        <a href="https://afreecatv.com" target="_blank" rel="noreferrer">
          안녕하세요
        </a>
      </h3>
      <div
        style={{ display: "flex", marginLeft: "50px", alignItems: "center" }}
      >
        <a href="https://afreecatv.com" target="_blank" rel="noreferrer">
          <span>안녕하세요</span>
        </a>
        <PeopleIcon />
        <span>99,999</span>
      </div>
    </div>
  );
};

export default BroadcastInfo;
