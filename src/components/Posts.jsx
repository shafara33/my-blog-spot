import Post from './Post';

const Posts = ({ posts }) => {
  return (
    <div className=''>
      <div className='container text-center '>
        <h1 className='pb-5 latest-posts '>Latest Posts from the blog</h1>
      </div>
      <Post posts={posts} />
    </div>
  );
};

export default Posts;
