"use client";
import { Container } from "./CardShooping.styles";
import Image from "next/image";
import image from "../../../public/wine.jpeg";

interface ICard {
  title: string;
  quantity: number;
  value: number;
}

export const CardShooping = ({ title, quantity, value }: ICard) => {
  return (
    <Container>
      <div className="product">
        <Image src={image} alt="Wine" width={90} height={70} />
        <div className="description">
          <div className="header-description">
            <span className="title">{title}</span>
            <button className="remove">X</button>
          </div>
          <div className="footer-description">
            <span className="quantity">- {quantity} +</span>
            <span className="price">R${value * quantity}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
