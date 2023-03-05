import { useState, useContext, useEffect } from "react";


import { UserContext } from "../context/UserContext";
import { actionsCart } from "../hooks/actionsCart";
import { convertirPrecio } from "../hooks/convertirP";

export const Cart = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const { cart, total } = useContext(UserContext);
    const { handleRemoveItem, totalPrice, totalQuantity } = actionsCart();

    useEffect(() => {
        totalPrice();
    });

  return (
    <div className="cart">

        <div onClick={() => setCartOpen(!cartOpen)}>
          <h2>{ totalQuantity() }</h2>
          <img src="../imgs/icons/carrito-de-compras.png" alt="cart" />
        </div>

        <div className={`cart_shop ${cartOpen ? "open" : "close"}`}>
          <ul>
            {cart.length === 0 ? (
              <h3>No hay objetos en la lista</h3>
            ) : (
              <ul>
                <h2>Productos</h2>
                {cart.map((product) => (
                  <li key={product.id}>
                    <h3>{product.nombre}</h3>
                    <h4>{product.quantity}</h4>
                    <button
                      className="btn-remover-producto"
                      onClick={() => handleRemoveItem(product)}
                    >
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <h2>TOTAL: {convertirPrecio(total)} </h2>
          </ul>
        </div>
        
      </div>
  )
}
