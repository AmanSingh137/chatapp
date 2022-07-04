import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import styles from "../css/PostSend.module.css";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function PostSend() {
  const [user] = useAuthState(auth);
  const ref = useRef();
  const [currentImage, setCurrImage] = useState(null);
  const [caption, setCaption] = useState("");
  const {uid, photoURL} = auth.currentUser;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (caption !== "") {
      console.log(caption, uid, photoURL);
      await db.collection("posts").add({
        caption,
        photo: currentImage,
        uid, 
        name: user.displayName,
        photoURL,
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
        <img src={photoURL} />

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

        <div className={styles.post_react_container} onClick={submitHandler}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default PostSend;
