"use client"

import React, { useEffect } from 'react'
import styles from './Loader.module.css'
import $ from 'jquery'
import { hatch } from 'ldrs'

const Loader = () => {

    useEffect(() => {
        hatch.register()
        setTimeout(function () {
            $(`.${styles.mainContainer}`).fadeOut();
        }, 2000);
    });

    return (
        <div className={styles.mainContainer}>
            <l-hatch
                size="28"
                stroke="4"
                speed="3.5"
                color="white"
            ></l-hatch>
        </div>
    )
}

export default Loader