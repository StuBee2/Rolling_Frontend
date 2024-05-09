import { getDateText } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import * as S from "../../style";
import logo from "@src/assets/icons/Logo/logo.svg";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { NoneData } from "./style";
import { useGetCompanySerachListQuery } from "@src/services/Company/queries";
import { Column, Row } from "@src/styles/flex";

interface Props {
  company: string;
}

const SearchItem = ({ company }: Props) => {
  const { data: searchCompany } = useGetCompanySerachListQuery(company, {
    suspense: true,
  });
  const navigate = useNavigate();
  const companyList = searchCompany?.pages;

  return (
    <Column $width={"100%"} $height={"100%"} $rowGap={"15px"}>
      <Column $width={"100%"} $height={"100%"} $wrap={"wrap"}>
        <Row $width={"100%"} $height={"100%"} $wrap={"wrap"} $gap={"1.5rem"}>
          {companyList![0].data.length!! > 0 ? (
            companyList!.map((data) =>
              data.data.map((item) => (
                <S.MainItemBox
                  key={item.companyId.id}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <S.CompanyLogoContainer
                    rgb={getRgb(item.companyDetails.logo.rgb)}
                  >
                    <S.LogoImg src={item.companyDetails.logo.url || logo} />
                  </S.CompanyLogoContainer>

                  <S.CompanyContentContainer>
                    <S.CompanyNameAndCreatedAt>
                      <S.CompanyName
                        onClick={() =>
                          navigate(`/company/${item.companyId.id}`)
                        }
                      >
                        {item.companyDetails.name}
                      </S.CompanyName>

                      <S.CompanyAddress>
                        |{" "}
                        {item.companyDetails.address.address +
                          (" " + (item.companyDetails.address.etc || ""))}
                      </S.CompanyAddress>
                    </S.CompanyNameAndCreatedAt>

                    <Column $rowGap={"6px"}>
                      <S.CompanyDescription>
                        {item.companyDetails.description}
                      </S.CompanyDescription>

                      <S.CompanyCreatedAt>
                        {getDateText(new Date(item.createdAt))}
                      </S.CompanyCreatedAt>
                    </Column>
                  </S.CompanyContentContainer>
                </S.MainItemBox>
              ))
            )
          ) : (
            <NoneData>
              <p>
                검색한 회사가 없습니다.
                <span onClick={() => navigate("/story")}> 스토리 등록</span>은
                어떠세요?
              </p>
            </NoneData>
          )}
        </Row>
      </Column>
    </Column>
  );
};

export default SearchItem;
