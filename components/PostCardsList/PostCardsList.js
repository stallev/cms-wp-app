import React, { useMemo } from 'react';
import PostCard from '../PostCard/PostCard';

import styles from './styles/post-cards-list.module.scss';

const PostCardsList = ({ postsList }) => {
  const postCardsList = useMemo(() => {
    return postsList.map((item, index) => 
      <PostCard cardData={item} key={index}/>
    )
  }, [postsList])

  console.log(postsList)
  return (
    <div className={styles['post-cards-list']}>
      {postCardsList}
    </div>
  )
}

export default PostCardsList
