import React, {useEffect} from "react";
import "../styles/FullPost.css";
import axios from "axios";
import { Pagination } from 'antd';

function FullPost() {
  const [post, setPost] = React.useState(null);
  const [page, setPage] = React.useState(1);
  
  useEffect(() => {
    const baseURL = `http://127.0.0.1:8000/blog/api/?page_size=${page}`;
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [page]);

  function handlePage(activePage) {
    setPage(activePage)
  }
  

  if (!post) return null;
  return (
    <>
        {post.map((p, index) => {
          return (
            <div key={index}>
            <h2>{p.title}</h2>
            <div className="row">
            <div className="leftcolumn">
                <div className="card">
                <h2>Author: {p.author}</h2>
                <h5>{p.body}</h5>
                <h5>Published: {p.publish}</h5>
                </div>
            </div>
            </div>
            </div>
          );
        })}
        <Pagination onChange={handlePage}
                defaultCurrent={page}
                total={11}
                />
    </>
  );
}

export default FullPost;
