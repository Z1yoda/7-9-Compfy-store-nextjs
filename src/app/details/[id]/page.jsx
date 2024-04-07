'use client'
import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useFetch } from '@/hooks/useFetch';
import { PuffLoader } from 'react-spinners';

function Details() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState(null);
    const [count, setCount] = useState("");
    const [color, setColor] = useState("");
    const [active, setActive] = useState(0);
    const { data, loading, error } = useFetch(
        "https://strapi-store-server.onrender.com/api/products"
    );



    useEffect(() => {
        if (data.length > 0 && !error) {
            setProducts(data);
            const foundProduct = data.find((product) => product.id == id);
            setFilteredProduct(foundProduct);
        }
    }, [data]);

    function getData() {
        let data = []

        if (localStorage.getItem('products')) {
            data = JSON.parse(localStorage.getItem('products'))
        }

        return data
    }

    function handleClick(productId) {
        const cartProduct = products.find((product) => product.id === productId);

        const amount = count ? count : 1;

        const cartedProduct = {
            amount: amount,
            company: cartProduct.attributes.company,
            image: cartProduct.attributes.image,
            price: cartProduct.attributes.price,
            productColor: color,
            id: cartProduct.id,
            title: cartProduct.attributes.title,
        };

        let existingProducts = getData();

        if (existingProducts.length > 0) {
            let exist = existingProducts.find((el) => {
                return el.id === cartedProduct.id && el.productColor === cartedProduct.productColor;
            });

            if (exist) {
                existingProducts = existingProducts.map((el) => {
                    if (el.id === cartedProduct.id && el.productColor === cartedProduct.productColor) {
                        el.amount = Number(el.amount);
                        el.amount += +cartedProduct.amount;
                    }
                    return el;
                });
            } else {
                existingProducts.push(cartedProduct);
            }

            localStorage.setItem('products', JSON.stringify(existingProducts));
        } else {
            existingProducts.push(cartedProduct);
            localStorage.setItem('products', JSON.stringify(existingProducts));
        }

        alert("Successfully saved")
    }

    function handleChangeColor(color, index) {
        setColor(color);
        setActive(index)
    }



    return (
        <div>
            {loading ? (
                <div className={styles.loader}>
                    <PuffLoader color="#fff" />
                </div>
            ) : (
                <>
                    <div className={styles.linkToback}>
                        <Link href={"/"}>
                            <p>Home</p>
                        </Link>
                        <span style={{ color: "white", opacity: "0.5" }}>{">"}</span>
                        <Link href={"/products"}>
                            <p>Products</p>
                        </Link>
                    </div>
                    {filteredProduct && (
                        <div className={styles.carddWrapper}>
                            <div key={filteredProduct.id} className={styles.cardd}>
                                <img
                                    src={filteredProduct.attributes.image}
                                    alt={filteredProduct.attributes.title}
                                />
                                <div className={styles.carddRight}>
                                    <h1>{filteredProduct.attributes.title}</h1>
                                    <h4>{filteredProduct.attributes.company}</h4>
                                    <p>${filteredProduct.attributes.price}</p>
                                    <h5>{filteredProduct.attributes.description}</h5>
                                    <div className={styles.colors}>
                                        <h3>Colors</h3>
                                        <div className={styles.circles}>
                                            {filteredProduct.attributes.colors.map((color, index) => (
                                                <button
                                                    onClick={() => handleChangeColor(color, index)}
                                                    key={index}
                                                    className={styles.colorBtn}
                                                    style={{ cursor: "pointer", border: index == active ? "1.6px solid #bf95f9" : "none", backgroundColor: color }}
                                                ></button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.formControl}>
                                        <label className={styles.amount} htmlFor="amount">
                                            <h6>Amount</h6>
                                        </label>
                                        <select
                                            className={styles.select}
                                            id="amount"
                                            value={count}
                                            onChange={(e) => { setCount(e.target.value) }}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <button
                                        onClick={() => handleClick(filteredProduct.id)}
                                        className={styles.btn} disabled={count <= 0 && !color ? true : false}
                                    >
                                        ADD TO BAG
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Details