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

  return (
    <S.MainItemContainer>
      <S.MainItemListContainer>
        <S.MainItemWrapper>
          {searchCompany?.pages[0].data.length!! > 0 ? (
            searchCompany?.pages.map((data) =>
              data.data.map((item) => (
                <S.MainItemBox
                  key={item.companyId.id}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <S.CompanyLogoContainer
                    image={item.companyDetails.imgUrl || logo}
                  />

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