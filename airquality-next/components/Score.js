import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography, Divider } from "@material-ui/core";
import { THEME } from "./variable";
import styled from "styled-components";
import FiberIcon from "@material-ui/icons/FiberManualRecord";

const CustomCircular = styled(CircularProgress)`
  svg {
    filter: drop-shadow(
      0px 0px 10px ${(props) => (props.color ? props.color : THEME.secondary)}
    );
    circle {
      color: ${(props) => (props.color ? props.color : THEME.secondary)};
    }
    transform: rotate(180deg);
  }
`;

const ScoreWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;
const ScoreBox = styled(Box)``;

const ScoreBoxWrapper = styled.div`
  min-width: 50%;
  min-height: 90%;
  margin: 16px 32px 0 32px;
  display: flex;
  justify-content: center;
  align-items: space-around;
  align-items: center;
  flex-direction: column;
  color: ${THEME.secondary};
  flex-grow: 1;
  z-index: 0;
`;

const ListScoreWrapper = styled.div`
  min-width: 15%;
  min-height: 90%;
  overflow: scroll;
  margin: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailWrapper = styled.div`
  min-width: 90%;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const DetailTypography = styled(Typography)`
  display: flex;
  align-items: center;
  color: ${THEME.secondary};
  font-size: 12px !important;
`;

export default function Score(props) {
  const { overallScore, inScore } = props;
  const [color, setColor] = useState(THEME.secondary);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (overallScore <= 30 && overallScore >= 0) {
      setColor(THEME.red);
    } else if (overallScore <= 70 && overallScore >= 31) {
      setColor(THEME.yellow);
    } else if (overallScore <= 100 && overallScore >= 71) {
      setColor(THEME.green);
    } else {
      setColor(THEME.secondary);
      setError(true);
    }
  }, [overallScore]);

  return (
    <ScoreWrapper>
      <ListScoreWrapper>
        <DetailTypography>
          <FiberIcon
            style={{ color: THEME.secondary, fontSize: 14, marginRight: 8 }}
          />
          CO2
        </DetailTypography>
        <DetailTypography>
          <FiberIcon
            style={{ color: THEME.secondary, fontSize: 14, marginRight: 8 }}
          />
          Temperature
        </DetailTypography>
        <DetailTypography>
          <FiberIcon
            style={{ color: THEME.secondary, fontSize: 14, marginRight: 8 }}
          />
          Humidity
        </DetailTypography>
        <DetailTypography>
          <FiberIcon
            style={{ color: THEME.secondary, fontSize: 14, marginRight: 8 }}
          />
          Pressure
        </DetailTypography>
        <DetailTypography>
          <FiberIcon
            style={{ color: THEME.secondary, fontSize: 14, marginRight: 8 }}
          />
          Gas
        </DetailTypography>
        <DetailTypography>
          <FiberIcon
            style={{ color: THEME.secondary, fontSize: 14, marginRight: 8 }}
          />
          PM
        </DetailTypography>
      </ListScoreWrapper>
      <Divider
        orientation="vertical"
        flexItem
        style={{ fontSize: 30, backgroundColor: THEME.dividerColor }}
      />
      <ScoreBoxWrapper>
        <ScoreBox position="relative" display="inline-flex">
          <CustomCircular
            size="94px"
            variant="static"
            value={overallScore}
            color={color}
          />
          
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
              style={{
                color: color,
                fontSize: `32px`,
              }}
            >
              {overallScore}
            </Typography>
          </Box>
        </ScoreBox>
        <Typography
          variant="subtitle1"
          style={{ color: THEME.secondary, marginTop: 16 }}
        >
          Overall Score
        </Typography>
        <DetailWrapper>
          <DetailTypography>
            <FiberIcon
              style={{ color: THEME.green, fontSize: 14, marginRight: 8 }}
            />
            Good
          </DetailTypography>
          <DetailTypography>
            <FiberIcon
              style={{ color: THEME.yellow, fontSize: 14, marginRight: 8 }}
            />
            Medium
          </DetailTypography>
          <DetailTypography>
            <FiberIcon
              style={{ color: THEME.red, fontSize: 14, marginRight: 8 }}
            />
            Bad
          </DetailTypography>
        </DetailWrapper>
      </ScoreBoxWrapper>
    </ScoreWrapper>
  );
}
