import React from 'react';
import gql from 'graphql-tag';
import {useGetPostsQuery} from "../../generated/graphql";

gql`
query GetPosts {
  posts {
    title
  }
}
`

const Widget = () => {
    const {data} = useGetPostsQuery()
    return (
        <div>
            Hello World {data?.posts?.title}
        </div>
    );
};

export default Widget;
