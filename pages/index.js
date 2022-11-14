import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PostCard from '../components/PostCard/PostCard';
import PostCardsList from '../components/PostCardsList/PostCardsList';
import { getAllPostsExcerpt, getPostData } from '../graphql/queries';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import styles from '../styles/pages/homepage.module.scss';

const Homepage = ({ postsList }) => {
  const postNumber = 'cG9zdDo0Nw==';

  useEffect(() => {
    console.log(postsList);
    // console.log('postData is ', postData);
  }, [postsList]);

  const postCardsList = useMemo(() => {
    return !!postsList.length && postsList.map((item) => 
      <PostCard cardData={item} key={item.uri}/>
    )
  }, [postsList])
  console.log(postsList)

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Container isWide>
        <h1>Homepage</h1>
        <PostCardsList postCardsList={postCardsList}/>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getAllPostsExcerpt
    })
  })

  const json = await res.json();
  let postsList = json.data.posts.nodes;

  return {
    props: { 
      postsList
    },
    revalidate: 1,
  }
}

export default Homepage;