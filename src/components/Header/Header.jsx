import React, { useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { Nav, Logo, NavMenu, UserImg, Login, LoginContainer } from "./styles";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;

      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate("/");
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(setSignOut());
      navigate("/login");
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            emal: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="originals" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="movie" />
              <span>MOVIE</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} onClick={handleSignOut} />
        </>
      )}
    </Nav>
  );
};

export default Header;
