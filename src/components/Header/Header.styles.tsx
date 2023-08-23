"use client";
import styled from "styled-components";

export const Container = styled.header`
  height: 70px;
  border-bottom: 2px solid #c0c0c0;

  .header-content {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    

    .header-list {
      display: flex;     
      gap: 70px;
      

      .header-buttons {
        display: flex;
        gap: 50px;
        align-items: center;
        

        button {
          border: none;
          font-size: 16px;
          background-color: #fff;
          color: #555555;
        }
      }
    }

    .header-menu{
        display: flex;
        gap: 30px;

        .icons{
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #555555;
            width: 50px;;
            height: 50px;
            border-radius: 100%;

            .icon-person{
                width: 40px;
                height: 45px;
                color: #555555;
            }

            .icon-search{
                width: 40px;
                height: 25px;
                color: #555555;
            }
        }
    }
  }
`;
