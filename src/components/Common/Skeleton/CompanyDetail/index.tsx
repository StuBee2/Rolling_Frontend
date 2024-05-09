import { Column, Row } from "@src/styles/flex";
import { SkeletonBox } from "../Common/style";
import * as S from "./style";

const CompanyDetailSkeleton = () => {
  return (
    <S.CompanySkeletonContainer>
      <S.CompanySkeletonStarGrade>
        <div>
          <SkeletonBox width="110px" height="110px" />
        </div>
        <S.CompanyStarGradeSkeleton />
      </S.CompanySkeletonStarGrade>

      <S.CompanySkeletonContent>
        <Column $rowGap={"1rem"}>
          <SkeletonBox width="250px" height="50px" />
          <SkeletonBox width="300px" height="25px" />
        </Column>

        <Column $rowGap={"15px"}>
          <SkeletonBox width="100%" height="450px" />
          <Row $width={"100%"} $justifyContent={"flex-end"}>
            <SkeletonBox width="150px" height="50px" />
          </Row>
        </Column>
      </S.CompanySkeletonContent>
    </S.CompanySkeletonContainer>
  );
};

export default CompanyDetailSkeleton;
