// import React from "react";
// import "../styles/FullPost.css";
// import axios from "axios";
// import { Pagination } from 'antd';
// const baseURL = "http://127.0.0.1:8000/blog/api/";

// function FullPost() {
//   const [post, setPost] = React.useState(null);
//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//       console.log(response.data);
//     });
//   }, []);

  
//   if (!post) return null;
//   return (
//     <>
//         {post.map((p, index) => {
//           return (
//             <div key={index}>
//             <h2>{p.title}</h2>
//             <div className="row">
//             <div className="leftcolumn">
//                 <div className="card">
//                 <h2>Author: {p.author}</h2>
//                 <h5>{p.body}</h5>
//                 <h5>Published: {p.publish}</h5>
//                 </div>
//             </div>
//             </div>
//             </div>
//           );
//         })}
//         <Pagination defaultCurrent={1} total={50} />
//     </>
//   );
// }

// export default FullPost;
