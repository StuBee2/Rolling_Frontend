import { usePostCompanyRegisterMutation } from "@src/queries/Company/company.query";
import { useUploadFileMutation } from "@src/queries/File/file.query";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { CompanyParam } from "@src/repositories/Company/company.repository";
import { FileParam } from "@src/repositories/File/file.repository";
import {
  StoryCompanyIdAtom,
  StoryCompanyRegistAtom,
} from "@src/stores/story/story.store";
import { CompanyRegistInfo } from "@src/types/Company/company.type";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { MutableRefObject, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";

export const useCompanyRegister = () => {
  const imgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const formData = new FormData();
  const { rollingToast } = useRollingToast();

  const [imgUrl, setImgUrl] = useState<string>("");
  const [rgb, setRgb] = useState<number | null>(null);

  const fileUpload = useUploadFileMutation();
  const registCompany = usePostCompanyRegisterMutation();
  const { queryInvalidates } = useQueryInvalidates();

  const [companyInfo, setCompanyInfo] = useRecoilState<CompanyRegistInfo>(
    StoryCompanyRegistAtom
  );

  // 필수요소를 만족하는지 판단
  const isRequred =
    companyInfo.address.trim() !== "" && companyInfo.description.trim() !== "";

  // 회사 스토리를 남길 때 필요한 레코일
  const setStoryCompanyId = useSetRecoilState(StoryCompanyIdAtom);

  const handleCompanyLogoClick = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const handleRegistChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setCompanyInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadCompanyLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files!![0];
    formData.append("file", file);

    fileUpload.mutate(formData as unknown as FileParam, {
      onSuccess: (imgUrl) => {
        setImgUrl(imgUrl.url);
        setRgb(imgUrl.rgb);
      },
      onError: (e) => {
        rollingToast("이미지 전송실패", "error");
      },
    });
  };

  // 기업등록 제출
  const handleRegistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRequred) {
      const answer = window.confirm("기업을 등록 하시겠습니까?");

      if (answer) {
        const param = { ...companyInfo, imgUrl, rgb };

        console.log(param);

        registCompany.mutate(param as unknown as CompanyParam, {
          onSuccess: (res) => {
            rollingToast("기업을 등록 하였습니다!", "success");

            // 스토리 남기기 박스로 이동
            window.scrollTo({
              top: 600,
              behavior: "smooth",
            });

            setStoryCompanyId(res.id);

            queryInvalidates([
              QUERY_KEYS.company.getListSearchCompany(companyInfo.name),
              QUERY_KEYS.company.company,
              QUERY_KEYS.company.getListAllCompany,
              QUERY_KEYS.company.getCompanyRank,
            ]);

            setCompanyInfo({
              name: "",
              address: "",
              addressEtc: "",
              description: "",
            });
            setImgUrl("");
            setRgb(null);
          },
          onError: (error) => {
            console.log(error);
          },
        });
      }
    }
  };

  return {
    companyInfo,
    setCompanyInfo,

    imgUrl,
    setImgUrl,
    imgRef,
    handleUploadCompanyLogo,

    handleRegistChange,
    handleCompanyLogoClick,
    handleRegistSubmit,
    isRequred,
  };
};
