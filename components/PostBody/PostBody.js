import React from 'react';
import Container from '../container/container';
import MarkdownContent from '../markdownContent/MarkdownContent';
import CustomImage from '../CustomImage/CustomImage';
import Image from 'next/image';
import { Typography } from '@mui/material';

import styles from './styles/post-body.module.scss';

const PostBody = ({ postData }) => {
  return (
    <>
      <Container isWide>
        <CustomImage
          className={styles['post-body__head-image']}
          src={postData.featuredImage.node.sourceUrl}
          alt={postData.title}
        />
      </Container>
      <Container isMainContent>
        <div className={styles['post-body__content']}>
          <h1>{postData.title}</h1>
          <MarkdownContent content={postData.content}/>
        </div>
      </Container>
    </>
  )
}

export default PostBody
