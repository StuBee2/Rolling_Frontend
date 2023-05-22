import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 694px;
  height: 251px;

  background-color: #ffffff;
  margin-top: 20px;
  padding-bottom: 20px;

  border-radius: 12px;
  box-shadow: 2px 2px 14px 0 rgba(0, 164, 73, 0.08);
  border: 1px solid rgba(3, 213, 128, 0.8);

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const MyInfoTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #96a1aa;
  margin-left: 15px;
`;

export const CenterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MyInfo = styled.div<{ isBottom?: boolean; isTop?: boolean }>`
  width: 95%;
  height: ${(props) => (props.isTop ? "80px" : "50px")};
  border-bottom: ${(props) =>
    !props.isBottom && "1px solid rgba(146, 146, 148, 0.3);"};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileImg = styled.img`
  width: 56px;
  height: 56px;

  object-fit: cover;
  background-color: gray;
  border-radius: 4rem;
  box-shadow: 0 3px 6px 0 rgba(29, 34, 53, 0.08);
`;

export const ProfileAbleBox = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
`;

export const ProfileInfo = styled.div<{ isName: boolean }>`
  font-size: ${(props) => (props.isName ? "24px" : "14px")};
  font-weight: ${(props) => (props.isName ? "700" : "400")};
  color: ${(props) => (props.isName ? "#1e1e23" : "#7b8994CC")};
`;

export const GitInfoContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const ProfileGitId = styled.div`
  display: flex;
  margin-left: 10px;
  font-weight: 500;
`;

export const EditBtn = styled.button`
  color: #7b8994;

  font-size: 14px;
  font-weight: 500;

  text-align: center;
  padding: 2px 9px 3px;

  border-radius: 4px;
  border: 1px solid rgba(212, 216, 229, 0.5);
  background-color: rgba(212, 216, 229, 0.25);

  cursor: pointer;
`;
