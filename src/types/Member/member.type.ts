export interface MemberType {
  memberId: {
    id: string;
  };
  socialDetails: {
    socialId: string;
    socialLoginId: string;
    loginType: string;
    name: string;
    email?: string;
    imageUrl: string;
  };
  memberDetails: {
    nickName: string;
    memberRole: "MEMBER" | "TEMP";
    createdAt: string;
    modifiedAt: string;
  };
}

export interface NavMemberProfileType {
  imgUrl: string;
  name: string;
  email?: string;
}
