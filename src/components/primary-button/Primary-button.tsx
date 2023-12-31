import React from 'react';
import styled from "styled-components";
import {theme} from "../../assets";

type ButtonType = {
    buttonName: string
    width?: string
    height?: string
}

export const PrimaryButton = (props: ButtonType) => {
    const {buttonName, ...rest} = props;
    return (
        <StyledButton {...rest}>
            {props.buttonName}
        </StyledButton>
    );
};

const StyledButton = styled.a<{ width?: string, height?: string }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  border-color: transparent;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #090F1D;
  width: ${props => props.width || '134px'};
  height: ${props => props.height || '52px'};

  @media ${theme.media.tablet} {
    display: ${props => props.height ? "none" : 'inline'};
  }
`