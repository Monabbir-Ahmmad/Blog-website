import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./reducers/authReducer";
import {
  blogListReducer,
  personalBlogDeleteReducer,
  personalBlogUpdateReducer,
  postBlogReducer,
  singleBlogReducer,
  userBlogListReducer,
} from "./reducers/blogReducer";
import {
  commentDeleteReducer,
  commentListReducer,
  commentUpdateReducer,
  postCommentReducer,
} from "./reducers/commentReducer";
import {
  userDetailsReducer,
  userProfileUpdateReducer,
  userPasswordUpdateReducer,
  userListReducer,
} from "./reducers/userReducer";
import TokenService from "./service/token.service";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userProfileUpdate: userProfileUpdateReducer,
  userPasswordUpdate: userPasswordUpdateReducer,
  userList: userListReducer,
  postBlog: postBlogReducer,
  blogList: blogListReducer,
  singleBlog: singleBlogReducer,
  userBlogList: userBlogListReducer,
  personalBlogDelete: personalBlogDeleteReducer,
  personalBlogUpdate: personalBlogUpdateReducer,
  postComment: postCommentReducer,
  commentList: commentListReducer,
  commentUpdate: commentUpdateReducer,
  commentDelete: commentDeleteReducer,
});

const initialState = {
  userLogin: { userAuthInfo: TokenService.getUser() },
};

const reduxStore = configureStore({ reducer, preloadedState: initialState });

export default reduxStore;
