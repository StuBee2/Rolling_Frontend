import { useGetAllAndSearchCompanyListQuery } from "@src/queries/Company/company.query";
import { CompanyAllAndSearchAtom } from "@src/stores/company/company.store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { getDateText } from "@src/utils/Date/getDateCounter";

export default function HomeItems() {
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
    <S.HomeItemsContainer>
      {companyList?.pages[0].data.length ? (
        companyList.pages.map((data) =>
          data.data.map((item) => (
            <>
              <S.HomeItemWrapper key={item.companyId.id}>
                <S.CompanyImage
                  image={
                    item.companyDetails.imgUrl ||
                    "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png"
                  }
                />
                <S.CompanyEtcContainer>
                  <S.CompanyNameAndCreatedAt>
                    {item.companyDetails.name} |{" "}
                    {getDateText(new Date(item.companyDetails.createdAt))}
                  </S.CompanyNameAndCreatedAt>
                  <div>
                    <S.CompanyDescription>
                      {item.companyDetails.description}
                    </S.CompanyDescription>
                    <S.CompanyAddress>
                      {item.companyDetails.companyAddress.address}
                    </S.CompanyAddress>
                  </div>
                  <S.CompanyTagUl>
                    <li>#대기업</li>
                    <li>#워라벨 랭킹 3위</li>
                  </S.CompanyTagUl>
                </S.CompanyEtcContainer>
              </S.HomeItemWrapper>
              <S.HomeItemWrapper key={item.companyId.id}>
                <S.CompanyImage
                  image={
                    item.companyDetails.imgUrl ||
                    "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png"
                  }
                />
                <S.CompanyEtcContainer>
                  <S.CompanyNameAndCreatedAt>
                    {item.companyDetails.name} |{" "}
                    {getDateText(new Date(item.companyDetails.createdAt))}
                  </S.CompanyNameAndCreatedAt>
                  <div>
                    <S.CompanyDescription>
                      {item.companyDetails.description}
                    </S.CompanyDescription>
                    <S.CompanyAddress>
                      {item.companyDetails.companyAddress.address}
                    </S.CompanyAddress>
                  </div>
                  <S.CompanyTagUl>
                    <li>#대기업</li>
                    <li>#워라벨 랭킹 3위</li>
                  </S.CompanyTagUl>
                </S.CompanyEtcContainer>
              </S.HomeItemWrapper>
              <S.HomeItemWrapper key={item.companyId.id}>
                <S.CompanyImage
                  image={
                    item.companyDetails.imgUrl ||
                    "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png"
                  }
                />
                <S.CompanyEtcContainer>
                  <S.CompanyNameAndCreatedAt>
                    {item.companyDetails.name} |{" "}
                    {getDateText(new Date(item.companyDetails.createdAt))}
                  </S.CompanyNameAndCreatedAt>
                  <div>
                    <S.CompanyDescription>
                      {item.companyDetails.description}
                    </S.CompanyDescription>
                    <S.CompanyAddress>
                      {item.companyDetails.companyAddress.address}
                    </S.CompanyAddress>
                  </div>
                  <S.CompanyTagUl>
                    <li>#대기업</li>
                    <li>#워라벨 랭킹 3위</li>
                  </S.CompanyTagUl>
                </S.CompanyEtcContainer>
              </S.HomeItemWrapper>
              <S.HomeItemWrapper key={item.companyId.id}>
                <S.CompanyImage
                  image={
                    item.companyDetails.imgUrl ||
                    "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png"
                  }
                />
                <S.CompanyEtcContainer>
                  <S.CompanyNameAndCreatedAt>
                    {item.companyDetails.name} |{" "}
                    {getDateText(new Date(item.companyDetails.createdAt))}
                  </S.CompanyNameAndCreatedAt>
                  <div>
                    <S.CompanyDescription>
                      {item.companyDetails.description}
                    </S.CompanyDescription>
                    <S.CompanyAddress>
                      {item.companyDetails.companyAddress.address}
                    </S.CompanyAddress>
                  </div>
                  <S.CompanyTagUl>
                    <li>#대기업</li>
                    <li>#워라벨 랭킹 3위</li>
                  </S.CompanyTagUl>
                </S.CompanyEtcContainer>
              </S.HomeItemWrapper>
              <S.HomeItemWrapper key={item.companyId.id}>
                <S.CompanyImage
                  image={
                    item.companyDetails.imgUrl ||
                    "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png"
                  }
                />
                <S.CompanyEtcContainer>
                  <S.CompanyNameAndCreatedAt>
                    {item.companyDetails.name} |{" "}
                    {getDateText(new Date(item.companyDetails.createdAt))}
                  </S.CompanyNameAndCreatedAt>
                  <div>
                    <S.CompanyDescription>
                      {item.companyDetails.description}
                    </S.CompanyDescription>
                    <S.CompanyAddress>
                      {item.companyDetails.companyAddress.address}
                    </S.CompanyAddress>
                  </div>
                  <S.CompanyTagUl>
                    <li>#대기업</li>
                    <li>#워라벨 랭킹 3위</li>
                  </S.CompanyTagUl>
                </S.CompanyEtcContainer>
              </S.HomeItemWrapper>
              <S.HomeItemWrapper key={item.companyId.id}>
                <S.CompanyImage
                  image={
                    item.companyDetails.imgUrl ||
                    "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png"
                  }
                />
                <S.CompanyEtcContainer>
                  <S.CompanyNameAndCreatedAt>
                    {item.companyDetails.name} |{" "}
                    {getDateText(new Date(item.companyDetails.createdAt))}
                  </S.CompanyNameAndCreatedAt>
                  <div>
                    <S.CompanyDescription>
                      {item.companyDetails.description}
                    </S.CompanyDescription>
                    <S.CompanyAddress>
                      {item.companyDetails.companyAddress.address}
                    </S.CompanyAddress>
                  </div>
                  <S.CompanyTagUl>
                    <li>#대기업</li>
                    <li>#워라벨 랭킹 3위</li>
                  </S.CompanyTagUl>
                </S.CompanyEtcContainer>
              </S.HomeItemWrapper>
            </>
          ))
        )
      ) : (
        <div>게시물이 없습니다.</div>
      )}
      <div ref={ref} />
    </S.HomeItemsContainer>
  );
}
