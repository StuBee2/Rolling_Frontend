import { useGetCompanyRankSelectQuery } from "@src/queries/Company/company.query";
import * as S from "../../style";
import { getCompanyRankIntroduce } from "@src/utils/Rank/getCompanyRankIntroduce";
import smile from "@src/assets/images/User/smile.svg";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import logo from "@src/assets/images/Common/Logo.svg";
import { RankCategoryTitle, RankNumber } from "./style";

interface Props {
  rankCategory: string;
}

function RankItem({ rankCategory }: Props) {
  const { data: rankInfo } = useGetCompanyRankSelectQuery(rankCategory, {
    suspense: true,
  });
  const rankInfoSlicing = rankInfo?.slice(0, 9);

  const navigate = useNavigate();

  return (
    <S.MainItemContainer>
      <RankCategoryTitle>
        <img src={smile} alt="이미지 없음" />
        <p>{getCompanyRankIntroduce(rankCategory)}</p>
      </RankCategoryTitle>
      <S.MainItemListContainer>
        <S.MainItemWrapper>
          {rankInfoSlicing?.length!! > 0 ? (
            rankInfoSlicing?.map((item, idx) => (
              <S.MainItemBox
                key={item.companyId.id}
                onClick={() => navigate(`/company/${item.companyId.id}`)}
              >
                <RankNumber>{idx + 1}</RankNumber>

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
          ) : (
            <p>랭킹에 등록된 회사들이 없습니다.</p>
          )}
        </S.MainItemWrapper>
      </S.MainItemListContainer>
    </S.MainItemContainer>
  );
}

export default RankItem;
