export const getAllPostsSlugs = /* GraphQL */ `query getAllPosts {
  posts {
    nodes {
      slug
    }
  }
}
`;

export const getAllPostsExcerpt = /* GraphQL */ `query getAllPosts {
  posts {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
          title
        }
      }
      uri
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
