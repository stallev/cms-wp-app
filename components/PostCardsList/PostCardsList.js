import React from 'react';

import styles from './styles/post-cards-list.module.scss';

const PostCardsList = ({ postCardsList }) => {
  return (
    <div className={styles['post-cards-list']}>
      {postCardsList}
    </div>
  )
}

export default PostCardsList
