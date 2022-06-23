import { Alert, Box, LinearProgress, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBlog } from "../actions/blogActions";
import SingleBlogDetails from "../components/blog/SingleBlogDetails";

function SingleBlogPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogId } = useParams();

  const { userAuthInfo } = useSelector((state) => state.userLogin);

  const { loading, error, blog } = useSelector((state) => state.singleBlog);

  useEffect(() => {
    if (!userAuthInfo?.token) {
      navigate("/?page=sign-in&redirect=blog/" + blogId);
    }
  }, [blogId, navigate, userAuthInfo]);

  useEffect(() => {
    if (blogId) {
      dispatch(getSingleBlog(blogId));
    }
  }, [dispatch, blogId]);

  return (
    <Stack>
      {loading && <LinearProgress sx={{ width: "100%" }} />}

      {error && (
        <Alert severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      )}
      <Box
        maxWidth={800}
        width={"100%"}
        alignSelf={"center"}
        justifyContent={"center"}
      >
        {blog?.id && <SingleBlogDetails blog={blog} />}
      </Box>
    </Stack>
  );
}

export default SingleBlogPage;
