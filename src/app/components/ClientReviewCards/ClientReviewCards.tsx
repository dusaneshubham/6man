import React from 'react'
import styles from './ClientReviewCards.module.css'
import Script from 'next/script'
import { clientReviews } from './clientReviews'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const getStars = (number: any) => {
    let stars = []
    for (let i = 0; i < number; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} className={`${styles.starIcon} ms-1`} />)
    }
    return stars;
}

const ClientReviewCards = () => {
    return (
        <>
            <section className={styles.testimonialGroup}>
                <div className="container">

                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper mb-5">
                            {
                                clientReviews.map((review) => {
                                    return (
                                        <div className="swiper-slide">
                                            <div className={styles.sliderWrapperCard}>
                                                <h5>{review.client_name}</h5>
                                                <p>
                                                    {
                                                        getStars(review.rating).map((star) => star)
                                                    }
                                                </p>
                                                <p>{review.review}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>

                        <div className={`${styles.swiperButtonPrev} swiper-button-prev`}></div>
                        <div className={`${styles.swiperButtonNext} swiper-button-next`}></div>
                    </div>
                </div>

            </section>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" defer></Script>
            <Script src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js' defer></Script>
            <Script src="/js/swapper.js" defer></Script>
        </>
    )
}

export default ClientReviewCards