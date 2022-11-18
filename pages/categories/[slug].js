import Head from 'next/head';
import { getAllCategoriesSlugs, getPostsByCategory } from '../../graphql/queries';
import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';
import PostCardsList from '../../components/PostCardsList/PostCardsList';

const Category = ({ postsList, categoryName }) => {
  console.log(postsList)
  return (
    <Layout>
      <Head>
        <title>Category page</title>
      </Head>
      <Container isWide>
        <h1>Category: {categoryName}</h1>
        {!!postsList.length && <PostCardsList postsList={postsList}/>}
      </Container>
    </Layout>
  );
}

export default Category;

export async function getStaticPaths() {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getAllCategoriesSlugs
    })
  })
  console.log('res path ', res)

  const json = await res.json()
  const categories = json.data.categories.nodes;

  const paths = categories.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
  }
  
export async function getStaticProps({ params }) {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getPostsByCategory,
      variables: {
        id: params.slug,
        idType: 'SLUG'
      }
    })
  });

  const json = await res.json();
  const postsList = json.data.category.posts.nodes;
  const categoryName = json.data.category.name;

  return {
    props: {
      postsList,
      categoryName
    },
    revalidate: 10,
  }
}
