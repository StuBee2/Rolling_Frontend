import { useInView } from "react-intersection-observer";
import { useGetAllAndSearchCompanyListQuery } from "@src/queries/Company/company.query";
import * as S from "./style";
import { useEffect } from "react";
import { getDateText } from "@src/utils/Date/getDateCounter";
import { useRecoilValue } from "recoil";
import { CompanyAllAndSearchAtom } from "@src/stores/company/company.store";

export default function HomeItem() {
  const searchApiUrl = useRecoilValue(CompanyAllAndSearchAtom);
  const { data: companyList, fetchNextPage } =
    useGetAllAndSearchCompanyListQuery(
      { keyword: searchApiUrl },
      { suspense: true }
    );
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      {companyList?.pages[0].data.length ? (
        companyList?.pages.map((data) =>
          data.data.map((item) => (
            <S.CompanyItemContainer key={item.companyId.id}>
              <S.CompanyImageContainer>
                <S.CompanyImage image={item.companyDetails.imgUrl} />
                <S.CompanyRegister src="" alt="이미지 없음" />
              </S.CompanyImageContainer>
              <S.CompanyEtcContainer>
                <S.RegisterNameAndCreatedAt>
                  {item.companyDetails.name} |{" "}
                  {getDateText(new Date(item.companyDetails.createdAt))}
                </S.RegisterNameAndCreatedAt>
                <div>
                  <S.CompanyIntroduce>
                    {item.companyDetails.description}
                  </S.CompanyIntroduce>
                  <S.CompanyDescription>
                    {item.companyDetails.companyAddress.address}
                  </S.CompanyDescription>
                </div>
                <ul>
                  <li>#대기업</li>
                  <li>#워라벨 랭킹 3위</li>
                </ul>
              </S.CompanyEtcContainer>
            </S.CompanyItemContainer>
          ))
        )
      ) : (
        <div>게시물이 없습니다.</div>
      )}
      <div ref={ref} />
    </>
  );
}
