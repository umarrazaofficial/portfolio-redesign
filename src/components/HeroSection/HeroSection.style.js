import styled from "styled-components";

export const StyledHeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  padding: 40px 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    .col-2 {
      align-self: flex-end;
    }
  }

  .col-2 {
    flex-shrink: 0;
  }
  h2 {
    font-size: 70px;
    line-height: 74px;
    font-weight: 600;
    margin-bottom: 12px;
    @media screen and (max-width: 1440px) {
      font-size: calc(40px + (70 - 40) * (100vw - 390px) / (1440 - 390));
      line-height: calc(44px + (74 - 44) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-size: 20px;
    line-height: 30px;
    font-weight: 300;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  .title {
    font-size: 58px;
    line-height: 62px;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(40px + (58 - 40) * (100vw - 390px) / (1440 - 390));
      line-height: calc(44px + (62 - 44) * (100vw - 390px) / (1440 - 390));
    }
  }
  .banner {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;
