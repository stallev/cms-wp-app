import React from 'react';
import { useForm } from "react-hook-form";
import { searchAllPosts } from '../../graphql/queries';

import styles from './styles/search.module.scss'

const Search = ({ setPosts }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: searchAllPosts,
        variables: {
          search: data.search,
        }
      })
    });
  
    const json = await res.json();
    let postsList = json.data.posts.nodes;
    if (postsList) setPosts(postsList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>  
        <input className={styles.search__query} {...register('query', { required: true })} />
      
      <input className={styles.search__submit} type="submit" />
    </form>
    </div>
  )
};

export default Search;
