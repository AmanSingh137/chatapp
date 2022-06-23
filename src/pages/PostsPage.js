import React from "react";
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";

const PostsPage = () => {
  return <>
    <PostsBar>
      <p>Post Here</p>
      <PostOptions>
        <Button>
          Post
        </Button>
        <AddIcon />
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
  
`;

const PostOptions = styled.div`
  margin-top: 50px;
  background-color: red;
  
  > button {
    background-color: green;
  }
`;
