// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import { useNavigate } from "react-router-dom";
// import { setUser, login, reset } from "../features/auth/authSlice";
// import styled from "styled-components";

// const LoginPage = () => {
//   const { user, isLoading, isError, isSuccess, message } = useSelector(
//     (store) => store.auth
//   );
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState("");

//   const loginHandler = (e) => {
//     e.preventDefault();
//     dispatch(login(username));
//   };

//   useEffect(() => {
//     if (isError) {
//       console.log("error occuere in loginpage");
//     }
//     if (isSuccess || user) {
//       navigate(`/${user?.role}`);
//     } else {
//       dispatch(reset());
//     }
//   }, [user, isError, isSuccess, message, navigate, dispatch]);
//   return (
//     <Loginpage>
//       <form onSubmit={loginHandler}>
//         <h2>Sign In</h2>
//         <div className="input">
//           <input
//             type="text"
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </Loginpage>
//   );
// };

// export default LoginPage;

// const Loginpage = styled.div`
//   background-image: url("/images/login.jpg");
//   background-size: cover;
//   box-sizing: border-box;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   form {
//     padding: 100px;
//     border: 1px solid blue;
//     border-radius: 10px;
//     background-color: rgba(0, 116, 217, 0.4);
//     height: 200px;

//     h2 {
//       /* margin: 50%; */
//       padding: 20px;
//     }
//     div {
//       display: flex;
//       flex-direction: column;
//       margin: 10px;

//       button {
//         background: green;
//         color: white;
//         margin-top: 5px;
//         border-radius: 10px;
//       }
//     }
//   }
// `;

import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import styled from "styled-components";

function LoginPage() {
  function signInWithGoogle(e) {
    // e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <SignInPage>
      <h1>ChatAtCampus</h1>
      <button onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/color/344/google-logo.png"></img>
        <h3>Sign in with Google</h3>
      </button>
    </SignInPage>
  );
}

export default LoginPage;

const SignInPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #748da6;
  width: 350px;
  height: 50%;
  border-radius: 5%;
  padding: 0.5rem 1rem;
  /* width: 14rem; */

  h1 {
    font-family: "Brush Script MT", cursive;
  }

  button {
    border-radius: 5%;
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      height: 30px;
      width: 30px;
    }
  }
`;
