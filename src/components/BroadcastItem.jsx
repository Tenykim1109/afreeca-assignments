import React from "react";
import { StBroadcastItem } from "../style";
import BroadcastInfo from "./BroadcastInfo";
import Thumbnail from "./Thumbnail";

const BroadcastItem = () => {
  return (
    <StBroadcastItem>
      <Thumbnail />
      <BroadcastInfo />
    </StBroadcastItem>
  );
};

export default BroadcastItem;
