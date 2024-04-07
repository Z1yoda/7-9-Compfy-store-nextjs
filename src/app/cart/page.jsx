'use client'

import React from 'react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image';

function Cart() {
    const [cartedItems, setCartedItems] = useState([]);
    const [isEmpty, setIsEmpty] = useState(null);
    const [selectValue, setSelectValue] = useState();

    useEffect(() => {
        const existingCartItems =
            JSON.parse(localStorage.getItem("products")) || [];

        if (existingCartItems.length > 0) {
            setCartedItems(existingCartItems);
        } else {
            setIsEmpty("Your Cart Is Empty");
        }
    }, []);

    function handleRemove(ItemId) {
        const isDelete = confirm('Are you sure?')

        if (isDelete) {
            const existingCartItems =
                JSON.parse(localStorage.getItem("products")) || [];
            const updatedCartItems = existingCartItems.filter(
                (item) => item.id !== ItemId
            );

            localStorage.setItem("products", JSON.stringify(updatedCartItems));
            setCartedItems(updatedCartItems);

            if (updatedCartItems.length === 0) {
                setIsEmpty("Your Cart Is Empty");
            }
        }

    }


    return (
        <div>
            <div className={`${styles.emptyCard} ${styles.featured}`}>
                <h1>{isEmpty ? isEmpty : "Shopping Cart"}</h1>
            </div>
            <div className={styles.cartCardWrapper}>
                {cartedItems.map((item) => (
                    <div key={item.id} className={styles.cartCard}>
                        <Image src={item.image} alt="" />
                        <div className={styles.titleCompany}>
                            <h3>{item.title}</h3>
                            <h4>{item.company}</h4>
                            <div className={styles.spanBtn}>
                                <span className={styles.colorSpan}>Color</span>
                                <button
                                    className={styles.colorBtn}
                                    style={{ backgroundColor: `${item.productColor}` }}
                                ></button>
                            </div>
                        </div>
                        <div className={styles.cartForm}>
                            <label htmlFor={styles.amount}>
                                <h6>Amount</h6>
                            </label>
                            <select
                                id={styles.amount}
                                onChange={() => setSelectValue(item.amount)}
                                value={selectValue}
                                className={styles.amount}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                            <p onClick={() => handleRemove(item.id)}>remove</p>
                        </div>
                        <div className={styles.price}>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart