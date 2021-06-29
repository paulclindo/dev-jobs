import React from "react";
import styled from "styled-components";

import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.white};
`;
const ToggleBtn = styled.span`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 2.8em;
  height: 1.4em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: ${(props) => props.theme.palette.white};
  border-radius: 1.4em;
  padding: 4px;
  transition: all 0.4s ease;
  border: 2px solid #e8eae9;
  cursor: pointer;
  ::after {
    left: 0;
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    border-radius: 1.4em;
    background: ${({ theme }) => theme.palette.primary[700]};
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
  }
  :hover {
    ::after {
      background: ${({ theme }) => theme.palette.primary[500]};
    }
  }
  ${({ on, theme }) =>
    on &&
    `
    ::after {
      left: 50%;
    }
    :active {
      box-shadow: none;
    }
    :active::after {
      margin-left: -1.6em;
    }
  `}

  :active::after {
    padding-right: 1.6em;
  }
  [disabled] {
    opacity: 0.7;
    cursor: auto;
  }
`;

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

const Label = styled.label`
  display: inline-block;
  padding: 0 16px;
  cursor: pointer;
  ${Input}:focus +
      ${ToggleBtn}::after,
    ${ToggleBtn}:active::after {
    /* box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c; */
  }
`;

const noop = () => {};

interface SwitchProps {
  on: boolean;
  "aria-label": string;
  onClick: Function;
}

function Switch({
  on,
  "aria-label": ariaLabel,
  onClick,
  ...props
}: SwitchProps) {
  return (
    <Wrapper>
      <IoSunny />
      <Label aria-label={ariaLabel ?? "Toggle"}>
        <Input type="checkbox" checked={on} onClick={onClick} onChange={noop} />
        <ToggleBtn on={on} {...props} />
      </Label>
      <IoMoon />
    </Wrapper>
  );
}

const ToggleSquare = styled.span`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: ${(props) => props.theme.palette.white};
  cursor: pointer;
  background: ${({ theme }) => theme.palette.secondary[400]};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-right: 16px;
  :hover {
    background: ${({ theme }) => theme.palette.primary[700]};
    opacity: 0.25;
  }
  ${({ on, theme }) =>
    on &&
    `
      background: ${theme.palette.primary[700]};
  `}
  [disabled] {
    opacity: 0.7;
    cursor: auto;
  }
`;

const LabelCheck = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const CheckIcon = styled(IoCheckmark)`
  position: absolute;
  bottom: 0;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 20px;
`;

interface CheckboxProp {
  on: boolean;
  "aria-label": string;
  onClick: Function;
  label: string;
}

function Checkbox({
  on,
  label = "lalala",
  "aria-label": ariaLabel,
  onClick,
  ...props
}: CheckboxProp) {
  return (
    <LabelCheck aria-label={ariaLabel ?? "Toggle"}>
      {on ? <CheckIcon color="white" /> : null}
      <Input type="checkbox" checked={on} onClick={onClick} onChange={noop} />
      <ToggleSquare on={on} {...props} />
      {label}
    </LabelCheck>
  );
}

export { Checkbox, Switch };
