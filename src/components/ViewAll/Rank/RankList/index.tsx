import * as S from "./style";
import {
  CompanyAddress,
  CompanyCreatedAt,
  CompanyDescription,
  CompanyName,
} from "@src/components/Home/Main/style";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { getRankIcon } from "@src/utils/Rank/getRankIcon";
import { RankNumber } from "@src/components/Home/Main/Rank/RankItem/style";
import { useNavigate } from "react-router-dom";
import { CompanyContent, CompanyLogoContainer, LogoImg } from "../../style";
import logo from "@src/assets/icons/Logo/logo.svg";
import rightArrow from "@src/assets/icons/Rank/rightArrow.png";
import leftArrow from "@src/assets/icons/Rank/leftArrow.png";
import { useRef } from "react";
import { getSlideRankBoxWidth } from "@src/utils/Rank/getSlideRankBoxWidth";
import { useGetCompanyRankSelectQuery } from "@src/services/Company/queries";
import { Column, Row } from "@src/styles/flex";

interface Props {
  category: string;
  title: string;
}

const RankList = ({ category, title }: Props) => {
  const { data: rankList } = useGetCompanyRankSelectQuery(category, {
    suspense: true,
  });
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollHandler = (position: "left" | "right") => {
    const scrollRef = scrollContainerRef.current;
    const slideWidth = getSlideRankBoxWidth(scrollRef!!.clientWidth);

    if (scrollRef) {
      if (position === "left") {
        scrollRef.scrollLeft -= slideWidth!!;
      } else {
        scrollRef.scrollLeft += slideWidth!!;
      }
    }
  };

  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <S.TitleContainer>
        <S.Title>
          <img src={getRankIcon(category)} alt="이미지 없음" />
          <p>{title}</p>
        </S.Title>

        <Row $alignItems={"center"} $columnGap={"5px"}>
          <S.SliderButton onClick={() => scrollHandler("left")}>
            <img src={leftArrow} alt="이미지 없음" />
          </S.SliderButton>
          <S.SliderButton onClick={() => scrollHandler("right")}>
            <img src={rightArrow} alt="이미지 없음" />
          </S.SliderButton>
        </Row>
      </S.TitleContainer>

      <S.Wrapper ref={scrollContainerRef}>
        <Row $columnGap={"2rem"}>
          {rankList?.length!! > 0 ? (
            rankList?.map((item, idx) => (
              <S.RankBox key={item.companyId.id}>
                <CompanyLogoContainer
                  rgb={getRgb(item.companyDetails.logo.rgb)}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <LogoImg
                    src={item.companyDetails.logo.url || logo}
                    alt="이미지 없음"
                  />

                  <RankNumber>{idx + 1}</RankNumber>
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
              </S.RankBox>
            ))
          ) : (
            <S.NoneData>데이터가 없습니다.</S.NoneData>
          )}
        </Row>
      </S.Wrapper>
    </Column>
  );
};

export default RankList;
