import React from 'react'
// import styles from '../css/Post.module.css'
import styles from '../css/PostSend.module.css'
function PostSend() {
  return (
   <div className={styles.post_container}>
     <div className={styles.post_header}>
     
<img src='https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
      
        <div className={styles.post_header_txt}>
         <div  className={styles.post_input}>
         <input placeholder='Say Something'>
         </input>
        
         </div>
        </div>
     </div>

    

     <div className={styles.post_react}>
    <div className={styles.post_react_container}>
        Photo
    </div>

    <div className={styles.post_react_container}>
    Video
    </div>

    <div className={styles.post_react_container}>
        Thread
    </div>

    


     </div>


   </div>
  )
}

export default PostSend