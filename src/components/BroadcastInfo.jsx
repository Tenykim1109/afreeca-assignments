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
      <h3
        style={{
          display: "flex",
          fontSize: "14px",
          padding: 0,
          margin: "0px 0px 0px 50px",
        }}
      >
        <a
          href={`https://play.afreecatv.com/${userId}/${broadNo}`}
          target="_blank"
          rel="noreferrer"
          style={{ textDecorationLine: "none", color: "black" }}
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
          style={{ textDecorationLine: "none", fontSize: "14px" }}
        >
          <span>{userNick}</span>
        </a>
        <PeopleIcon className="margin" />
        <span>{totalViewCnt.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
      </div>
    </div>
  );
};

export default BroadcastInfo;
