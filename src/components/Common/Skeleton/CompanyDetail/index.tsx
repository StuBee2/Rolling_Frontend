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
        <S.Title>
          <SkeletonBox width="250px" height="50px" />
          <SkeletonBox width="300px" height="25px" />
        </S.Title>

        <S.Content>
          <SkeletonBox width="100%" height="450px" />
          <S.Button>
            <SkeletonBox width="150px" height="50px" />
          </S.Button>
        </S.Content>
      </S.CompanySkeletonContent>
    </S.CompanySkeletonContainer>
  );
};

export default CompanyDetailSkeleton;
