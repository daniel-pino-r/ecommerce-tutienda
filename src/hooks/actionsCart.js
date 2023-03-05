import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export const actionsCart = () => {

  const { cart, setCart, setTotal } = useContext(UserContext);

  const handleAddItem = (item) => { //AGREGAR PRODUCTO AL CARRITO
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      const newCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...item, quantity: 1 }];
      setCart(newCart);
    }
  }

  const handleRemoveItem = (product) => { //REMOVER PRODUCTO DE CARRITO
    const existingProduct = cart.find((i) => i.id === product.id);
    if (existingProduct) {
      const newCart = cart.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity - 1 } : i
      );
      setCart(newCart.filter((i) => i.quantity > 0));
    }
  }

  const totalPrice = () => { //PRECIO TOTAL DE PRODUCTOS EN EL CARRITO
    let totalP = 0;
    if (cart.length === 0) {
      setTotal(0);
    } else {
      cart.map(producto => {
        setTotal(totalP += producto.price * producto.quantity);
      });
    }
  }

  const totalQuantity = () => { //CALCULA EL TOTAL DE PRODUCTOS EN EL CARRITO
    let totalQ = 0;
    cart.map(producto => {
      totalQ = totalQ + producto.quantity;
    });
    return totalQ;
  }

  return {
    handleRemoveItem,
    totalPrice,
    totalQuantity,
    handleAddItem
  }

}