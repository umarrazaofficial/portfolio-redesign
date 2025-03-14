import styled from "styled-components";

export const StyledMyEducation = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;
  h2 {
    text-align: center;
    font-size: 58px;
    line-height: 62px;
    font-weight: 500;
    margin-bottom: 80px;
    @media screen and (max-width: 1440px) {
      font-size: calc(40px + (58 - 40) * (100vw - 390px) / (1440 - 390));
      line-height: calc(44px + (62 - 44) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(40px + (80 - 40) * (100vw - 390px) / (1440 - 390));
    }
  }
  .education-wrap {
    position: relative;
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
      &::before {
        content: "";
        position: absolute;
        height: 40%;
        top: 50px;
        /* bottom: 230px; */
        left: 50%;
        border-right: 2px dashed var(--white);
      }
    }
  }
  .education {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }
    .col {
      grid-column: span 2 / span 2;
    }
    h4 {
      font-size: 40px;
      line-height: 44px;
      font-weight: 500;
      margin-bottom: 14px;
      @media screen and (max-width: 1440px) {
        font-size: calc(24px + (40 - 24) * (100vw - 390px) / (1440 - 390));
        line-height: calc(28px + (44 - 28) * (100vw - 390px) / (1440 - 390));
      }
    }
    .time {
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
      color: var(--white-70);
      @media screen and (max-width: 1440px) {
        font-size: calc(20px + (24 - 20) * (100vw - 390px) / (1440 - 390));
        line-height: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
      }
    }
    .desc {
      font-size: 20px;
      line-height: 30px;
      font-weight: 400;
      color: var(--white-70);
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
        line-height: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
      }
    }
    .circle {
      width: 40px;
      height: 40px;
      background-color: #1d1b1b;
      border: 2px dashed var(--white);
      position: relative;
      border-radius: 50%;
      flex-shrink: 0;
      margin: 0 auto;
      @media (min-width: 768px) {
        width: 50px;
        height: 50px;
      }
      &::before {
        content: "";
        width: 28px;
        height: 28px;
        background-color: var(--primary);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        @media (min-width: 768px) {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
`;
