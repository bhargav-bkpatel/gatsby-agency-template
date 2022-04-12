import React from 'react'

import PropTypes from 'prop-types'

import styles from './copyright.module.css'

const Copyright = (props) => {
  return (
    <div className={` ${styles['Copyright']} ${styles[props.rootClassName]} `}>
      <div className={styles['max-width']}>
        <span className={styles['text']}>
          <span className={styles['text01']}>
            <span>
              © All rights reserved
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <a
            href="https://www.teleporthq.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className={styles['text04']}>@TeleportHQ.</span>
          </a>
          <span className={styles['text05']}>
            <span>
              {' '}
              Powered by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <a
            href="https://www.vercel.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className={styles['text08']}>Vercel</span>
          </a>
          <span className={styles['text09']}>
            <span>
              . Image source:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <a
            href="https://www.unsplash.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className={styles['text12']}>Unsplash</span>
          </a>
          <span className={styles['text13']}>.</span>
        </span>
      </div>
    </div>
  )
}

Copyright.defaultProps = {
  rootClassName: '',
}

Copyright.propTypes = {
  rootClassName: PropTypes.string,
}

export default Copyright
