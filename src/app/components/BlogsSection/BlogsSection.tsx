import React from 'react'
import styles from './BlogsSection.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const BlogsSection = () => {
  const blogSubHeading = (
    <p className={styles.titleSubHeading}>
      Amazing website! It exceeded all my <b>expectations</b>, delivering an <b>exceptional</b> user experience.
    </p>
  )

  return (
    <div className={styles.blogsSectionWrapper}>
      <SectionTitle heading="See Our Blog" subHeading={blogSubHeading} />
    </div>
  )
}

export default BlogsSection