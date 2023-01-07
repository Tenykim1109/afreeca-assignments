import React from "react";
import { Box, Pagination } from "@mui/material";
import { StBroadcastContainer } from "../../style";
import BroadcastHeader from "../../components/BroadcastHeader";
import BroadcastItem from "../../components/BroadcastItem";

const Main = () => {
  return (
    <Box sx={{ border: 1 }} display="flex" flexDirection="column">
      <BroadcastHeader />
      <div className="cBox-list" style={{ margin: 0, padding: 0, border: 0 }}>
        <StBroadcastContainer>
          {[1, 2, 3, 4, 5, 6].map((val) => (
            <BroadcastItem key={val} />
          ))}
          <BroadcastItem />
        </StBroadcastContainer>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "8px 0 8px 0",
        }}
      >
        <Pagination
          color="primary"
          count={11}
          defaultPage={6}
          boundaryCount={2}
        />
      </div>
    </Box>
  );
};

export default Main;
