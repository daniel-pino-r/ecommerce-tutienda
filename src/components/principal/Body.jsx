import { Cart } from "../Cart";
import { Product } from "./Product";

export const Body = () => {
  return (
    <div className="content-main">
      <h1 className="main-title-products">Productos destacados</h1>

      <div className="cards">
        <Product />
      </div>

      <Cart />
    </div>
  );
};
