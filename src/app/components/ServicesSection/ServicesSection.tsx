import React from 'react'
import styles from './ServicesSection.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import ServiceCard from '../ServiceCard/ServiceCard'

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
                <Button label='Start Project' />
                <div className={`${styles.cards} py-5`}>
                    {
                        services.length && services.map((service, index) => {
                            return (
                                <ServiceCard
                                    img={service?.img}
                                    title={service.title}
                                    description={service.description}
                                    keys={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ServicesSection
