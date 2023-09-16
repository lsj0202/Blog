import Footer from 'components/Footer';
import PostList from 'components/PostList';
import React from 'react';

const Posts = () => {
  return (
    <>
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
};

export default Posts;
