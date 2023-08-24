import { Pagination, Sidebar } from "..";
import { List } from "../List";
import { Container } from "./Main.styles";

export const Main = () => {
  return (
    <>
      <Container>
        <div className="main-content">
          <Sidebar />
          <div className="main-list">
            <Pagination />
            <List />
          </div>
        </div>
      </Container>
    </>
  );
};
