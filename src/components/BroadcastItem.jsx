import React from "react";
import { StBroadcastItem } from "../style";
import BroadcastInfo from "./BroadcastInfo";
import Thumbnail from "./Thumbnail";

const BroadcastItem = ({
  broadTitle,
  broadNo,
  visitBroadType,
  userId,
  userNick,
  profileImage,
  broadThumb,
  broadStart,
  totalViewCnt,
}) => {
  return (
    <StBroadcastItem>
      <Thumbnail
        userId={userId}
        broadNo={broadNo}
        broadThumb={broadThumb}
        visitBroadType={visitBroadType}
        broadStart={broadStart}
      />
      <BroadcastInfo
        broadNo={broadNo}
        broadTitle={broadTitle}
        userId={userId}
        userNick={userNick}
        profileImage={profileImage}
        totalViewCnt={totalViewCnt}
      />
    </StBroadcastItem>
  );
};

export default BroadcastItem;
