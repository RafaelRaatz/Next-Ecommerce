import styled from "styled-components";

export const Container = styled.main`
  position: fixed;
  background: #fff;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  border-radius: 10px;
  border-left: 1px solid #8888;
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 250px;
    }
  }

  .content {
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 25px;
    height: 100%;
    justify-content: space-between;

    .header-content {
      display: flex;
      flex-direction: column;

      .return {
        display: flex;
        gap: 10px;
        width: 500px;

        .close {
          display: flex;
          background: none;
          border: none;
          align-items: center;
          cursor: pointer;

          .close-icon {
            width: 20px;
            height: 20px;
          }
        }

        span {
          font-size: 18px;
        }
      }

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
    }

    .finish {
      display: flex;
      justify-content: center;

      button {
        width: 240px;
        height: 40px;
        background-color: #7ebc43;
        color: #fff;
        border-radius: 5px;
        border: none;
        margin-bottom: 10px;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
`;
