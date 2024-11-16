import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 272px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 15px;
      font-size: 16px;

      span {
        font-weight: bold;
      }

      input {
        margin-right: 10px;
        width: 20px;
        height: 25px;
        vertical-align: middle;
      }
    }
  }
`;
