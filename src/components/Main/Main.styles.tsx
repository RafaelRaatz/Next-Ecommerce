import styled from "styled-components";

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1140px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .main-content {
    display: flex;
    margin-top: 30px;
    gap: 15px;

    .main-list {
      display: flex;
      flex-direction: column;
    }
  }
`;
