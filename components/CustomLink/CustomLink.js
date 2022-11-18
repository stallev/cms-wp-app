import React from 'react';
import Link from 'next/link';

import styles from './styles/custom-link.module.scss';

const CustomLink = ({
  to,
  children
}) => {
  return (
    <div className={styles['custom-link']}>
      <Link href={to}>
        {children}
      </Link>
    </div>
  )
}

export default CustomLink
