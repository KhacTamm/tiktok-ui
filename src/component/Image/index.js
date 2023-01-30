import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import { forwardRef, useState } from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(({ src = '', alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(images.noImage)
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            alt={alt}
            src={fallback || src}
            ref={ref}
            {...props}
            onError={handleError}
        />
    )
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}

export default Image
