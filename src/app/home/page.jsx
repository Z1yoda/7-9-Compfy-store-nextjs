import React from 'react'
import carousel1 from '../../../public/carousel1.png'
import carousel2 from '../../../public/carousel2.png'
import carousel3 from '../../../public/carousel3.png'
import carousel4 from '../../../public/carousel4.png'
import lamp from '../../../public/lamp.png'
import table from '../../../public/table.png'
import bad from '../../../public/bad.png'
import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

function Home() {
    return (
        <div>
            <div className={styles.mainWrapper}>
                <div className={styles.mainLeft}>
                    <h1>We are changing the way people shop</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Tempore repellat explicabo enim soluta temporibus asperiores <br /> aut obcaecati perferendis porro nobis.</p>
                    <Link href="/products">
                        <button style={{ cursor: "pointer" }}>OUR PRODUCTS</button></Link>
                </div>
                <div className={`${styles.mainRaight}, ${styles.carousel}`}>
                    <div className={styles.carouselItem}>
                        <Image className={styles.carouselImages} src={carousel1} alt="" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image className={styles.carouselImages} src={carousel2} alt="" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image className={styles.carouselImages} src={carousel3} alt="" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image className={styles.carouselImages} src={carousel4} alt="" />
                    </div>


                </div>
            </div>
            <div className={styles.productsWrapper}>
                <div className={styles.featured}><h2>Featured Products </h2></div>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <Image className={styles.images} src={lamp} alt="" />
                        <div className={styles.cardBody}>
                            <h2>Avant-Garde Lamp</h2>
                            <span>179.99$</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.images} src={table} alt="" />
                        <div className={styles.cardBody}>
                            <h2>Avant-Garde Lamp</h2>
                            <span>179.99$</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.images} src={bad} alt="" />
                        <div className={styles.cardBody}>
                            <h2>Avant-Garde Lamp</h2>
                            <span>179.99$</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home