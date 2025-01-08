import React, { useState } from "react";
import Create from "../ui/create";
import ArticleService from "../service/article";
import {
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/article";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    const article = {
      title: title,
      description: description,
      body: body,
    };
    dispatch(postArticleStart());
    try {
      await ArticleService.createArticle(article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
      console.log(error);
    }
  };
  return (
    <div>
      <Create
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
        formSubmit={formSubmit}
      />
    </div>
  );
};

export default CreateArticle;
