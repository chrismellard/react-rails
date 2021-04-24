import React from 'react';
import gql from 'graphql-tag';

const query = gql`
query {
  posts {
    title
  }
}
`

const Widget = () => {
    return (
        <div>
            Hello World
        </div>
    );
};

export default Widget;
