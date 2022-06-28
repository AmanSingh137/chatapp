import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, uploadString } from "firebase/storage";
import { v4 } from "uuid";
import styles from "../css/PostSend.module.css";
function PostSend() {
  const [imageUpload, setImageUpload] = useState(null);
  const [text, setText] = useState("");

  const submitHandler = () => {
    if (text.length === 0) {
      alert("Please enter some text!");
      return;
    }
    if (imageUpload !== null) {
      const imgId = v4();
      const imageRef = ref(storage, `images/${imgId}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        console.log("image uploaded");
        const textRef = ref(storage, `text/${imgId}`);
        uploadString(textRef, text, "raw").then((snapshot) => {
          console.log("Text sent");
        })
      });
      setImageUpload(null);
      setText("");
    }
  }

  return (
    <div className={styles.post_container}>
      <div className={styles.post_header}>
        <img src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

        <div className={styles.post_header_txt}>
          <div className={styles.post_input}>
            <input placeholder="Say Something" onChange={(e) => {
              setText(e.target.value);
            }} value={text} />
          </div>
        </div>
      </div>

      <div className={styles.post_react}>
        <div className={styles.post_react_container}>
          <input type="file" onChange={(e) => {
            //console.log(e.target.files[0]);
            setImageUpload(e.target.files[0]);
          }}
          //value={imageUpload}
          />
        </div>

        {/* <div className={styles.post_react_container}>Video</div> */}

        <div className={styles.post_react_container} onClick={submitHandler}>Submit</div>
      </div>
    </div>
  );
}

export default PostSend;
