import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import styles from "../css/PostSend.module.css";
import { db } from "../firebase";
import { useSelector } from "react-redux";
function PostSend() {
  const { user } = useSelector((store) => store.auth);
  const ref = useRef();
  const [currentImage, setCurrImage] = useState(null);
  const [caption, setCaption] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (caption !== "") {
      await db.collection("posts").add({
        caption,
        photo: currentImage,
        creatorName: user?.username,
        // uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      if (ref.current.value) {
        ref.current.value = null;
      }
      setCurrImage(null);
      setCaption("");
    }
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setCurrImage(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className={styles.post_container}>
      <div className={styles.post_header}>
        <img src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

        <div className={styles.post_header_txt}>
          <div className={styles.post_input}>
            <input
              placeholder="Say Something"
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              value={caption}
            />
          </div>
        </div>
      </div>

      <div className={styles.post_react}>
        <div className={styles.post_react_container}>
          <input type="file" ref={ref} onChange={uploadImage} />
        </div>

        {/* <div className={styles.post_react_container}>Video</div> */}

        <div className={styles.post_react_container} onClick={submitHandler}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default PostSend;
