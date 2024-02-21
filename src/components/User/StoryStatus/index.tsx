import * as S from "./style";
import printer from "@src/assets/icons/Story/printer.svg";
import { getTimeAgo } from "@stubee2/stubee2-rolling-util";
import write from "@src/assets/icons/Company/write.png";
import { useNavigate } from "react-router-dom";
import { useGetStoryMyStatusQuery } from "@src/services/Story/queries";

export default function StoryStatus() {
  const { data: storyStatus, isError } = useGetStoryMyStatusQuery();
  const { count, lastModifiedDate } = storyStatus!!;
  const navigate = useNavigate();

  return (
    <div>
      <S.Container>
        <S.Wrapper>
          <S.IconCotainer>
            <img src={printer} alt="이미지 없음" />
          </S.IconCotainer>

          <S.RegistStoryText>
            <p>스토리를 등록하여</p>
            <p>후배들에게 더 많은 이야기를 들려주세요!</p>
          </S.RegistStoryText>
        </S.Wrapper>

        <S.Wrapper>
          <div>
            <S.WroteStoryCount>
              내가 작성한 롤링 Story · {isError ? 0 : count}개
            </S.WroteStoryCount>
            <S.StatusText>
              {count > 0
                ? "최근 업데이트 " + getTimeAgo(new Date(lastModifiedDate))
                : "롤링한 회사가 없습니다."}
            </S.StatusText>
          </div>

          <S.StoryButton onClick={() => navigate("/story")}>
            <p>스토리 등록</p>
            <img src={write} alt="이미지 없음" />
          </S.StoryButton>
        </S.Wrapper>
      </S.Container>
    </div>
  );
}
