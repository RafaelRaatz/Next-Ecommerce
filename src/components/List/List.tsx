"use client";
import { CardList } from "../CardList";
import { Container } from "./List.styles";

export const List = () => {
  return (
    <Container>
      <div className="list">
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </div>
      <div className="show-more">
        <button className="list-button">Mostrar mais</button>
      </div>
    </Container>
  );
};
