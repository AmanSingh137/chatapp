import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../css/PostPage.module.css";
import PostSend from "../components/PostSend";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import Post from "../components/Post";
// import { storage } from "../firebase";

const PostsPage = () => {
  const [imgUrls, setImgUrls] = useState([]);
  const [textUrls, setTextUrls] = useState([]);

  // const imageList = ref(storage, "images/");
  // const textList = ref(storage, "text/");
  // useEffect(() => {
  //   listAll(imageList).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImgUrls((prev) => [...prev, url]);
  //       });
  //     });
  //     listAll(textList).then((response) => {
  //       response.items.forEach((data) => {
  //         getDownloadURL(data).then((uri) => {
  //           setTextUrls((obj) => [...obj, uri]);
  //         });
  //       });
  //     });
  //     console.log(imgUrls);
  //     console.log(textUrls);
  //   });
  // }, []);

  return (
    <div className={styles.post_page}>
      <PostSend></PostSend>

      <Post></Post>
    </div>
  );
};

export default PostsPage;

const PostsBar = styled.div`
  background-color: grey;
  height: 9.375rem;
  width: 75rem;
  margin-left: 9.375rem;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > p {
    padding-left: 20px;
    padding-top: 10px;
  }
  > input {
    width: 50rem;
    height: 3.125rem;
    margin-top: 20px;
  }
`;

const PostOptions = styled.div`
  margin-top: 50px;
  //background-color: red;

  > button {
    background-color: green;
  }
`;
