import React, { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import { StBroadcastContainer } from "../../style";
import BroadcastHeader from "../../components/BroadcastHeader";
import BroadcastItem from "../../components/BroadcastItem";
import { API } from "../../utils/api";
import { SORT_STATUS } from "../../enums";

const Main = () => {
  const [broadcastList, setBroadcastList] = useState([]);
  const [sortKey, setSortKey] = useState(SORT_STATUS.BROAD_START);
  const [pageCnt, setPageCnt] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { data } = await API.get(
        `/broad/list?client_id=${process.env.REACT_APP_CLIENT_ID}&order_type=${sortKey}&page_no=${pageCnt}`
      );

      setBroadcastList(data.broad);
      setTotalCnt(Math.ceil(data.total_cnt / 60));
    };

    getData();
  }, [sortKey, pageCnt]);

  const handlePagination = (e, value) => {
    setPageCnt(value);
  };

  return (
    <Box sx={{ border: 1 }} display="flex" flexDirection="column">
      <BroadcastHeader
        sortKey={sortKey}
        setSortKey={setSortKey}
        pageCnt={pageCnt}
        setBroadcastList={setBroadcastList}
        setTotalCnt={setTotalCnt}
      />
      <div className="cBox-list" style={{ margin: 0, padding: 0, border: 0 }}>
        <StBroadcastContainer>
          {broadcastList.map((item) => (
            <BroadcastItem
              key={item.broad_no}
              broadTitle={item.broad_title}
              broadNo={item.broad_no}
              visitBroadType={Number(item.visit_broad_type)}
              userId={item.user_id}
              userNick={item.user_nick}
              profileImage={item.profile_img}
              broadThumb={item.broad_thumb}
              broadStart={item.broad_start}
              totalViewCnt={item.total_view_cnt}
            />
          ))}
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
          count={totalCnt}
          boundaryCount={2}
          value={pageCnt}
          onChange={handlePagination}
        />
      </div>
    </Box>
  );
};

export default Main;
