import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import styles from './styles/custom-image.module.scss';

const CustomImage = ({
  alt,
  src,
  height,
  className
}) => {
  return (
    <div className={cx(
      styles['custom-image'],
      className
    )}>
      <Image
        src={src}
        objectFit="cover"
        layout="fill"
        alt={alt}
        priority
        height={height && height}
      />
    </div>
  )
}

export default CustomImage
