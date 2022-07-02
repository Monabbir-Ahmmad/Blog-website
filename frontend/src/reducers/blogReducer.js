import {
  DELETE_PERSONAL_BLOG_FAIL,
  DELETE_PERSONAL_BLOG_REQUEST,
  DELETE_PERSONAL_BLOG_SUCCESS,
  DELETE_PERSONAL_BLOG_SUCCESS_RESET,
  GET_BLOGS_FAIL,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_USER_BLOGS_FAIL,
  GET_USER_BLOGS_REQUEST,
  GET_USER_BLOGS_SUCCESS,
  GET_SINGLE_BLOG_FAIL,
  GET_SINGLE_BLOG_REQUEST,
  GET_SINGLE_BLOG_SUCCESS,
  POST_BLOG_FAIL,
  POST_BLOG_REQUEST,
  POST_BLOG_SUCCESS,
  POST_BLOG_SUCCESS_RESET,
  UPDATE_PERSONAL_BLOG_REQUEST,
  UPDATE_PERSONAL_BLOG_SUCCESS,
  UPDATE_PERSONAL_BLOG_SUCCESS_RESET,
  UPDATE_PERSONAL_BLOG_FAIL,
} from "../constants/blogsConstants";

export const postBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_BLOG_REQUEST:
      return { loading: true };
    case POST_BLOG_SUCCESS:
      return { loading: false, success: true, blog: action.payload };
    case POST_BLOG_SUCCESS_RESET:
      return { ...state, loading: false, success: false };
    case POST_BLOG_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const blogListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case GET_BLOGS_REQUEST:
      return { loading: true, blogs: [] };
    case GET_BLOGS_SUCCESS:
      return { loading: false, blogs: action.payload };
    case GET_BLOGS_FAIL:
      return { loading: false, blogs: [], error: action.payload };
    default:
      return state;
  }
};

export const singleBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_BLOG_REQUEST:
      return { loading: true };
    case GET_SINGLE_BLOG_SUCCESS:
      return { loading: false, blog: action.payload };
    case GET_SINGLE_BLOG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userBlogListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case GET_USER_BLOGS_REQUEST:
      return { loading: true, blogs: [] };
    case GET_USER_BLOGS_SUCCESS:
      return { loading: false, blogs: action.payload };
    case GET_USER_BLOGS_FAIL:
      return { loading: false, blogs: [], error: action.payload };
    default:
      return state;
  }
};

export const personalBlogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PERSONAL_BLOG_REQUEST:
      return { loading: true };
    case DELETE_PERSONAL_BLOG_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PERSONAL_BLOG_SUCCESS_RESET:
      return { loading: false, success: false };
    case DELETE_PERSONAL_BLOG_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const personalBlogUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PERSONAL_BLOG_REQUEST:
      return { loading: true };
    case UPDATE_PERSONAL_BLOG_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_PERSONAL_BLOG_SUCCESS_RESET:
      return { loading: false, success: false };
    case UPDATE_PERSONAL_BLOG_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
