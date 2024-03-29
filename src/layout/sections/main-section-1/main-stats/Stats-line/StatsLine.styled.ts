import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const StatsLineWrap = styled.div<{gap: string
}>`
  max-width: 509px;
  width: 100%;
  height: 92px;
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.gap};

  @media ${theme.media.mobile} {
    max-width: 343px;
    margin-top: 0;
  }
`