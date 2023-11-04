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
