import { Container } from "./Product.styles";
import image from "../../../public/wine.jpeg";
import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export const Product = () => {
  return (
    <Container>
      <div className="back-to-page">
        <AiOutlineLeft />
        <span className=""> Voltar</span>
      </div>

      <div className="item">
        <Image src={image} alt="olá" width={640} height={580} />
        <div className="description">
          <div className="title-description">
            <div className="breadcrumb">
              <span>Vinhos</span> <AiOutlineRight />
              <span>Estados Unidos</span> <AiOutlineRight />
              <span className="category">California</span>
            </div>
            <h2>Apothic Red 2019</h2>
            <div>
              <span>estados unidos</span>
              <span>tinto</span>
              <span>meio seco/demi-sec</span>
              <span>750ml</span>
              star
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
