export const getAllPostsSlugs = /* GraphQL */ `query getAllPosts {
  posts {
    nodes {
      slug
    }
  }
}
`;

export const getAllPostsExcerpt = /* GraphQL */ `query getAllPosts {
  posts (where: {status: PUBLISH}) {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
          title
        }
      }
      categories {
        nodes {
          name
          slug
          uri
        }
      }
      uri
    }
  }
}
`;

export const searchAllPosts = /* GraphQL */ `query searchAllPosts ($query: String) {
  posts(where: {search: $query, status: PUBLISH}) {
    nodes {
      excerpt
      slug
      title
      uri
      categories {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;

export const getPathAllPosts = /* GraphQL */ `query getAllPosts {
  posts {
    nodes {
      id
      slug
      postId
    }
  }
}
`;

export const getAllCategoriesSlugs = /* GraphQL */ `query getAllPosts {
  categories {
    nodes {
      slug
      uri
    }
  }
}
`;

export const getPostData = /* GraphQL */ `query getPostData($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    title
    content
    date
    featuredImage {
      node {
        sourceUrl
        title
      }
    }
    author {
      node {
        firstName
        avatar {
          url
        }
        email
      }
    }
  }
}
`;

export const getPostsByCategory = /* GraphQL */ `query getPostsByCategory ($id: ID!, $idType: CategoryIdType!) {
  category (id: $id, idType: $idType) {
    name
    posts(where: {status: PUBLISH}) {
      nodes {
        excerpt
        slug
        title
        uri
        categories {
          nodes {
            name
            slug
            uri
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}  
`;
