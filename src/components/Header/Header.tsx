"use client";
import Image from "next/image";
import { Container } from "./Header.styles";
import logo from "../../../public/wine.png";
import shop from "../../../public/Bitmap.png";
import { BsSearch, BsPerson } from "react-icons/bs";
import { ShoopingCartModal } from "../Modal/ShoopingCartModal";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <div className="header-content">
        <div className="header-list">
          <Image
            src={logo}
            width={110}
            height={45}
            alt="Picture of the author"
          />

          <div className="header-buttons">
            <button>Clube</button>
            <button>Loja</button>
            <button>Produtores</button>
            <button>Ofertas</button>
            <button>Eventos</button>
          </div>
        </div>

        <div className="header-menu">
          <div className="icons">
            <BsSearch className="icon-search" />
          </div>
          <div className="icons">
            <BsPerson className="icon-person" />
          </div>
          <div className="icons">
            <ShoopingCartModal
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
            />

            <button type="button" onClick={() => setOpenModal(true)}>
              <Image
                src={shop}
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </button>
          </div>
          <div className="logout"></div>
        </div>
      </div>
    </Container>
  );
};
