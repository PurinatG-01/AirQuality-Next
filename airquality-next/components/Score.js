import React from "react";
import { Box, CircularProgress, Typography, Divider } from "@material-ui/core";
import { THEME } from "./variable";
import styled from "styled-components";

const CustomCircular = styled(CircularProgress)`
  svg {
    circle {
      color: ${THEME.primary};
    }
    transform: rotate(180deg);
  }
`;

const ScoreWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ScoreBox = styled(Box)`
  background: red;
`;

export default function Score(props) {
  const { overallScore } = props;
  return (
    <ScoreWrapper>
      <Divider orientation="vertical"  flexItem style={{ fontSize: 30,backgroundColor: THEME.dividerColor }}/>
      <ScoreBox position="relative" display="inline-flex">
        <CustomCircular size="94px" variant="static" value={overallScore} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            style={{ color: THEME.primary, fontSize: `32px` }}
          >
            {overallScore}
          </Typography>
        </Box>
      </ScoreBox>
    </ScoreWrapper>
  );
}
