import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history("/home");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history("/home");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history("/");
    });
  };

  return (
    <Sidebar>
      <BrandLogo src="/images/logo.svg" />
      <Menu>
        <MenuItem href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/search-icon.svg" alt="Search" />
          <span>SEARCH</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/watchlist-icon.svg" alt="Watchlist" />
          <span>WATCHLIST</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/original-icon.svg" alt="Originals" />
          <span>ORIGINALS</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/movie-icon.svg" alt="Movies" />
          <span>MOVIES</span>
        </MenuItem>
        <MenuItem>
          <img src="/images/series-icon.svg" alt="Series" />
          <span>SERIES</span>
        </MenuItem>
        {!userName ? (
          <MenuItem onClick={signIn}>
            <img src="/images/person.svg" alt="Login" />
            <span>LOGIN</span>
          </MenuItem>
        ) : (
          <ProfileImage onClick={signOut} src={userPhoto} />
        )}
      </Menu>
    </Sidebar>
  );
}

export default Navbar;

const Sidebar = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 36px;
  overflow-x: hidden;
  background-color: transparent;
  width: 10vw;
  position: fixed;
  z-index: 10;

  &:hover {
    width: 80vw;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
`;

const BrandLogo = styled.img`
  margin-top: 30px;
  margin-left: -20px;
  width: 80px;
`;

const Menu = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px 0;
  transition: transform 0.6s ease;
  text-decoration: none;
  color: white;

  img {
    height: 20px;
    transition: filter 0.6s ease, transform 0.6s ease;
  }

  span {
    padding-left: 15px;
    font-size: 13px;
    letter-spacing: 1.42px;
    opacity: 0;
    transition: opacity 0.6s ease, transform 0.4s ease, font-weight 0.6s ease;
    transform: translateX(-10%);
  }

  &:hover img,
  &:hover span {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
    transform: scale(1.2);
    font-weight: bold;
  }

  &:hover span {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ProfileImage = styled.img`
  margin-top: 10px;
  margin-left: -12px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
    transform: scale(1.2);
    font-weight: bold;
  }
`;
