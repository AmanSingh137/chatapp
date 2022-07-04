import React from 'react'
import styles from '../css/Post.module.css'
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';

function Post({ image, userImage, caption, user }) {
  
  return (
   <div className={styles.post_container}>
     <div className={styles.post_header}>
     
<img src={userImage}/>
      
        <div className={styles.post_header_txt}>
         <div>
         <div className={styles.post_username}>{user}</div>
         <div className={styles.post_time}>{caption}</div>
         </div>

        
        </div>
     </div>

     

     <div className={styles.post_img}>
     <img src={image}/>
     </div>

     <div className={styles.post_react}>
    <div className={styles.post_like}>
        Like
        <ThumbUpIcon fontSize='20px' className={styles.like}></ThumbUpIcon>
    </div>

    <div className={styles.post_comment}>
        Comments
        <CommentIcon fontSize='20px' className={styles.comment}></CommentIcon>
    </div>

    <div className={styles.post_share}>
        Share
        <ShareIcon fontSize='20px' className={styles.share}></ShareIcon>
    </div>


     </div>


   </div>
  )
}

export default Post;