import React from "react";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const Wrapper = styled.span`
  background: ${({ theme }) => theme.palette.white};
  height: 80px;
  padding: 0 28px;
  padding-right: 20px;
  display: inline-flex;
  justify-content: stretch;
  align-items: center;
  min-width: 320px;
`;
const SInput = styled.input`
  border: none;
  flex: 1;
  padding-left: 16px;
  font-size: 1rem;
  outline: none;
  ::placeholder {
    color: ${(props) => props.theme.palette.neutral[500]};
    opacity: 0.5;
  }
`;
const SearchIcon = styled(IoSearch)`
  color: ${(props) => props.theme.palette.primary[700]};
`;
export default function Input({ icon, placeholder, id, ...props }) {
  return (
    <Wrapper {...props}>
      <label htmlFor={id}>{icon || <SearchIcon size="24px" />}</label>
      <SInput id={id} placeholder={placeholder || "Enter desired job..."} />
    </Wrapper>
  );
}
