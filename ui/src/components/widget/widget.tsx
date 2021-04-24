import React from 'react';
import gql from 'graphql-tag';
import {useGetPostsQuery} from "../../generated/graphql";

const GET_POSTS = gql`
query GetPosts {
  posts {
    title
  }
}
`

const Widget = () => {
    const {data, loading, error} = useGetPostsQuery()
    return (
        <div>
            Hello World
        </div>
    );
};

export default Widget;
