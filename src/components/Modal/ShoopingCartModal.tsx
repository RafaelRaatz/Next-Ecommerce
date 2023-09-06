"use client";
import { useProductStore } from "@/store/Product";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container } from "./ShoopingCartModal.styles";
import { CardShooping } from "../CardShooping/CardShooping";

export function ShoopingCartModal({ isOpen, setModalOpen }: any) {
  const product = useProductStore((state) => state.product);

  if (isOpen) {
    return (
      <Container>
        <div className="content">
          <div className="header-content">
            <div className="return">
              <button className="close" onClick={setModalOpen}>
                <AiOutlineArrowLeft className="close-icon" />
              </button>
              <span>WineBox</span>
            </div>

            {product.map((item: any, key: any) => (
              <CardShooping
                key={key}
                title={item.product.title}
                quantity={item.quantity}
                value={item.product.promotion}
              />
            ))}
          </div>
          <div className="finish">
            <button>Finalizar Compra</button>
          </div>
        </div>
      </Container>
    );
  }
}
