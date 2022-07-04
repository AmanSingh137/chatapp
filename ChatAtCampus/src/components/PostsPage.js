import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../css/PostPage.module.css";
import PostSend from "../components/PostSend";
import Post from "./Post";
import { auth, db } from "../firebase";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState(0);
 // const {uid, photoURL} = auth.currentUser;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .limit(25)
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  };
 

  return (
    <Wrapper>
      <div className={styles.post_page}>
        <PostSend />
        {posts?.length >0 ?  posts.map((item) => {
          console.log(posts);
          return <Post key={item.id} image={item.photo} userImage={item.photoURL} caption={item.caption} user={item.name}  />
        }) : <><h1>Nothing to show here yet</h1></>}
      </div>
    </Wrapper>
  );
};

export default PostsPage;

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #748da6;
  height: 85%;
  overflow-y: scroll;
`;

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

  > button {
    background-color: green;
  }
`;
