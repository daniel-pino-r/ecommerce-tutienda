
import { Cart } from "../../components/Cart";
import { Header } from "../../components/header/Header";
import { Product } from "../../components/Product";


export const HomePrincipal = () => {
  
  return (
    <>     
      <Header/>
      <div className="content-main">
          <h1 className="main-title-products">Productos destacados</h1>

          <div className="cards">
            <Product />
          </div>

          <Cart />
      </div>
    </>
  );
};
