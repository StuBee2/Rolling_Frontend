import * as S from "../../style";
import { getCompanyRankIntroduce } from "@src/utils/Rank/getCompanyRankIntroduce";
import smileFace from "@src/assets/icons/Home/smileFace.svg";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import logo from "@src/assets/icons/Logo/logo.svg";
import { RankCategoryTitle, RankNumber } from "./style";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { useGetCompanyRankSelectQuery } from "@src/services/Company/queries";

interface Props {
  rankCategory: string;
}

function RankItem({ rankCategory }: Props) {
  const { data: rankInfo } = useGetCompanyRankSelectQuery(rankCategory);
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

                    <S.CompanyDescriptionAndAddress>
                      <S.CompanyDescription>
                        {item.companyDetails.description}
                      </S.CompanyDescription>

                      <S.CompanyCreatedAt>
                        {getDateText(new Date(item.createdAt))}
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
