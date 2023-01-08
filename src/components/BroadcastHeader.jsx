import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { SORT_STATUS, SORT_STATUS_MAP } from "../enums";
import { API } from "../utils/api";

const BroadcastHeader = ({
  sortKey,
  setSortKey,
  pageCnt,
  setBroadcastList,
  setTotalCnt,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="16px"
    >
      <Typography variant="h6" gutterBottom>
        전체
      </Typography>
      <Box display="flex" alignItems="center">
        <FormControl fullWidth>
          <InputLabel id="select-sort-key">정렬</InputLabel>
          <Select
            labelId="sort-key"
            id="sort"
            value={sortKey}
            label="정렬"
            onChange={(e) => setSortKey(e.target.value)}
          >
            <MenuItem value={SORT_STATUS.BROAD_START}>
              {SORT_STATUS_MAP[SORT_STATUS.BROAD_START]}
            </MenuItem>
            <MenuItem value={SORT_STATUS.VIEW_COUNT}>
              {SORT_STATUS_MAP[SORT_STATUS.VIEW_COUNT]}
            </MenuItem>
          </Select>
        </FormControl>
        <IconButton
          aria-label="replay"
          onClick={async () => {
            const { data } = await API.get(
              `/broad/list?client_id=${process.env.REACT_APP_CLIENT_ID}&order_type=${sortKey}&page_no=${pageCnt}`
            );

            setBroadcastList(data.broad);
            setTotalCnt(Math.ceil(data.total_cnt / 60));
          }}
        >
          <ReplayIcon className="margin" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BroadcastHeader;
