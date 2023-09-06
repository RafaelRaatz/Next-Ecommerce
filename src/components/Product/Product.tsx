"use client"
import { Container } from "./Product.styles";
import image from "../../../public/wine.jpeg";
import Image from "next/image";
import usa from "../../../public/usa.webp";
import { AiOutlineRight, AiOutlineLeft, AiFillStar } from "react-icons/ai";

export const Product = () => {
  function randomNumber(min: any, max: any) {
    return Math.floor(Math.random() * (max - min) + min);
  }
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
              <span className="local">California</span>
            </div>
            <h2>Apothic Red 2019</h2>
            <div className="category">
              <Image
                src={usa}
                alt="olá"
                width={20}
                height={15}
                className="flag"
              />
              <span>Estados Unidos</span>
              <span>Tinto</span>
              <span>Meio Seco/Demi-Sec</span>
              <span>750ml</span>
              <div className="star">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>

          <div className="price-description">
            <h2>R${randomNumber(90, 20)}</h2>
            <span>Não Sócio R$120,95/UN.</span>
          </div>

          <div className="comment">
            <h4>Comentário do Sommelier</h4>

            <p>
              Produzido no terroir californiano, esse tinto mescla as variedades
              Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
              inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
              misterioso onde há mais de 800 anos os viticultores misturavam e
              armazenavam seus cobiçados vinhos.
            </p>
          </div>

          <button>Adicionar</button>
        </div>
      </div>
    </Container>
  );
};
