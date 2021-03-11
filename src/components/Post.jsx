import img from '../project-images/girl-red-cut.jpg';

const Post = ({ posts }) => {
  return (
    <div className='container shadow-lg row pb-4'>
      {posts.map((post) => (
        <div key={post.id} className=' col-lg-4 col-md-6 '>
          <div className='text-head p-2'>
            <h4 className='d-inline p-3'>{post.category}</h4>
            <svg
              width='2em'
              height='2em'
              viewBox='0 0 16 16'
              className='bi bi-dot'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'
              />
            </svg>
            <p className='font-weight-light d-inline'>{post.date}</p>
          </div>
          <div className=' p-3 body rounded shadow-lg'>
            <figure>
              <img
                src={post.image}
                alt='image'
                className='img-fluid img-thumbnail'
              />
              <figcaption className='text-center p-2'>
                <h3>{post.author}</h3>
              </figcaption>
            </figure>

            <p className='blog-content rounded'>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
