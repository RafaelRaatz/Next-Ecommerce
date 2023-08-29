"use client";
import styled from "styled-components";

export const Container = styled.header`
  width: 1140px;
  margin: 0 auto;
  

  .back-to-page{
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  
  .item{
    margin-top:10px;
    display: flex;
    gap: 40px;

    .description{
      display: flex;
      flex-direction: column;
      gap: 20px;

      .title-description{
        display: flex;
        flex-direction: column;
        gap: 10px;

        .breadcrumb{
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #C81A78;
          font-weight: bold;

          .category{
            color: #808080;
          }

        }
      }
    }
  }

`;
