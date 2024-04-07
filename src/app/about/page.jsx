import React from 'react'
import styles from "./styles.module.css"

function About() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionStart}>
                <h1>We love</h1>
                <span>comfy</span>
            </div>
            <div className={styles.sectionEnd}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
                    quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
                    optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
                    sed officiis ea tempore! Similique eos minima sit porro, ratione
                    aspernatur!
                </p>
            </div>
        </section>
    )
}

export default About