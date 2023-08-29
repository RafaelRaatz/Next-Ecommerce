"use client";
import { CardContainer, Container } from "./CardList.styles";
import image from "../../../public/wine.jpeg";
import Image from "next/image";

export const CardList = () => {
  return (
    <Container>
      <CardContainer>
        <div className="card-content">
          <Image src={image} alt="olá" width={150} height={130} />

          <h2>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h2>

          <div className="wine-info">
            <div>
              <span className="discount">R$ 37,40</span>
              <span className="percentage">60% OFF</span>
            </div>
            <div className="promotion-price">
              <span>Sócio Wine</span>
              <span className="price"> R$30,00</span>
            </div>
            <span className="original-price">Não sócio R$37,40</span>
          </div>
        </div>
      </CardContainer>
      <button>Adicionar</button>
    </Container>
  );
};
