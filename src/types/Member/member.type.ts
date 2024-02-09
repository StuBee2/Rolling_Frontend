export interface MemberType {
  memberId: {
    id: string;
  };
  role: "MEMBER" | "TEMP";
  details: {
    nickName: string;
    name: string;
    email: string;
    imageUrl: string;
  };
  socialDetails: {
    socialId: string;
    socialLoginId: string;
    loginType: string;
  };
  createdAt: string;
  modifiedAt: string;
}

export interface NavMemberProfileType {
  imgUrl: string;
  name: string;
  email?: string;
}
