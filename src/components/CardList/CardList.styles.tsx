import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 20px;


button{
  width: 256px;
  height: 40px;
  background-color: #7ebc43;
  color: #fff;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  font-size: 18px;

}
`

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

    h2 {
      display: flex;
      text-align: center;
      font-size: 14px;
      width: 232px;
    }

    .wine-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .discount{
        font-size: 12px;
        color: #808080;
        text-decoration: line-through
      }

      .promotion-price{
        font-size: 14px;
      }

      .original-price {
        font-size: 14px;
        color: #808080;
      }
    }
  }
`;
