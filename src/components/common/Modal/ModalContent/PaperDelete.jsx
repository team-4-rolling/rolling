import Button from "../../Button/Button";

export default function PaperDelete({ children, onClick }) {
  const handleDelete = () => {
    onClick();
  };
  return (
    <div>
      <div>{children}</div>
      <div>
        <Button onClick={handleDelete}>삭제</Button>
      </div>
    </div>
  );
}
