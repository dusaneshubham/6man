import React, { ReactNode, isValidElement } from 'react'
import styles from './StoryCard.module.css'

type StoryCardType = {
    img?: ReactNode | string;
    desciption?: ReactNode | string;
    year?: ReactNode | string;
    className?: string;
    keys?: Number
}

const StoryCard = ({ img = '', desciption = '', year = '', className = '', keys = 0 }: StoryCardType) => {
    return (
        <>
            <div className={`${styles.storyWrapper} ${className}`} id={`story-${keys}`}>
                {typeof img == "string" ? <img src={img} className={styles.imgWrapper} /> : <>{img}</>}
                <div className="p-3 text-white">
                    {isValidElement(desciption) ? desciption : <span className='float-start '>{desciption}</span>}
                    {isValidElement(desciption) ? year : <span className='float-end '>{year}</span>}
                </div>
            </div >
        </>
    )
}

export default StoryCard
