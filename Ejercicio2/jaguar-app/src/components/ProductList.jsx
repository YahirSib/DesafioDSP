import React from "react";
import {data} from "../data";
export const ProductoList=({
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
})=>{
    const onAddProduct = product =>{
        if(allProducts.find(item => item.id === product.id)){
            const products = allProducts.map( item =>
                item.id === product.id ? {...item, quantity: item.quantity + 1}
                : item
            );
            setTotal(total + product.precio * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products])
        }
        setTotal(total + product.precio * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product])
    }
    return(
        <div className="container-items">
            {
                data.map(product=>(
                    <div className="item" key={product.id}>
                        <figure className="imagen-carta">
                            <img src={product.urlImage} alt={product.producto} />
                        </figure>
                        <div className="info-product">
                            <h2>{product.producto}</h2>
                            <h3>{product.tipo}</h3>
                            <p className="descripcion-producto">{product.descripcion}</p>
                            <p className="price">${product.precio}</p>
                            <button onClick={()=>onAddProduct(product)} className="btn-add-cart">Añadir al carrito</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}