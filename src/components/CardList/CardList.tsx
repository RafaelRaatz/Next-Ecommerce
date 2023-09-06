"use client";
import Image from "next/image";
import { useState } from "react";
import { wines } from "../List/list.const";
import image from "../../../public/wine.jpeg";
import { useProductStore } from "@/store/Product";
import { CardContainer, Container } from "./CardList.styles";

interface ICard {
  id: number;
  title: string;
  discont: number;
  promotion: number;
  price: number;
}

interface IShoppingCard {
  product: ICard;
  quantity: number;
}

export const CardList = ({ title, discont, promotion, price, id }: ICard) => {
  const [shoopingCart, setShoopingCart] = useState<IShoppingCard[]>([]);
  const updateProduct = useProductStore((state) => state.updateProduct);

  console.log(shoopingCart);

  const handleAddToCart = (id: number) => {
    const wine = wines.find((wine: any) => wine.id === id);
    const alreadyInShoopingCart = shoopingCart.find(
      (item) => item.product.id === id
    );

    // if product is already in the shooping cart

    if (alreadyInShoopingCart) {
      const newShoopingCart: IShoppingCard[] = shoopingCart.map((item) => {
        ({
          ...item,
          quantity: item.quantity ++,
        });
        return item;
      });
      setShoopingCart(newShoopingCart);

      return;
    }

    // if product is not already in the shooping cart

    const cartItem: IShoppingCard = {
      product: wine!,
      quantity: 1,
    };
    const newShoopingCart: IShoppingCard[] = [...shoopingCart, cartItem];

    setShoopingCart(newShoopingCart);
   
  };

  updateProduct(shoopingCart);

  return (
    <Container>
      <CardContainer>
        <div className="card-content">
          <Image src={image} alt="olá" width={150} height={130} />

          <div className="title">
            <h2>{title}</h2>
          </div>

          <div className="wine-info">
            <div>
              <span className="discount">R${discont}</span>
              <span className="percentage">60% OFF</span>
            </div>
            <div className="promotion-price">
              <span>Sócio Wine</span>
              <span className="price"> R${promotion}</span>
            </div>
            <span className="original-price">Não sócio R${price}</span>
          </div>
        </div>
      </CardContainer>
      <button onClick={() => handleAddToCart(id)}>Adicionar</button>
    </Container>
  );
};
