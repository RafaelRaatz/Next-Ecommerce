"use client";
import { useProductStore } from "@/store/Product";
import { CardList } from "../CardList";
import { Container } from "./List.styles";
import { wines } from "./list.const";
import { useEffect, useState } from "react";

export const List = () => {
  const values = useProductStore((state) => state.values);
  const [winesFiltered, setWinesFiltered] = useState<any[]>([]);

  useEffect(() => {
    if (values === "") {
      setWinesFiltered(wines);
      return;
    }

    if (values === "40") {
      const filtered = wines.filter((wine) => wine.promotion <= 40);
      return setWinesFiltered(filtered);
    }

    if (values === "60") {
      const filtered = wines.filter((wine) => wine.promotion <= 60 && wine.promotion >= 40);
      return setWinesFiltered(filtered);
    }
    if (values === "100") {
      const filtered = wines.filter((wine) => wine.promotion <= 200 && wine.promotion >= 100);
      return setWinesFiltered(filtered);
    }
    if (values === "200") {
      const filtered = wines.filter((wine) => wine.promotion <= 500 && wine.promotion >= 200);
      return setWinesFiltered(filtered);
    }
    if (values === "500") {
      const filtered = wines.filter((wine) => wine.promotion >= 500);
      return setWinesFiltered(filtered);
    }
  }, [values, wines]);

  return (
    <Container>
      <div className="list">
        {winesFiltered.map((wine: any, key: any) => (
          <CardList
            key={key}
            id={wine.id}
            title={wine.title}
            discont={wine.discont}
            promotion={wine.promotion}
            price={wine.price}
          />
        ))}
      </div>
    </Container>
  );
};
