import Button from "../../Button/Button";
import theme from "../../../../styles/theme";
export default function PaperDelete({ children, onClick }) {
  const handleDelete = () => {
    onClick();
  };
  return (
    <div>
      <div>{children}</div>
      <div>
        <Button $font={theme.font.H5Regular} onClick={handleDelete}>
          삭제
        </Button>
      </div>
    </div>
  );
}
