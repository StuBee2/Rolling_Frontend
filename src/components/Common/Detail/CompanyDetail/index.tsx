import { useState } from "react";
import { useGetCompanyInfoIdQuery } from "../../../../queries/Company/company.query";
import { companyIdAtom } from "../../../../stores/review/review.store";
import { useRecoilState } from "recoil";
import useModal from "../../../../hooks/util/useModal";
import FirmReview from "../../Company/Review";
import * as D from "./style";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiTwotoneMedicineBox } from "react-icons/ai";

interface Props {
  id: string;
}

const CompanyDetailList = ({ id }: Props) => {
  const { data: getCompanyInfo } = useGetCompanyInfoIdQuery({ id });

  const [companyidatom, setCompanyIdAtom] = useRecoilState<string | undefined>(
    companyIdAtom
  );

  const { open } = useModal();

  const [modalBackground, getModalBackground] = useState("false");
  console.log(getCompanyInfo?.companyId);

  return (
    <>
      {getCompanyInfo && (
        <D.CompanyDetailBox>
          <D.CompanySidebarBox>
            <D.CompanySidebar>
              <D.CompanySidebarList>
                <img
                  src={getCompanyInfo.companyImgUrl}
                  style={{ width: "100px" }}
                />
                <div className="company-Name">{getCompanyInfo.companyName}</div>
              </D.CompanySidebarList>
            </D.CompanySidebar>
            <D.CompanyStarBox>
              <D.CompanyStar>
                <D.StarTitleBox>
                  <AiFillThunderbolt className="StarTitleIcon" />
                  <p className="StarTitle">평균 평점</p>
                </D.StarTitleBox>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </D.CompanyStar>
            </D.CompanyStarBox>
          </D.CompanySidebarBox>

          <D.CompanyProfileInfoBox>
            <D.CompanyText>
              <D.Title>That's 기업 정보</D.Title>
              <D.Text>
                해당 기업의 세세한 정보를 빠르고 쉽게 알아볼 수 있어요
              </D.Text>
            </D.CompanyText>

            <D.CompanyProfileBox>
              <D.ProfileImgBox>
                <img
                  src={getCompanyInfo.memberImageUrl}
                  style={{
                    width: "110px",
                    borderRadius: "100px",
                    height: "110px",
                  }}
                  className="ProfileImg"
                />
              </D.ProfileImgBox>

              <D.ProfileNameBox>
                <D.ProfileNamelist>
                  <div className="ProfileName">
                    {getCompanyInfo?.memberSocialId}
                  </div>
                </D.ProfileNamelist>
              </D.ProfileNameBox>
            </D.CompanyProfileBox>

            <D.CompanyInfoBox>
              <D.CompanyInfoList>
                <D.CompanyBasicInfo>
                  <D.defalutdata>
                    <AiTwotoneMedicineBox className="defalut-icon" />
                    기본정보
                  </D.defalutdata>
                  <div className="defalut-data">
                    이 정보는 선배들이 작성한 데이터를 기반으로 만들어지고
                    있어요
                  </div>
                </D.CompanyBasicInfo>
                <D.CompanyDetailInfo>
                  <D.CompanyDetailList>
                    <img
                      src={getCompanyInfo?.companyImgUrl}
                      style={{ width: "70px", borderRadius: "5px" }}
                    />

                    <D.CompanyDetailContent>
                      <div className="company-name">
                        {getCompanyInfo.companyName}
                      </div>
                      <div className="company-address">
                        {getCompanyInfo.companyAddress}
                      </div>
                    </D.CompanyDetailContent>
                  </D.CompanyDetailList>
                  <div className="company-description">
                    {getCompanyInfo.companyDescription}
                  </div>
                </D.CompanyDetailInfo>
                <D.CompanyImg></D.CompanyImg>
              </D.CompanyInfoList>
            </D.CompanyInfoBox>
            <D.ReviewRegister>
              <D.ReviewButton
                onClick={() => {
                  setCompanyIdAtom(getCompanyInfo.companyId);
                  open();
                }}
              >
                리뷰 쓰기
              </D.ReviewButton>
            </D.ReviewRegister>
            <div className="test22">
              <FirmReview
                value={modalBackground}
                getModalBackground={getModalBackground}
              />
            </div>
          </D.CompanyProfileInfoBox>
        </D.CompanyDetailBox>
      )}
    </>
  );
};

export default CompanyDetailList;
