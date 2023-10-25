import {
  CompanyInputRefType,
  CompanyRegistErrorType,
  CompanyRegistInfo,
} from "@src/types/Company/company.type";
import { CSSObject } from "styled-components";

interface Types {
  title: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  value: string;
  textType?: "input" | "textarea";
  name: string;
  placeholder: string;
  isError?: boolean;
  customStyle?: CSSObject;
  errorMessage?: string;
}

export const companyRegistFormObject = (
  content: CompanyRegistInfo,
  isError: CompanyRegistErrorType,
  inputRef: CompanyInputRefType
): Types[] => {
  return [
    {
      title: "기업명",
      inputRef: inputRef.name!!,
      value: content.name,
      name: "name",
      placeholder: "기업명을 입력해주세요",
      isError: isError.name,
      errorMessage: "기업명을 입력해주세요.",
      textType: "input",
    },
    {
      title: "기업주소",
      inputRef: inputRef.address!!,
      value: content.address,
      name: "address",
      placeholder: "기업 본사 도로명 주소를 입력해주세요.",
      isError: isError.address,
      errorMessage: "기업 본사 도로명 주소를 입력해주세요.",
      textType: "input",
    },
    {
      title: "기업소개",
      inputRef: inputRef.description!!,
      value: content.description,
      name: "description",
      placeholder:
        "기업 소개 글을 작성해주세요\n(회사 서비스의 목적, 기업 문화 등)",
      isError: isError.description,
      textType: "textarea",
      errorMessage: "기업 소개 글을 정확하게 작성해주세요.",
    },
  ];
};
