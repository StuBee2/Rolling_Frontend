import User from "@src/components/User";
import Story from "@src/components/User/Story";
import Profile from "@src/components/User/Profile";
import { tokenDecode } from "@src/utils/Auth/tokenDecode";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Flex } from "@src/styles/flex";

interface Props {
  page: number;
}

const UserPage = ({ page }: Props) => {
  const memberRole = tokenDecode("access", "authority");
  const navigate = useNavigate();
  return (
    <User>
      {page === 0 && <Profile />}
      {page === 1 &&
        (memberRole === "MEMBER" ? (
          <Story />
        ) : (
          <AlumniCheck>
            <p>동문인증이 필요한 기능입니다.</p>
            <Authenticate onClick={() => navigate("/alumni/certify")}>
              인증하러 가기
            </Authenticate>
          </AlumniCheck>
        ))}
    </User>
  );
};

const AlumniCheck = styled.div`
  font-size: 18px;
  ${Flex({ justifyContent: "center", columnGap: "10px" })}
`;

const Authenticate = styled.p`
  color: rgba(72, 105, 246, 1);
  cursor: pointer;
  &:active {
    color: rgba(86, 103, 193, 1);
  }
`;

export default UserPage;
