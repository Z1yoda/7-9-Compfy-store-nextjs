'use client'

import React from 'react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PuffLoader } from 'react-spinners';
import { useFetch } from '@/hooks/useFetch';

function Products() {
    const [productsData, setProductsData] = useState([]);
    const [counter, setCounter] = useState(0);
    const [page, setPage] = useState(1);
    const router = useRouter();

    const { data, loading, error } = useFetch(
        page === 1 ? 'https://strapi-store-server.onrender.com/api/products' :
            `https://strapi-store-server.onrender.com/api/products?page=${page}`
    );

    useEffect(() => {
        if (data) {
            setProductsData(data);
            setCounter(data.length);

        }
    }, [data]);


    function handleClick(dataId, page) {
        router.push(`/details/${dataId}`);
    }

    return (
        <div>
            {loading ? (
                <div className={styles.loader}>
                    <PuffLoader color="#fff" />
                </div>
            ) : (
                <>
                    <div className={styles.featured}>
                        <h2>{counter} products</h2>
                    </div>
                    <div className={styles.cardWrapper}>
                        {productsData.map(product => (
                            <div key={product.id} className={styles.card} onClick={() => handleClick(product.id, page)}>
                                <img className={styles.imgProduct} src={product.attributes.image} alt={product.attributes.title} />
                                <div className={styles.cardBody}>
                                    <h2>{product.attributes.title}</h2>
                                    <span>${product.attributes.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.join}>
                        <button className={styles.joinItem} onClick={() => setPage(page - 1)} disabled={page === 1}>
                            PREV
                        </button>
                        <button
                            className={styles.joinItem}
                            onClick={() => setPage(1)}
                            disabled={page === 1}
                        >
                            1
                        </button>
                        <button className={styles.joinItem} onClick={() => setPage(2)}>
                            2
                        </button>
                        <button className={styles.joinItem} onClick={() => setPage(3)}>
                            3
                        </button>
                        <button
                            className={styles.joinItem}
                            onClick={() => setPage(page + 1)}
                            disabled={page === 3}
                        >
                            NEXT
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Products