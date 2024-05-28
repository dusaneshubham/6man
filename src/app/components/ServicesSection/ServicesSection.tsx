"use client";

import React from 'react'
import styles from './ServicesSection.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ServiceCard from '../ServiceCard/ServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import './ServiceSection.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SeoButton from '../SeoButton/SeoButton';

const ServicesSection = () => {

    const services = [
        {
            "img": {
                url: "/services/service-1.png",
                alt: "service-1"
            },
            "title": "Web Design & Development",
            "description": "Transforming visions into captivating digital experiences. Elevate your online presence with bespoke website designs tailored just for you."
        },
        {
            "img": {
                url: "/services/service-2.png",
                alt: "service-2"
            },
            "title": "Software Development",
            "description": "Crafting code that transforms ideas into seamless solutions. Elevate your digital presence with our expert software development service."
        },
        {
            "img": {
                url: "/services/service-3.png",
                alt: "service-3"
            },
            "title": "Mobile Development",
            "description": "Unlock the potential of your mobile presence with expert Mobile development tailored to your needs. Let's bring your app vision to life."
        },
        {
            "img": {
                url: "/services/service-4.png",
                alt: "service-4"
            },
            "title": "Data analyst",
            "description": "Unlocking insights, driving decisions. Your data, my expertise."
        },
        {
            "img": {
                url: "/services/service-5.jpg",
                alt: "service-5"
            },
            "title": "IOS developer",
            "description": "Unlocking insights, driving decisions. Your data, my expertise."
        },
        {
            "img": {
                url: "/services/service-6.jpg",
                alt: "service-6"
            },
            "title": "Graphics Design",
            "description": "Unlocking insights, driving decisions. Your data, my expertise."
        },
        {
            "img": {
                url: "/services/service-7.jpg",
                alt: "service-7"
            },
            "title": "Web Developer",
            "description": "Unlocking insights, driving decisions. Your data, my expertise."
        },
        {
            "img": {
                url: "/services/service-8.png",
                alt: "service-8"
            },
            "title": "E-Commerce Design",
            "description": "Unlocking insights, driving decisions. Your data, my expertise."
        }
    ]

    const serviceSubHeading = (
        <p className={styles.titleSubHeading}>
            <b>6 Mens</b> is 6 Mens is a team of IT outsourcing business professionals with 10 years of experience and a reputation for offshore <b>web & Mobile development.</b>
        </p>
    )

    return (
        <>
            <div className={`${styles.serviceSectionWrapper} text-center`}>
                <SectionTitle heading="Preparing For Your Success Provide Best IT Solutions." subHeading={serviceSubHeading} className="pb-0" />
            </div>
            <SeoButton />
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                slidesPerView="auto"
                pagination={{ clickable: true }}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    756: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 25
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    }
                }}
                className='my-5'
            >
                {
                    services.length && services.map((service, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ServiceCard
                                    img={service?.img}
                                    title={service.title}
                                    description={service.description}
                                    indexKey={index}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default ServicesSection
