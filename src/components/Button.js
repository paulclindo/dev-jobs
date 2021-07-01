import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding-top: 16px;
  padding-bottom: 16px;
  min-width: 141px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.4s;
  text-align: center;
  text-decoration: none;
  ${({ variant, theme }) =>
    variant === "primary" &&
    `
    background: ${theme.palette.primary[700]};
    color: ${theme.palette.white};
    :hover {
      background: ${theme.palette.primary[500]};
      color: ${theme.palette.white};
    }
  `}
  ${({ variant, theme }) =>
    variant === "secondary" &&
    `
    color: ${theme.palette.primary[700]};
    background-color: ${theme.palette.secondary[300]};
    :hover {
      background: ${theme.palette.primary[300]};
    }
  `}
`;

export default function Button({ variant = "primary", ...props }) {
  return <StyledButton variant={variant} {...props} />;
}
