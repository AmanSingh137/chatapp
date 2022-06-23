import React, { useState } from "react";
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { setPosts } from "../features/postsSlice";

const PostsPage = () => {
  const [postText, setPostsText] = useState("");
  const [images, setImages] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentPosts } = useSelector(
    (store) => store.posts
  );

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setPosts(
      [ ...currentPosts]
    ))
  }

  const handleClickAdd = (e) => {
    e.preventDefault();

  }

  return <>
    <PostsBar>
      <p>Post Here</p>
      <input type="text" onChange={ (e) => {
        setPostsText(e.target.value);
      } } />
      <PostOptions>
        <Button onClick={handleClick}>
          Post
        </Button>
        <AddIcon onClick={handleClickAdd} />
      </PostOptions>
    </PostsBar>
  </>;
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
