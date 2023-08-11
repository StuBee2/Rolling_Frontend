import { useInView } from "react-intersection-observer";
import { useGetAllCompanyListQuery } from "../../../queries/Company/company.query";
import * as S from "./style";
import { useEffect } from "react";
import HomeSkeleton from "../../Common/Skeleton/Home";

export default function HomeItem() {
  const { data: allList, fetchNextPage } = useGetAllCompanyListQuery({
    suspense: true,
  });
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      {allList?.pages.map((data) =>
        data.data.map((item) => (
          <S.CompanyItemContainer key={item.companyId.id}>
            <S.CompanyImageContainer>
              <S.CompanyImage image={item.companyDetails.imgUrl} />
              <S.CompanyRegister
                src="https://img.seoul.co.kr//img/upload/2023/06/02/SSC_20230602152204.jpg"
                alt="이미지 없음"
              />
            </S.CompanyImageContainer>
            <S.CompanyEtcContainer>
              <S.RegisterNameAndCreatedAt>
                7기 최아영 | 2023.05.10
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
      )}
      <div ref={ref} />
    </>
  );
}
