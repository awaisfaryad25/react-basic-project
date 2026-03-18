import { useState, useEffect } from 'react'
import axios from 'axios'
import Input from '../components/global/Input'
import Button from '../components/global/Button'

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.post('http://localhost:3000/create-post', formData)
      .then((res) => {
        console.log(res.data);  
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {

    axios.get('http://localhost:3000/posts')
      .then((res) => {
        setPosts(res.data.posts);
      })

  }, []);


  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  const [person, setPerson] = useState({user: 'Awais', age: 30});

  const updatePerson = () => {
    const newPerson = {...person};
    newPerson.user = 'Ali';
    newPerson.age = 25;
    setPerson(newPerson);
  }
  return (
    <div className=''>
      
      <div className="">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="p-4 mb-4  rounded shadow-lg space-y-3">
              <img src={post.image} alt="" />
              <p>{post.captions}</p>
            </div>
          ))
        ) : (<p className="text-center text-gray-500">No posts available.</p>)
        }
      </div>
      <form onSubmit={handleSubmit} className='w-full max-w-xl mx-auto mt-8 p-12 rounded-lg shadow bg-[#f2f4fa]'>
        <h1 className='text-2xl font-bold'>Posts Page</h1>

        <div className="w-full max-w-sm mt-4 mx-auto space-y-4">
          <Input type="file" name="image" placeholder="Enter name" className='mb-4'/>
          <Input type="text" name="caption" placeholder="Enter name" required className='mb-8'/>

          <Button variant="primary" label='Submit' type='Submit'/>

        </div>

      </form>

      <div className="">
        <div className="flex gap-4">
           <button onClick={() => setCount(count - 5)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            - 5
          </button>
          <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            -
          </button>
          <div className="text-3xl font-bold text-blue-600">
            {count}
          </div>
          <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            +
          </button>
          <button onClick={() => setCount(count + 5)} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            + 5
          </button>
        </div>

        <div className="">{person.user}, {person.age}</div>
        <button onClick={updatePerson}>Update Person</button>
      </div>
    </div>
  )
}

export default Posts