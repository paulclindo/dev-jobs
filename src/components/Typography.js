import React from "react";
import styled from "styled-components";

const mapTypography = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
};
const StyledTypography = styled.h1`
  margin: 0;
  font-size: ${(props) => props.theme.typography[props.variant].fontSize};
  line-height: ${(props) => props.theme.typography[props.variant].lineHeight};
  font-weight: ${(props) => props.theme.typography[props.variant].fontWeight};
`;
type Props = {
  variant: "h1" | "h2" | "h3" | "h4" | "body",
  children: React.ReactNode,
};

export default function Typography({ variant, ...props }: Props): JSX.Element {
  const Component = mapTypography[variant] ?? "span";
  return <StyledTypography as={Component} variant={variant} {...props} />;
}
