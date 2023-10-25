import {
  StoryRegistErrorType,
  StoryInputRefType,
  StoryCompanyContentsType,
} from "@src/types/Story/story.type";
import { CSSObject } from "styled-components";

interface Types {
  title: string;
  required: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  value: string;
  textType?: "input" | "textarea";
  name: string;
  message: string;
  isError?: boolean;
  customStyle?: CSSObject;
}

export const storyRegistFormObject = (
  content: StoryCompanyContentsType,
  isError: StoryRegistErrorType,
  inputRef: StoryInputRefType
): Types[] => {
  return [
    {
      title: "포지션",
      required: true,
      inputRef: inputRef.position!!,
      value: content.position,
      name: "position",
      message: "해당 기업에서 어떤 업무를 담당하셨나요?",
      isError: isError.position,
      textType: "input",
    },
    {
      title: "학교생활",
      required: true,
      inputRef: inputRef.schoolLife!!,
      value: content.schoolLife,
      name: "schoolLife",
      message: "DGSW에서 보낸 학교 생활은 어땠나요?",
      isError: isError.schoolLife,
      textType: "textarea",
    },
    {
      title: "취업 준비 과정",
      required: true,
      inputRef: inputRef.preparationCourse!!,
      value: content.preparationCourse,
      name: "preparationCourse",
      message: "어떤 것을 중심으로 어떤 것을 공부하며 취업 준비를 하셨나요?",
      isError: isError.preparationCourse,
      textType: "textarea",
    },
    {
      title: "자신이 생각하는 가장 중요한 점",
      required: true,
      inputRef: inputRef.mostImportantThing!!,
      value: content.mostImportantThing,
      name: "mostImportantThing",
      message: "취업에 있어서 가장 중요한 점은 무엇인가요?",
      isError: isError.mostImportantThing,
      textType: "input",
    },
    {
      title: "채용 프로세스",
      required: true,
      inputRef: inputRef.employmentProcess!!,
      value: content.employmentProcess,
      name: "employmentProcess",
      message: "채용 프로세스는 무엇이었나요?",
      isError: isError.employmentProcess,
      textType: "input",
    },
    {
      title: "면접 질문",
      required: true,
      inputRef: inputRef.interviewQuestion!!,
      value: content.interviewQuestion,
      name: "interviewQuestion",
      message: "어떤 면접 질문을 받으셨나요",
      isError: isError.interviewQuestion,
      textType: "textarea",
    },
    {
      title: "사내복지",
      required: false,
      value: content.welfare,
      name: "welfare",
      message: "어떤 면접 질문을 받으셨나요",
      textType: "input",
    },
    {
      title: "식사 제공",
      required: false,
      value: content.meal,
      name: "meal",
      message: "해당 기업에서 제공해주는 식사는 어떠한가요?",
      textType: "input",
    },
    {
      title: "출퇴근 시간",
      required: false,
      value: content.commuteTime,
      name: "commuteTime",
      message: "출퇴근 시간은 몇 시부터 몇시까지 인가요?",
      textType: "input",
    },
    {
      title: "기업의 장점",
      required: false,
      value: content.advantages,
      name: "advantages",
      message: "해당 기업은 어떤 장점을 갖고 있나요?",
      textType: "input",
    },
    {
      title: "기업의 단점",
      required: false,
      value: content.disAdvantages,
      name: "disAdvantages",
      message: "해당 기업은 어떤 단점을 갖고 있나요?",
      textType: "input",
    },
  ];
};
