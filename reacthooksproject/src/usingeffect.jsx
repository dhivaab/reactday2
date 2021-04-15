import React , { useState , useEffect } from 'react';

const UsingEffect = ()=>{
 const APIurl = 'https://jsonplaceholder.typicode.com/posts';
 const [posts, setPosts] = useState([]);
 
 useEffect(()=>{
  fetch(APIurl)
   .then(res => res.json())
   .then(data => setPosts(data));
},[]);
return(
<>
      <table>
          <tr>
              <td>userId</td>
              <td>id</td>
              <td>title</td>
              <td>body</td>
          </tr>
          {posts.map(post => (
              <tr>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>

              </tr>
          ))}
      </table>
</>
)
}

export default UsingEffect