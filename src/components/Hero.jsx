import img1 from '../project-images/boy-black.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='position-absolute text-center  container text-light p-5 container-fluid'>
        <h1 className='hero-text p-3'>Why I started blogging?...</h1>
      </div>
      <img src={img1} alt='' className='img-fluid img-thumbnail' />
    </div>
  );
};

export default Hero;
