import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";
import Loader from "../ui/loader";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { getArticleDetail, isLoading } = useSelector((state) => state.article);
  const articleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
    }
  };
  useEffect(() => {
    articleDetail();
  }, [slug]);
  return isLoading ? (
    <Loader />
  ) : (
    getArticleDetail !== null && (
      <div>
        <div>
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{getArticleDetail.title}</h1>
            <p className="col-md-8 fs-4">{getArticleDetail.description}</p>
            <div>
              <p className="text-muted">
                <span className="fw-bold">Created at:</span>{" "}
                {moment(getArticleDetail.createdAt).format("DD MMM, YYYY")}
              </p>
              <div>
                <div className="col-md-6">
                  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className=" col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-primary text-uppercase">
                        {getArticleDetail.author.username}
                      </strong>
                      <p className="card-text mb-auto">
                        {getArticleDetail.author.bio}
                      </p>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                      <svg
                        className="bd-placeholder-img"
                        width={200}
                        height={"100%"}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title>Placeholder</title>
                        <rect
                          width={"100%"}
                          height={"100%"}
                          fill="#55595c"
                        ></rect>
                        <text
                          x={"45%"}
                          y={"53%"}
                          fill="#fff"
                          className="fs-2 text-uppercase p-0 m-0"
                        >
                          {getArticleDetail.author.username.charAt(0)}
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>{getArticleDetail.body}</div>
          </div>
        </div>
      </div>
    )
  );
}
export default ArticleDetail;
