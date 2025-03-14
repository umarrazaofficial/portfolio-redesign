import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px 0;
  .logo {
    width: 100%;
    max-width: 200px;
    @media (max-width: 799px) {
      max-width: 150px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .list-wrap {
    display: flex;
    gap: 40px;
    list-style: none;
    @media (max-width: 799px) {
      display: none;
    }
    li {
      cursor: pointer;
      text-transform: capitalize;
      font-size: 18px;
      line-height: 22px;
      font-weight: 400;
      color: var(--white-70);
      transition: all 0.3s ease-in-out;
      @media screen and (max-width: 1440px) {
        font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
        line-height: calc(18px + (22 - 18) * (100vw - 390px) / (1440 - 390));
      }
      &:hover {
        color: var(--primary);
      }
    }
  }
  .btn {
    @media (max-width: 799px) {
      display: none;
    }
  }
  .menuIcon {
    cursor: pointer;
    margin-right: 20px;
    @media (min-width: 800px) {
      display: none;
    }
  }

  .sideBar {
    padding: 20px;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #19191b;
    position: fixed;
    inset: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
    transform: translateX(-100%);
    visibility: hidden;
    @media (min-width: 800px) {
      display: none;
    }
    .sm-list-wrap {
      display: flex;
      flex-direction: column;
      gap: 40px;
      list-style: none;
      margin-bottom: 80px;
      li {
        cursor: pointer;
        text-transform: capitalize;
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
        color: var(--white-70);
        transition: all 0.3s ease-in-out;
        @media screen and (max-width: 1440px) {
          font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
          line-height: calc(18px + (22 - 18) * (100vw - 390px) / (1440 - 390));
        }
        &:hover {
          color: var(--primary);
        }
      }
    }
    .closeIcon {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-bottom: 20px;
    }
    .sm-btn {
      margin: 0 auto;
    }
  }
  .sideBar-active {
    transform: translateX(0%);
    transition: all 0.5s ease-in-out;
    visibility: visible;
  }
`;
