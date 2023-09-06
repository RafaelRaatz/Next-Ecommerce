import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    width: 256px;
    height: 40px;
    background-color: #7ebc43;
    color: #fff;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 310px;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #e5e5e5;

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .title {
      display: flex;
      text-align: center;
      
    }

    h2 {
      font-size: 14px;
      width: 232px;
    }

    .wine-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .discount {
        font-size: 12px;
        color: #808080;
        text-decoration: line-through;
      }

      .percentage {
        font-size: 12px;
        background-color: #cd853f;
        padding: 2px;
        border-radius: 2px;
        margin-left: 10px;
        color: #fff;
      }

      .promotion-price {
        font-size: 14px;

        .price {
          font-size: 18px;
          color: #b6116e;
          font-weight: bold;
        }
      }

      .original-price {
        font-size: 14px;
        color: #808080;
      }
    }
  }
`;
