import { useInView } from "react-intersection-observer";
import { useGetCompanyListQuery } from "../../../queries/Company/company.query";
import * as S from "./style";
import { useEffect } from "react";

export default function HomeItem() {
  // const { data: allList, fetchNextPage } = useGetCompanyListQuery({
  //   suspense: true,
  // });
  // const [ref, inView] = useInView();
  // console.log(allList);

  // useEffect(() => {
  //   if (inView) {
  //     fetchNextPage();
  //   }
  // }, [inView]);
  return (
    <>
      {/* {allList?.pages.map((data) =>
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
      <div ref={ref} /> */}
      {Array.from({ length: 14 }).map((item, idx) => (
        <S.CompanyItemContainer key={idx}>
          <S.CompanyImageContainer>
            <S.CompanyImage image={""} />
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
                수평관계, 카카오로 오세요.
              </S.CompanyIntroduce>
              <S.CompanyDescription>
                카카오 크루는 모두 동등한 대우를 받아요.
              </S.CompanyDescription>
            </div>
            <ul>
              <li>#대기업</li>
              <li>#워라벨 랭킹 3위</li>
            </ul>
          </S.CompanyEtcContainer>
        </S.CompanyItemContainer>
      ))}
    </>
  );
}
