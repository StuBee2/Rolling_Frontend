import { useInView } from "react-intersection-observer";
import logo from "@src/assets/icons/Logo/logo.svg";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { useGetAllCompanyListQuery } from "@src/services/Company/queries";
import { Row } from "@src/styles/flex";

const RecommandItem = () => {
  const { data, fetchNextPage } = useGetAllCompanyListQuery({ suspense: true });
  const companyList = data?.pages;
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      {companyList!![0].data.length!! > 0 ? (
        <S.RecommandItemContainer>
          <Row
            $alignItems={"center"}
            $columnGap={"1rem"}
            $justifyContent={"center"}
          >
            {companyList?.map((data) =>
              data.data.map((item) => (
                <S.RecommandItemBox
                  key={item.companyId.id}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <S.ImageContainer rgb={getRgb(item.companyDetails.logo.rgb)}>
                    <img
                      src={item.companyDetails.logo.url || logo}
                      alt="이미지 없음"
                    />
                  </S.ImageContainer>
                  <p>{item.companyDetails.name}</p>
                </S.RecommandItemBox>
              ))
            )}
            <div ref={ref} />
          </Row>
        </S.RecommandItemContainer>
      ) : (
        <p>졸업생들이 추천하는 회사가 없습니다.</p>
      )}
    </>
  );
};

export default RecommandItem;
