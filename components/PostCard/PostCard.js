import * as React from 'react';
import ReactMarkdown from "react-markdown"
import { Button, Typography } from '@mui/material';
import MarkdownContent from '../markdownContent/MarkdownContent';
import Image from 'next/image';
import CustomImage from '../CustomImage/CustomImage';
import { useRouter } from 'next/router';

import styles from './styles/post-card.module.scss';

const PostCard = ({cardData}) => {
  const router = useRouter();

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
        <Typography variant='body1' className={styles['post-card__excerpt']}>
          
        </Typography>
        <MarkdownContent content={cardData.excerpt}/>
        <div className={styles['post-card__actions']}>
          <Button size="small">Share</Button>
          <Button size="small" onClick={redirectToPostPage}>Learn More</Button>
        </div>
      </div>      
    </article>
  )
}

export default PostCard
