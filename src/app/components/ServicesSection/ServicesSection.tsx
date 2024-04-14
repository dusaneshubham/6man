import React from 'react'
import styles from './ServicesSection.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import ServiceCard from '../ServiceCard/ServiceCard'

const ServicesSection = () => {

    const services = [
        {
            "img": "/services/service-1.png",
            "title": "Web Design & Development",
            "description": "From beautiful creative concepts to practical user-driven site designs."
        },
        {
            "img": "/services/service-2.png",
            "title": "Software Development",
            "description": "From beautiful creative concepts to practical user-driven site designs."
        },
        {
            "img": "/services/service-3.png",
            "title": "Android Development",
            "description": "From beautiful creative concepts to practical user-driven site designs."
        },
        {
            "img": "/services/service-4.png",
            "title": "Data analyst",
            "description": "From beautiful creative concepts to practical user-driven site designs."
        }
    ]

    const serviceSubHeading = (
        <p className={styles.titleSubHeading}>
            <b>6 Mans</b> is 6 Mans is a team of IT outsourcing business professionals with 10 years of experience and a reputation for offshore <b>web & Mobile development.</b>
        </p>
    )

    return (
        <>
            <div className={`${styles.serviceSectionWrapper} text-center`}>
                <SectionTitle heading="Preparing For Your Success Provide Best IT Solutions." subHeading={serviceSubHeading} className="pb-0" />
                <Button label='Start Project' />
                <div className={`${styles.cards} py-5`}>
                    {
                        services.map((service, index) => {
                            return (
                                <ServiceCard
                                    img={service.img}
                                    title={service.title}
                                    description={service.description}
                                    key={index}
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