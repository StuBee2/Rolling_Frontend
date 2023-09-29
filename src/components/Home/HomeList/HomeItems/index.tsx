import { useGetAllAndSearchCompanyListQuery } from "@src/queries/Company/company.query";
import { CompanyAllAndSearchAtom } from "@src/stores/company/company.store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { getDateText, stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import logo from "@src/assets/Common/Logo.svg";

export default function HomeItems() {
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  const searchApiUrl = useRecoilValue(CompanyAllAndSearchAtom);
  const { data: companyList, fetchNextPage } =
    useGetAllAndSearchCompanyListQuery(
      { keyword: searchApiUrl },
      { suspense: true }
    );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <S.HomeItemsContainer>
      {companyList?.pages[0].data.length ? (
        companyList.pages.map((data) =>
          data.data.map((item) => (
            <S.HomeItemWrapper
              key={item.companyId.id}
              onClick={() => navigate(`/company/${item.companyId.id}`)}
            >
              <S.CompanyImage image={item.companyDetails.imgUrl || logo} />
              <S.CompanyEtcContainer>
                <S.CompanyNameAndCreatedAt>
                  {item.companyDetails.name} |{" "}
                  {getDateText(new Date(item.companyDetails.createdAt))}
                </S.CompanyNameAndCreatedAt>
                <div>
                  <S.CompanyDescription>
                    {stringEllipsis(item.companyDetails.description, 20)}
                  </S.CompanyDescription>
                  <S.CompanyAddress>
                    {stringEllipsis(
                      item.companyDetails.companyAddress.address,
                      20
                    )}
                  </S.CompanyAddress>
                </div>
              </S.CompanyEtcContainer>
            </S.HomeItemWrapper>
          ))
        )
      ) : (
        <div>게시물이 없습니다.</div>
      )}
      <div ref={ref} />
    </S.HomeItemsContainer>
  );
}
