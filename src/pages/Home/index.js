import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList } from './styles';


function Home() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('products');
            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }))

            setProducts(data);
        }

        fetchData();
    }, []);

    function handleAddProduct(product) {
        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };


    return (
        <ProductList>
            {products.map(product => (

                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button type="button" onClick={() => handleAddProduct(product)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />  3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}

        </ProductList>
    )
}

export default Home;
