import React from 'react'
import styles from "./Error.module.css"

const Error = () => {
    return (
        <div className={styles.error}>
          <section className={styles.container}>
            <h1>
              Sorry!
            </h1>
            <p>
              We couldn't find that page.
            </p>
            <p>
              <span>Try searching or go to </span>
              <a href="/" className="clickable">Home Page</a>
              <span>.</span>
            </p>
            <figure className={styles.imageContainer}>
              <a href="/">
                <img className={styles.image} src="https://lh3.googleusercontent.com/PD0-mTON-wlHZPUfZRhymXidBvjfIOZYgkWZSE_pp_e1CmuY5s6uCdSVXFyp-ZMWxkMK6y-53plu5CNzM3X4q5lasv8vwDLEvd45eQqQUB6uSIN3-kUQgs8iShO7topjn-A-3L2jBNhzyKq8NzqLoglxfAFke7cg0HiaPdYPa5B0Tlfjlx-3lNL3wTeH8sgijwGyKpPwcrQ0luXroHz3Qqh-4PC4juiYZM8XuHnES9wwv-jSJzEZH3QmjBETeIHYdET7ftPH3PJPhuwmilbV1myW3jHj90tfziycfajtvlm0jnwApZOE43U3zbkvly24jI_yR_8G0twPy9QVdqDVpAnkzoJ5xDMqVFFmWfxRD6ihQJFcZo_fNCfZmm5SNya1JzdUz3AYU2Ijl_iNlXxTUmCxcTI_qN-g1tvnajl7oe88AFqGkJWfcBdWqb3Wu2zjWc5Uxoa5rNPwlaigGDfoScr2m1ERdsAkanL5oAPeXagCFUKk65IL5aaXd3Y-iOA_Acquek6Pe7tVnACQFY2yBESdUMHH5KThRedJ-yA7fWvaL9gCo38lhUqUjKlH1_OnuI7JwpEzD0HMcuQrKLxETJnwaAle6tFvyx1gNia_BctpFfp3FPtt2030DjFpueTLtYZ-lQEth6Fc4j-dgHyBcLBLNjAudxp806qLHjH4l9JdPe7bjKLY_T6VsSPsPaGLOww9oq-SSUh3JsIO4DLJAzbawVvwoD7X3-Ej6PAsp8pxTB8=w720-h900-no" alt=""/>
              </a>
              <p>
                <span>Or you can have a </span>
                <a href="/" className="clickable">cheesecake</a>
                <span>!</span>
              </p>
              <div className={styles.gap}></div>
              <p>
                <span>Click and find the secret of this </span>
                <a href="/" className="clickable">cheesecake</a>
                <span>!</span>
              </p>
            </figure>
          </section>
        </div>
    )
}

export default Error
