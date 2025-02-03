import { Suspense, lazy } from "react";
import * as S from "./RollingPage.style";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton/Skeleton.jsx";
//
const DynamicContent = lazy(() => import("./Messages.data.jsx")); // ✨ 데이터 의존 부분만 분리

export default function Message({
  isEdit,
  messages,
  deletedIds,
  setDeletedIds,
}) {
  //
  return (
    <S.GridBoxes>
      {!isEdit && (
        <S.CreateBox>
          <Link to="message">
            <S.Plus src={PlusIcon} />
          </Link>
        </S.CreateBox>
      )}
      <Suspense fallback={<Skeleton />}>
        <DynamicContent
          deletedIds={deletedIds}
          setDeletedIds={setDeletedIds}
          isEdit={isEdit}
          messages={messages}
        />
      </Suspense>
    </S.GridBoxes>
  );
}
