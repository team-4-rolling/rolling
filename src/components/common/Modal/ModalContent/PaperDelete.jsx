import Button from "../../Button/Button";
import theme from "../../../../styles/theme";
import * as C from "../../../../constants/messageConstants";
//
export default function PaperDelete({ children, onClick }) {
  const handleDelete = () => {
    onClick();
  };
  return (
    <div>
      <div>{children}</div>
      <div>
        <Button $font={theme.font.H5Regular} onClick={handleDelete}>
          {C.BUTTON_LABELS.DELETE}
        </Button>
      </div>
    </div>
  );
}
