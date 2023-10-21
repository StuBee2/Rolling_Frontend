import styled from "styled-components";

export const Container = styled.form`
  width: 90%;
  height: auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

export const InputContainer = styled.div<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => height || "90px"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;
  position: relative;
`;

export const InputTitle = styled.div`
  display: flex;
  column-gap: 3px;
  p {
    color: #737b98;
    font-size: 17px;
    font-weight: 600;
  }
  span {
    color: #ec6a5e;
  }
`;

export const InputStyle = {
  width: "100%",
  height: "60px",
  padding: "0 10px 0 20px",
  fontSize: "16px",
  backgroundColor: "rgba(247, 249, 250, 1)",
};

export const CommuteContainer = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  column-gap: 15px;
`;

export const CommuteWrapper = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const CompanySatisfaction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: space-between;
`;

export const StarGradeContainer = styled.div`
  padding: 1rem;
  overflow-x: hidden;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      overflow-x: scroll;
    }
  }
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: space-between;
`;

export const TextAreaStyle = {
  width: "100%",
  height: "180px",
  padding: "20px",
  fontSize: "16px",
  backgroundColor: "rgba(247, 249, 250, 1)",
};

export const StoryButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const RegistStoryButton = {
  width: "135px",
  height: "50px",

  fontSize: "17px",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "rgba(29, 30, 90, 1)",

  display: "flex",
  outline: "none",
  border: "none",
  borderRadius: "5px",
  columnGap: "5px",

  alignItems: "center",
  justifyContent: "center",

  transform: "scale(1)",
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    backgrounColor: "rgba(29, 30, 90, 0.87)",
    transform: "scale(0.985)",
  },
};
