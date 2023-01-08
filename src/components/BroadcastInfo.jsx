import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import { StBJThumbnail } from "../style";

const BroadcastInfo = ({
  profileImage,
  userId,
  broadTitle,
  broadNo,
  userNick,
  totalViewCnt,
}) => {
  return (
    <div
      style={{ position: "relative", minHeight: "107px", marginTop: "12px" }}
    >
      <StBJThumbnail
        href={`https://bj.afreecatv.com/${userId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={profileImage} alt="BJ" style={{ objectFit: "cover" }} />
      </StBJThumbnail>
      <h3 style={{ display: "flex", marginLeft: "50px", fontSize: "14px" }}>
        <a
          href={`https://play.afreecatv.com/${userId}/${broadNo}`}
          target="_blank"
          rel="noreferrer"
        >
          {broadTitle.length > 35
            ? broadTitle.substring(0, 35) + "..."
            : broadTitle}
        </a>
      </h3>
      <div
        style={{ display: "flex", marginLeft: "50px", alignItems: "center" }}
      >
        <a
          href={`https://bj.afreecatv.com/${userId}`}
          target="_blank"
          rel="noreferrer"
        >
          <span>{userNick}</span>
        </a>
        <PeopleIcon />
        <span>{totalViewCnt.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
      </div>
    </div>
  );
};

export default BroadcastInfo;
