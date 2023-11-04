import {
  CompanyAddress,
  CompanyCreatedAt,
  CompanyDescription,
  CompanyDescriptionAndAddress,
  CompanyName,
} from "@src/components/Home/Main/style";
import { useGetAllCompanyListQuery } from "@src/queries/Company/company.query";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { CompanyContent, CompanyLogoContainer, LogoImg } from "../../style";
import * as S from "./style";
import developer from "@src/assets/icons/Home/developer.png";
import logo from "@src/assets/icons/Logo/logo.png";

export default function AllList() {
  const { data: recommandList, fetchNextPage } = useGetAllCompanyListQuery({
    suspense: true,
  });
  const navigate = useNavigate();
  const sizeOfRecommandList = recommandList?.pages[0].data.length;
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <S.Container>
      <S.Title>
        <img src={developer} alt="이미지 없음" />
        <p>졸업생들이 롤링한 모든 기업들이에요!</p>
      </S.Title>

      <S.Wrapper>
        {sizeOfRecommandList!! > 0 ? (
          recommandList?.pages.map((data) =>
            data.data.map((item) => (
              <S.RecommandBox key={item.companyId.id}>
                <CompanyLogoContainer
                  rgb={getRgb(item.companyDetails.companyLogo.rgb)}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <LogoImg
                    src={item.companyDetails.companyLogo.url || logo}
                    alt="이미지 없음"
                  />
                </CompanyLogoContainer>

                <CompanyContent>
                  <CompanyName
                    onClick={() => navigate(`/company/${item.companyId.id}`)}
                  >
                    {item.companyDetails.name}
                  </CompanyName>

                  <CompanyDescriptionAndAddress>
                    <CompanyDescription>
                      {item.companyDetails.description}
                    </CompanyDescription>

                    <CompanyAddress>
                      {item.companyDetails.companyAddress.address}
                    </CompanyAddress>

                    <CompanyCreatedAt>
                      {getDateText(new Date(item.companyDetails.createdAt))}
                    </CompanyCreatedAt>
                  </CompanyDescriptionAndAddress>
                </CompanyContent>
              </S.RecommandBox>
            ))
          )
        ) : (
          <S.NoneData>데이터가 없습니다.</S.NoneData>
        )}
        <div ref={ref} />
      </S.Wrapper>
    </S.Container>
  );
}
