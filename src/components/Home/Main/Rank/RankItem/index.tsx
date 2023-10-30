import { useGetCompanyRankSelectQuery } from "@src/queries/Company/company.query";
import * as S from "../../style";
import { getCompanyRankIntroduce } from "@src/utils/Rank/getCompanyRankIntroduce";
import smileFace from "@src/assets/icons/Home/smileFace.png";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import logo from "@src/assets/icons/Logo/logo.png";
import { RankCategoryTitle, RankNumber } from "./style";
import { getRgb } from "@src/utils/Rgb/getRgb";

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
    <>
      {rankInfoSlicing?.length!! > 0 ? (
        <S.MainItemContainer>
          <RankCategoryTitle>
            <img src={smileFace} alt="이미지 없음" />
            <p>{getCompanyRankIntroduce(rankCategory)}</p>
          </RankCategoryTitle>
          <S.MainItemWrapper>
            <S.MainItemContent>
              {rankInfoSlicing?.map((item, idx) => (
                <S.MainItemBox
                  key={item.companyId.id}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <RankNumber>{idx + 1}</RankNumber>

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
                        | {item.companyDetails.companyAddress.address}
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
              ))}
            </S.MainItemContent>
          </S.MainItemWrapper>
        </S.MainItemContainer>
      ) : (
        <p>BEST 기업 랭킹에 등록된 회사가 없습니다.</p>
      )}
    </>
  );
}

export default RankItem;
