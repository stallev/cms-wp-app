import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchAPI } from "../../lib/api";
import { getAllPostsSlugs, getPostData } from '../../graphql/queries';
import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';
import MarkdownContent from '../../components/markdownContent/MarkdownContent';
import PostBody from '../../components/PostBody/PostBody';

const Post = ({ post }) => {

  useEffect(() => {
    console.log(post);
    console.log(post.title);
  }, [post])
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostBody postData={post}/>
    </Layout>
  );
}

export default Post;

export async function getStaticPaths() {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getAllPostsSlugs
    })
  })
  console.log('res path ', res)

  const json = await res.json()
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  // const paths = posts.map((post) => `/posts/${post.slug}`) || [];
  console.log(paths)

  return { paths, fallback: false };
  }
  
export async function getStaticProps({ params }) {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getPostData,
      variables: {
        id: params.slug,
        idType: 'SLUG'
      }
    })
  })
  console.log('res post  ', res)

  const json = await res.json()
  const { post } = json.data;

  return {
    props: { post },
    revalidate: 1,
  }
}