import { useGetCompanyRankSelectQuery } from "@src/queries/Company/company.query";
import * as S from "./style";
import {
  CompanyAddress,
  CompanyCreatedAt,
  CompanyDescription,
  CompanyDescriptionAndAddress,
  CompanyName,
} from "@src/components/Home/Main/style";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { getRankIcon } from "@src/utils/Rank/getRankIcon";
import { RankNumber } from "@src/components/Home/Main/Rank/RankItem/style";
import { useNavigate } from "react-router-dom";
import { CompanyContent, CompanyLogoContainer, LogoImg } from "../../style";
import logo from "@src/assets/icons/Logo/logo.png";
import rightArrow from "@src/assets/icons/Rank/rightArrow.png";
import leftArrow from "@src/assets/icons/Rank/leftArrow.png";
import { useRef } from "react";
import { getSlideWidth } from "@src/utils/Rank/getSlideWidth";

interface Props {
  category: string;
  title: string;
}

export default function RankList({ category, title }: Props) {
  const { data: rankList } = useGetCompanyRankSelectQuery(category, {
    suspense: true,
  });
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollHandler = (position: "left" | "right") => {
    const scrollRef = scrollContainerRef.current;
    const slideWidth = getSlideWidth(scrollRef!!.clientWidth);

    if (scrollRef) {
      if (position === "left") {
        scrollRef.scrollLeft -= slideWidth!!;
      } else {
        scrollRef.scrollLeft += slideWidth!!;
      }
    }
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>
          <img src={getRankIcon(category)} alt="이미지 없음" />
          <p>{title}</p>
        </S.Title>

        <S.ArrowContainer>
          <S.SliderButton onClick={() => scrollHandler("left")}>
            <img src={leftArrow} alt="이미지 없음" />
          </S.SliderButton>
          <S.SliderButton onClick={() => scrollHandler("right")}>
            <img src={rightArrow} alt="이미지 없음" />
          </S.SliderButton>
        </S.ArrowContainer>
      </S.TitleContainer>

      <S.Wrapper ref={scrollContainerRef}>
        <S.Content>
          {rankList?.length!! > 0 ? (
            rankList?.map((item, idx) => (
              <S.RankBox key={item.companyId.id}>
                <CompanyLogoContainer
                  rgb={getRgb(item.companyDetails.companyLogo.rgb)}
                  onClick={() => navigate(`/company/${item.companyId.id}`)}
                >
                  <LogoImg
                    src={item.companyDetails.companyLogo.url || logo}
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
              </S.RankBox>
            ))
          ) : (
            <S.NoneData>데이터가 없습니다.</S.NoneData>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
