import React, { useState } from "react";

export const Headers=({
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
})=>{

    const [active, setActive] = useState(false);
    const [value, setValue] = useState(0)

    const onChangeCantidad = (product, cant) =>{
        if(allProducts.find(productos => productos.id === product.id)){
                if(product.quantity < cant){
                    const products = allProducts.map(item =>
                        item.id === product.id ? {...item, quantity: product.quantity + 1}
                        :item
                        );
                    setTotal(total + product.precio );
                    setCountProducts(countProducts + 1);
                    return setAllProducts([...products])
                }else{
                    product.quantity = product.quantity - 1;
                    if(product.quantity === 0){
                        const results = allProducts.filter(
                            item => item.id !== product.id  
                        );
                        setTotal(total - product.precio);
                        setCountProducts(countProducts - 1);
                        return setAllProducts(results);
                    }else{
                        const products = allProducts.map(item =>
                            item.id === product.id ? {...item, quantity: product.quantity}
                            :item
                            );
                        
                        setTotal(total - product.precio);
                        setCountProducts(countProducts - 1);
                        return setAllProducts([...products])
                    }
                }  
        }
        setTotal(total + product.precio * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product])
    };
    
    const onDeleteProduct = product =>{
        const results = allProducts.filter(
            item => item.id !== product.id  
        );

        setTotal(total - product.precio * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onCleanCart = () =>{
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return(
        <header className="encabezado">
            <h1>Tienda de Jaguar Sport</h1>
            <div className="container-icon">
                <div className="container-cart-icon" onClick={() => setActive(!active)}>
                    <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png" 
                    alt="carrito" className="icon-cart" />
                    <div className="count-products">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>
                <div className={`container-cart-products ${active ? '': 'hidden-cart'}`}>
                    {allProducts.length ? (
                        <>
                            <div className="row-product">
                                {allProducts.map(product => (
                                    <div className="cart-product" key={product.id}>   
                                        <div className="info-cart-product">
                                            <div className="img-cart-product">
                                                <img src={product.urlImage} alt="imagenProducto" />
                                            </div>
                                            <p className="titulo-producto-carrito">{product.producto}</p>
                                            <span className="precio-producto-carrito">${product.precio}</span>
                                        </div>
                                        <div className="icons-cart-close">
                                            <input type="number" name="cantidad" value={product.quantity} className="input-cantidad" onChange={e => onChangeCantidad(product, e.target.value)} />
                                            <img
                                            src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                                            alt="cerrar"
                                            className="icon-close"
                                            onClick={() => onDeleteProduct(product)}
                                            />
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                            <div className="cart-total">
                                <h3>Total:</h3>
                                <span className="total-pagar">${total}</span>
                            </div>
                            <button className="btn-clear-all" onClick={onCleanCart}>Vaciar Carrito</button>
                        </>
                    ) : (
                        <p className="cart-empty">El carrito esta vacio</p>
                    )

                    }
                </div>
            </div>
        </header>
    )
}