import { Container } from "./Sidebar.styles";

export const Sidebar = () => {
  return (
    <Container>
      <div className="content">
        <h2>Refine sua busca</h2>

        <div className="inputs">
          <span>Por preço:</span>
          <label>
            <input type="radio" name="value" /> Até R$40
          </label>
          <label>
            <input type="radio" name="value" /> R$40 a R$60
          </label>
          <label>
            <input type="radio" name="value" /> R$100 a R$200
          </label>
          <label>
            <input type="radio" name="value" /> R$200 a R$500
          </label>
          <label>
            <input type="radio" name="value" /> Acima de R$500
          </label>
        </div>
      </div>
    </Container>
  );
};
