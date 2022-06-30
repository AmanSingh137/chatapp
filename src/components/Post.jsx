import React from 'react'
import styles from '../css/Post.module.css'
function Post() {
  return (
   <div className={styles.post_container}>
     <div className={styles.post_header}>
     
<img src='https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
      
        <div className={styles.post_header_txt}>
         <div>
         <div className={styles.post_username}>Elon Musk</div>
         <div className={styles.post_time}>Few minutes ago</div>
         </div>
        </div>
     </div>

     <div className={styles.post_img}>
     <img src='https://images.pexels.com/photos/3605900/pexels-photo-3605900.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img> 
     </div>

     <div className={styles.post_react}>
    <div>
        Like
    </div>

    <div>
        Comments
    </div>

    <div>
        Share
    </div>


     </div>


   </div>
  )
}

export default Post;