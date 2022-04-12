import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './blog-card.module.css'

const BlogCard = (props) => {
  return (
    <div className={` ${styles['BlogCard']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <button
          className={` ${styles['button']} ${projectStyles['button-secondary']} ${projectStyles['button']} `}
        >
          {props.button}
        </button>
        <span className={styles['text']}>{props.text1}</span>
      </div>
      <span className={styles['text1']}>
        <span>
          Excepteur sint occaecat cupidatat non proident, sunt
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>in culpa qui and.</span>
      </span>
      <span className={styles['text4']}>{props.text}</span>
    </div>
  )
}

BlogCard.defaultProps = {
  button: 'Web Design',
  image_alt: 'image',
  text1: 'Dec 8, 2022',
  image_src: '/playground_assets/rectangle%2099-1500w.png',
  rootClassName: '',
  text: 'Learn more',
}

BlogCard.propTypes = {
  button: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default BlogCard
