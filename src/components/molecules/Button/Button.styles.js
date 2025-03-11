import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? $gap : "5px")};
  padding: 12px 15px;
  border-radius: ${({ $rounded }) => ($rounded ? "60px" : "8px")};
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  width: ${({ $width }) => ($width ? $width : "140px")};
  min-width: 140px;
  background: var(--primary);
  color: var(--white);
  transition: 0.5s all ease-in-out;
  overflow: hidden;
  cursor: pointer;
  font-family: inherit;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }

  ${({ $loader, disabled }) =>
    $loader ||
    (disabled &&
      css`
        cursor: not-allowed;
      `)}

  ${({ $lg }) =>
    $lg &&
    css`
      width: ${({ $width }) => ($width ? $width : "200px")};
      padding: 15px;
    `}

  @media screen and (max-width:786px) {
    padding: 8px 15px;
  }
  /***** Background-Variants-Start *****/

  ${({ $variant }) =>
    ($variant == "primary" &&
      css`
        border: none;
        background: var(--primary);
        color: var(--white);
        border-radius: 5px;
      `) ||
    ($variant == "outline" &&
      css`
        background: transparent;
        border: 1px solid white;
        border-radius: 5px;
        color: white;
        transition: all 0.3s ease-in-out;
        box-shadow: none;
        &:hover {
          background: var(--primary);
          color: var(--white);
        }
      `)}

  /*****************Background Variants End*********************/


  /*****************Border Variants Start*********************/

  ${({ $outline }) =>
    $outline &&
    css`
      border: 1px solid var(--blue);
      background: transparent;
      color: var(--blue);
    `}
  /*****************Border Variants End*********************/

    .loader {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 70px;
    height: 300px;
    background: rgba(255, 255, 255, 0.7);
    transform: rotate(-35deg);
    top: -100px;
    left: -100%;
    ${({ $delayAnimation }) =>
      $delayAnimation
        ? css`
            transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
          `
        : css`
            transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
          `}
    opacity: 0;
  }
  &:hover {
    box-shadow: 0px 4px 3px 0px #ffffff45 inset,
      0px -3px 5px 0px #ffffff40 inset;

    box-shadow: 0px 1px 14px 0px #1fabd300;
    &:before {
      left: 150%;
      opacity: 0.4;
    }
  }
`;
