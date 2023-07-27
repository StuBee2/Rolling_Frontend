import * as S from "./style";

interface Props {
  ranking: number;
}

export default function RankItem({ ranking }: Props) {
  return (
    <S.RankItem>
      <S.CompanyRanking>{ranking}</S.CompanyRanking>
      <S.CompanyContent>
        <S.CompanyLogo
          src="https://image.msscdn.net/mfile_s01/fb/share_musinsa.png"
          alt="이미지 없음"
        />
        <div>
          <S.CompanyName>MUSINSA</S.CompanyName>
          <S.CompanyFeatures>sns 플랫폼</S.CompanyFeatures>
        </div>
      </S.CompanyContent>
    </S.RankItem>
  );
}
