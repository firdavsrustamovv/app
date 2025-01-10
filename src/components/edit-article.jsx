import React, { useEffect, useState } from "react";
import Create from "../ui/create";
import { useDispatch } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/article";
import ArticleService from "../service/article";
import { useNavigate, useParams } from "react-router-dom";

function EditArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const articleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        setTitle(response.article.title);
        setDescription(response.article.description);
        setBody(response.article.body);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };
    articleDetail();
  }, []);
  const formSubmit = async (e) => {
    e.preventDefault();
    const article = {
      title: title,
      description: description,
      body: body,
    };
    dispatch(postArticleStart());
    try {
      await ArticleService.editArticle(slug, article);
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
        create={"Edit"}
        buttonName={"Edit"}
      />
    </div>
  );
}

export default EditArticle;
