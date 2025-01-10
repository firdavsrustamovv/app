import React from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";
import { useSelector } from "react-redux";

function Create({
  title,
  setTitle,
  description,
  setDescription,
  body,
  setBody,
  formSubmit,
  create,
  buttonName,
}) {
  const { isLoading } = useSelector((state) => state.article);
  return (
    <div className="text-center">
      <h1 className="fs-2">{create} article</h1>
      <div className="w-75% mx-auto">
        <form onSubmit={formSubmit}>
          <Input
            label={"Title"}
            state={title}
            setState={setTitle}
            type={"text"}
          />
          <TextArea
            label={"Description"}
            state={description}
            setState={setDescription}
          />
          <TextArea
            label={"Body"}
            state={body}
            setState={setBody}
            height="300px"
          />
          <button
            className="btn btn-primary w-100 py-2 mt-2"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Loading..." : buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
