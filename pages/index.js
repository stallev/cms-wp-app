import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PostCardsList from '../components/PostCardsList/PostCardsList';
import { getAllPostsExcerpt, getPostData } from '../graphql/queries';
import Search from '../components/Search/Search';

const Homepage = ({ postsList }) => {
  const [posts, setPosts] = useState(postsList);

  useEffect(() => {
    console.log(postsList);
  }, [postsList]);
  console.log(postsList);

  return (
    <Layout>
      <Head>
        <title>CleanKarma Blog</title>
      </Head>
      <Container isWide>
        <h1>Homepage</h1>
        {!!posts.length && <PostCardsList postsList={posts}/>}
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
