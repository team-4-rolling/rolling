import Button from "../../components/common/Button/Button";
import smail from "../../assets/icons/smile.svg";
import share from "../../assets/icons/share.svg";

export default function ListPage() {
  return (
    <>
      <Button>확인</Button>
      <br />
      <Button medium>확인</Button>
      <br />
      <Button large>확인</Button>
      <br />
      <Button outline>확인</Button>
      <br />
      <Button outlineMedium>
        <img src={smail} />
        추가
      </Button>
      <br />
      <Button outlineSmall>
        <img src={share} />
      </Button>
    </>
  );
}
