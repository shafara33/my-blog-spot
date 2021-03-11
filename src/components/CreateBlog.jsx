import { useState } from 'react';

function CreateBlog({ posts, handleOnAdd }) {
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');

  const addBlog = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1234);

    handleOnAdd({ id, author, category, body, date });
  };

  return (
    <div className='create-blog-border'>
      <h1 className='text-center create-blog p-3 rounded'>Create New Blog</h1>
      <form action='' className='container p-3' onSubmit={addBlog}>
        <label htmlFor='' required className='mt-3'>
          Category
        </label>
        <input
          type='text'
          required
          className='form-control'
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
        />
        <label htmlFor=' ' className='mt-3 new-blog-body'>
          Body
        </label>
        <textarea
          type='text'
          className='form-control'
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
        />
        <label htmlFor='' className='mt-3'>
          Date
        </label>
        <input
          type='text'
          required
          className='form-control'
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        />
        <select
          className='form-control mt-3'
          value={author}
          onChange={(e) => setAuthor(e.currentTarget.value)}>
          <option value='Zidane Daniel'>Zidane Daniel</option>
          <option value='Chris Danny'>Chris Danny</option>
          <option value='Sharon Rose'>Sharon Rose</option>
          <option value='Juma Shafara'>Juma Shafara</option>
        </select>
        <button
          type='submit'
          className='btn btn-block btn-success form-control mt-4 p-2'>
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
