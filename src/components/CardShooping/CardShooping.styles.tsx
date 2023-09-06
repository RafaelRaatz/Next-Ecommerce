import styled from "styled-components";

export const Container = styled.main`
  .product {
    display: flex;
    border-bottom: 1px solid #8888;
    align-items: center;
    height: 100px;

    .description {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 180px;

      .header-description {
        display: flex;
        justify-content: space-between;

        .title {
          width: 160px;
          font-size: 12px;
        }

        .remove {
          border-radius: 100%;
          border: 1px solid #8888;
          width: 20px;
          height: 20px;
          color: #8888;
          cursor: pointer;
        }
      }

      .footer-description {
        display: flex;
        justify-content: space-between;

        .price {
          font-size: 18px;
          color: #b6116e;
          font-weight: bold;
        }
      }
    }
  }
`;
