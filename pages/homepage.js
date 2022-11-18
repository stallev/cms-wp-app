import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { gql } from "@apollo/client";
import { fetchAPI } from '../lib/api';
import Layout from '../components/layout';

export default function Homepage({ homepage }) {
  useEffect(() => {
    console.log(homepage);
  }, [])
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Homepage</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export async function getStaticProps() {
  const homepage = await fetchAPI("/homepage");

  return {
    props: { 
      homepage
    },
    revalidate: 1,
  }
}