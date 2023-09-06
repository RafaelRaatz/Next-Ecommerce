import { useProductStore } from "@/store/Product";
import { Container } from "./Sidebar.styles";
import { ChangeEvent } from "react";

export const Sidebar = () => {
  const updateValue = useProductStore((state) => state.updateValue);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
  };
  return (
    <Container>
      <div className="content">
        <h2>Refine sua busca</h2>

        <div className="inputs">
          <span>Por preço:</span>
          <label>
            <input
              onChange={(e) => handleFilter(e)}
              type="radio"
              name="value"
              value=""
            />{" "}
            Todos
          </label>
          <label>
            <input
              onChange={(e) => handleFilter(e)}
              type="radio"
              name="value"
              value="40"
            />{" "}
            Até R$40
          </label>
          <label>
            <input
              onChange={(e) => handleFilter(e)}
              type="radio"
              name="value"
              value="60"
            />{" "}
            R$40 a R$60
          </label>
          <label>
            <input
              onChange={(e) => handleFilter(e)}
              type="radio"
              name="value"
              value="100"
            />{" "}
            R$100 a R$200
          </label>
          <label>
            <input
              onChange={(e) => handleFilter(e)}
              type="radio"
              name="value"
              value="200"
            />{" "}
            R$200 a R$500
          </label>
          <label>
            <input
              onChange={(e) => handleFilter(e)}
              type="radio"
              name="value"
              value="500"
            />{" "}
            Acima de R$500
          </label>
        </div>
      </div>
    </Container>
  );
};
