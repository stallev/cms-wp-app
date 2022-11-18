import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography, Link } from '@mui/material';
import { RoutePath } from '../../constants/RoutePath';
import MarkdownContent from '../markdownContent/MarkdownContent';
import CustomImage from '../CustomImage/CustomImage';
import CustomLink from '../CustomLink/CustomLink';

import styles from './styles/post-card.module.scss';

const PostCard = ({cardData}) => {
  const router = useRouter();

  const {categories: {nodes: categoriesArray} } = cardData;

  const categoriesLinks = useMemo(() => {
    return categoriesArray.map((item) => 
    <CustomLink
      to={`${RoutePath.Category}/${item.slug}`}
      key={item.slug}
    >
      {item.name}
    </CustomLink>)
  }, [categoriesArray]);

  const redirectToPostPage = () => router.push(cardData.uri);
  return (
    <article className={styles['post-card']}>
      <CustomImage
        className={styles['post-card__image-wrap']}
        src={cardData.featuredImage.node.sourceUrl}
        alt={cardData.title}
      />
      <div className={styles['post-card__info']}>
        <Typography variant='h6' className={styles['post-card__title']}>
          {cardData.title}
        </Typography>
        <MarkdownContent content={cardData.excerpt}/>
        <div className={styles['post-card__actions']}>
          <div className={styles['post-card__category-links']}>
            {categoriesLinks}
          </div>

          <Button size="small">Share</Button>
          <Button size="small" onClick={redirectToPostPage}>Learn More</Button>
        </div>
      </div>      
    </article>
  )
}

export default PostCard
