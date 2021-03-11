import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='company-name navbar-brand p-3'>Juma Shafara!</div>
        <div className=''>
          <ul className='nav'>
            <li className='p-2'>
              <Link to='' className='text-decoration-none'>
                Home
              </Link>
            </li>
            <li className='p-2'>
              <Link to='/posts' className='text-decoration-none'>
                Blogs
              </Link>
            </li>
            <li className='p-2'>
              <Link to='/create' className='text-decoration-none'>
                New Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* <!-- <div className="nav nav-item d-lg-none d-md-none">menu</div> --> */}
      </nav>
      <div className='credit text-center '>
        <p className='p-2'>Designed by Kibekityo Juma Shafara</p>
      </div>
    </div>
  );
};

export default Footer;
