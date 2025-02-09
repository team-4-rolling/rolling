import * as S from "./Editor.styles";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState, useEffect } from "react";

export default function EditorContent({ editorRef, content, onChange }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const content = convertToRaw(editorState.getCurrentContent());
    onChange(JSON.stringify(content));
  };

  return (
    <S.StyledEditor>
      <Editor
        placeholder="메시지 내용을 작성해 주세요."
        localization={{
          locale: "ko",
        }}
        toolbar={{
          options: ["inline"],
          inline: {
            options: ["bold", "italic", "underline", "strikethrough"],
          },
        }}
        editorState={editorState}
        editorClassName="editor"
        toolbarClassName="editorToollbar"
        wrapperClassName="editorWrapper"
        onEditorStateChange={onEditorStateChange}
      />
    </S.StyledEditor>
  );
}
