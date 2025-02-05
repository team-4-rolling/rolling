import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function EditorContent({ editorRef, content, onChange }) {
  const toolbarItems = [["bold", "italic", "strike"]];

  const handleEditorChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const currentContent = editorInstance.getMarkdown();
    onChange(currentContent);
  };

  return (
    <div style={{ zIndex: "1" }}>
      <Editor
        ref={editorRef}
        placeholder="메시지 내용을 입력해 주세요"
        initialValue={content}
        height="260px"
        language="ko-KR"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        hideModeSwitch={true}
        toolbarItems={toolbarItems}
        onChange={handleEditorChange}
      />
    </div>
  );
}
