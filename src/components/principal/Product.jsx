import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { convertirPrecio } from "../hooks/convertirP";
import productosJson from "./productos.json";


export const Product = () => {

  let productos = productosJson; //ACTUALIZADO
  const { cart, setCart } = useContext( UserContext );


  const handleAddItem = (item) => {
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
  
  return (

    <>
        {productos.map(producto =>
            <div className="card" key={producto.id}>
                <figure>
                  <img src={producto.img} alt="producto" />
                </figure>

                <section className="details">
                    <div className="min-details">
                      <h1>{producto.nombre}</h1>  
                      <h1 className="price"> {convertirPrecio(producto.price)}</h1>
                    </div>

                    <div className="options">

                        <div className="options-size">
                          <h1>sizes</h1>
                          <ul>
                            <li>xs</li>
                            <li>s</li>
                            <li>m</li>
                            <li>l</li>
                            <li>xl</li>
                          </ul>
                        </div>

                        <div className="options-colors">
                          <h1>colors</h1>
                          <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>           
                    </div>

                    <button className="btn" onClick={ () => handleAddItem(producto) }>add to cart</button>           
                </section>
            </div>
        )}
    </>

  );
};
