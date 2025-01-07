import React from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";

function Create({
  title,
  setTitle,
  description,
  setDescription,
  body,
  setBody,
}) {
  return (
    <div className="text-center">
      <h1 className="fs-2">Create article</h1>
      <div className="w-75% mx-auto">
        <form>
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
          <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
