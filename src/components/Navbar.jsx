import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container  pb-5 '>
      <nav className='navbar rounded-bottom'>
        <div className='company-name navbar-brand p-1'>Juma Shafara!</div>
        <div className='links-container'>
          <ul className='nav'>
            <li className='nav-link'>
              <Link to='/' className='text-decoration-none'>
                Home
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/posts' className='text-decoration-none'>
                Blogs
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/create' className='text-decoration-none'>
                New Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* <!-- <div className="nav nav-item d-lg-none d-md-none">menu</div> --> */}
      </nav>
    </div>
  );
};

export default Navbar;
