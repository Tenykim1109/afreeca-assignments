import styled from "@emotion/styled";

export const StBroadcastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const StBroadcastItem = styled.li`
  position: relative;
  flex: 0 1 auto;
  padding: 8px;
`;

export const StThumbnailBox = styled.div`
  position: relative;
`;

export const StBroadcastAllow = styled.span`
  position: absolute;
  top: 7px;
  left: 7px;
  background: rgba(0, 0, 0, 0.6);
  height: 24px;
  padding: 0 9px;
  border: 1px solid #36caef;
  box-sizing: border-box;
  border-radius: 24px;
  color: #00ddff;
  font-size: 12px;
  line-height: 22px;
  opacity: ${(props) => (props.mouseOver ? 1 : 0)};
  transition: opacity 0.2s;
`;

export const StStartTime = styled.span`
  position: absolute;
  bottom: 7px;
  right: 7px;
  background: rgba(0, 0, 0, 0.7);
  height: 20px;
  padding: 0 6px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  letter-spacing: -0.25px;
  line-height: 19px;
  z-index: 5;
  opacity: ${(props) => (props.mouseOver ? 1 : 0)};
  transition: opacity 0.2s;
`;

export const StBJThumbnail = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  box-sizing: border-box;
`;
