"use client";
import styled from "styled-components";

export const Container = styled.header`
  width: 1140px;
  margin: 0 auto;

  .back-to-page {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .item {
    margin-top: 10px;
    display: flex;
    gap: 40px;

    .description {
      display: flex;
      flex-direction: column;
      gap: 60px;

      .title-description {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #c81a78;
          font-weight: bold;

          .local {
            color: #808080;
          }
        }

        .category {
          display: flex;
          gap: 10px;
          align-items: center;

          span {
            font-size: 14px;
            color: #555555;
          }
          .flag {
            border-radius: 100%;
          }

          .star {
            color: #ffd700;
          }
        }
      }

      .price-description {
        h2 {
          color: #c81a78;
          font-size: 32px;
        }
        span {
          color: #888888;
          font-weight: bold;
        }
      }

      .comment {
        display: flex;
        flex-direction: column;
        gap: 15px;

        p {
          font-size: 14px;
          color: #555555;
        }
      }

      button {
        width: 200px;
        height: 40px;
        background-color: #7ebc43;
        color: #fff;
        border-radius: 5px;
        border: none;
        margin-bottom: 10px;
        font-size: 18px;
      }
    }
  }
`;
