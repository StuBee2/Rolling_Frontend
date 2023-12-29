import { useGetCompanySerachListQuery } from "@src/queries/Company/company.query";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import * as S from "../../style";
import logo from "@src/assets/icons/Logo/logo.svg";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { NoneData } from "./style";

interface Props {
  company: string;
}

export default function SearchItem({ company }: Props) {
  const { data: searchCompany } = useGetCompanySerachListQuery(
    { keyword: company },
    { suspense: true }
  );
  const navigate = useNavigate();
  const companyList = searchCompany?.pages;

  return (
    <S.MainItemContainer>
      <S.MainItemWrapper>
        <S.MainItemContent>
          {companyList![0].data.length!! > 0 ? (
            companyList!.map((data) =>
              data.data.map((item) => (
                <S.MainItemBox
                  key={item.companyId.id}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <S.CompanyLogoContainer
                    rgb={getRgb(item.companyDetails.companyLogo.rgb)}
                  >
                    <S.LogoImg
                      src={item.companyDetails.companyLogo.url || logo}
                    />
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
                        {item.companyDetails.companyAddress.address +
                          (" " +
                            (item.companyDetails.companyAddress.etc || ""))}
                      </S.CompanyAddress>
                    </S.CompanyNameAndCreatedAt>

                    <S.CompanyDescriptionAndAddress>
                      <S.CompanyDescription>
                        {item.companyDetails.description}
                      </S.CompanyDescription>

                      <S.CompanyCreatedAt>
                        {getDateText(new Date(item.companyDetails.createdAt))}
                      </S.CompanyCreatedAt>
                    </S.CompanyDescriptionAndAddress>
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
        </S.MainItemContent>
      </S.MainItemWrapper>
    </S.MainItemContainer>
  );
}
