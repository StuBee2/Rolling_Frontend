import { useGetCompanySerachListQuery } from "@src/queries/Company/company.query";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import * as S from "../../style";
import logo from "@src/assets/images/Common/Logo.svg";

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
      <S.MainItemListContainer>
        <S.MainItemWrapper>
          {companyList![0].data.length!! > 0 ? (
            companyList!.map((data) =>
              data.data.map((item) => (
                <S.MainItemBox
                  key={item.companyId.id}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <S.CompanyLogoContainer>
                    <S.LogoImg src={item.companyDetails.imgUrl || logo} />
                  </S.CompanyLogoContainer>

                  <S.CompanyContentContainer>
                    <S.CompanyNameAndCreatedAt>
                      {item.companyDetails.name} |{" "}
                      {getDateText(new Date(item.companyDetails.createdAt))}
                    </S.CompanyNameAndCreatedAt>

                    <S.CompanyDescriptionAndAddress>
                      <S.CompanyDescription>
                        {item.companyDetails.description}
                      </S.CompanyDescription>

                      <S.CompanyAddress>
                        {item.companyDetails.companyAddress.address}
                      </S.CompanyAddress>
                    </S.CompanyDescriptionAndAddress>
                  </S.CompanyContentContainer>
                </S.MainItemBox>
              ))
            )
          ) : (
            <p>검색한 회사가 없습니다.</p>
          )}
        </S.MainItemWrapper>
      </S.MainItemListContainer>
    </S.MainItemContainer>
  );
}
