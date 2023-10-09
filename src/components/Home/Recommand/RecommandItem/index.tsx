import { useGetAllCompanyListQuery } from "@src/queries/Company/company.query";
import { useInView } from "react-intersection-observer";
import logo from "@src/assets/images/Common/Logo.svg";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RecommandItems() {
  const { data: companyList, fetchNextPage } = useGetAllCompanyListQuery({
    suspense: true,
  });
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <S.RecommandItemContainer>
      {companyList?.pages[0].data.length!! > 0 ? (
        companyList?.pages.map((data) =>
          data.data.map((item) => (
            <S.RecommandItemBox
              ref={ref}
              key={item.companyId.id}
              onClick={() => navigate(`/company/${item.companyId.id}`)}
            >
              <img src={item.companyDetails.imgUrl || logo} alt="이미지 없음" />
              <p>{item.companyDetails.name}</p>
            </S.RecommandItemBox>
          ))
        )
      ) : (
        <div>게시물이 없습니다.</div>
      )}
    </S.RecommandItemContainer>
  );
}
