import { useState } from 'react';

// importing components
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';
import Footer from './components/Footer';
import Posts from './components/Posts';
import Navbar from './components/Navbar';

//importing images
import img2 from './project-images/girl-clain-cut.jpg';
import img3 from './project-images/girl-black-cut.jpg';
import img4 from './project-images/girl-white-cut.jpg';

//enabling routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App({ title }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: img2,
      author: 'Chris Danny',
      category: 'Code',
      date: 'Mar 04 21',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos eaque enim blanditiis ab, rerum eveniet exercitationem odit recusandae, itaque nihil quae quia obcaecati doloremque voluptate ullam? Soluta corporis nam quasi excepturi aperiam pariatur quibusdam at adipisci, ipsa, consequatur dolor ut iste, molestiae neque veritatis quidem ipsam magni inventore ipsum!',
    },
    {
      id: 2,
      image: img3,
      author: 'Sharon Rose',
      category: 'Love',
      date: 'Mar 04 21',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos eaque enim blanditiis ab, rerum eveniet exercitationem odit recusandae, itaque nihil quae quia obcaecati doloremque voluptate ullam? Soluta corporis nam quasi excepturi aperiam pariatur quibusdam at adipisci, ipsa, consequatur dolor ut iste, molestiae neque veritatis quidem ipsam magni inventore ipsum!',
    },
    {
      id: 3,
      image: img4,
      author: 'Zidane Daniel',
      category: 'Play',
      date: 'Mar 04 21',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos eaque enim blanditiis ab, rerum eveniet exercitationem odit recusandae, itaque nihil quae quia obcaecati doloremque voluptate ullam? Soluta corporis nam quasi excepturi aperiam pariatur quibusdam at adipisci, ipsa, consequatur dolor ut iste, molestiae neque veritatis quidem ipsam magni inventore ipsum',
    },
  ]);

  const onAdd = (newPost) => {
    setPosts([...posts, newPost]);

    posts.map((post) => console.log(post));
  };

  return (
    <Router>
      <div className='back '>
        <Navbar />
        <div className='container pb-5'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/posts'>
              <Posts posts={posts} />
            </Route>
            <Route exact path='/create'>
              <CreateBlog posts={posts} handleOnAdd={onAdd} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
