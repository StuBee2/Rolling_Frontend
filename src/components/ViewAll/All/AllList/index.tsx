import {
  CompanyAddress,
  CompanyCreatedAt,
  CompanyDescription,
  CompanyName,
} from "@src/components/Home/Main/style";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { CompanyContent, CompanyLogoContainer, LogoImg } from "../../style";
import * as S from "./style";
import developer from "@src/assets/icons/Home/developer.svg";
import logo from "@src/assets/icons/Logo/logo.svg";
import { useGetAllCompanyListQuery } from "@src/services/Company/queries";
import { Column } from "@src/styles/flex";

const AllList = () => {
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
    <Column $rowGap={"20px"}>
      <S.Title>
        <S.Image src={developer} alt="이미지 없음" />
        <S.Text>졸업생들이 롤링한 모든 기업들이에요!</S.Text>
      </S.Title>

      <S.Wrapper>
        {sizeOfRecommandList!! > 0 ? (
          recommandList?.pages.map((data) =>
            data.data.map((item) => (
              <S.CompanyBox key={item.companyId.id}>
                <CompanyLogoContainer
                  rgb={getRgb(item.companyDetails.logo.rgb)}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <LogoImg
                    src={item.companyDetails.logo.url || logo}
                    alt="이미지 없음"
                  />
                </CompanyLogoContainer>

                <CompanyContent>
                  <CompanyName
                    onClick={() => navigate(`/company/${item.companyId.id}`)}
                  >
                    {item.companyDetails.name}
                  </CompanyName>

                  <Column $rowGap={"6px"}>
                    <CompanyDescription>
                      {item.companyDetails.description}
                    </CompanyDescription>

                    <CompanyAddress>
                      {item.companyDetails.address.address +
                        (" " + (item.companyDetails.address.etc || ""))}
                    </CompanyAddress>

                    <CompanyCreatedAt>
                      {getDateText(new Date(item.createdAt))}
                    </CompanyCreatedAt>
                  </Column>
                </CompanyContent>
              </S.CompanyBox>
            ))
          )
        ) : (
          <S.NoneData>데이터가 없습니다.</S.NoneData>
        )}
        <div ref={ref} />
      </S.Wrapper>
    </Column>
  );
};

export default AllList;
