import * as S from "./style";

export default function HomeItem() {
  return (
    <S.CompanyItemContainer>
      <S.CompanyImageContainer>
        <S.CompanyImage image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt94c59f31f6bf707d/637588f532cbfb107070b900/GettyImages-1401702557.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
        <S.CompanyRegister
          src="https://img.seoul.co.kr//img/upload/2023/06/02/SSC_20230602152204.jpg"
          alt="이미지 없음"
        />
      </S.CompanyImageContainer>
      <S.CompanyEtcContainer>
        <S.RegisterNameAndCreatedAt>
          7기 최아영 | 2023.05.10
        </S.RegisterNameAndCreatedAt>
        <div>
          <S.CompanyIntroduce>수평관계, 카카오로 오세요.</S.CompanyIntroduce>
          <S.CompanyDescription>
            카카오 크루는 모두 동등한 대우를 받아요.
          </S.CompanyDescription>
        </div>
        <ul>
          <li>#대기업</li>
          <li>#워라벨 랭킹 3위</li>
        </ul>
      </S.CompanyEtcContainer>
    </S.CompanyItemContainer>
  );
}
