export interface MemberType {
  memberId: {
    id: string;
  };
  socialDetails: {
    socialId: string;
    loginType: string;
    name: string;
    email: string;
    imageUrl: string;
  };
  memberDetails: {
    nickName: string;
    memberRole: string;
    createdAt: string;
    modifiedAt: string;
  };
}

export interface NavMemberProfileType {
  imgUrl: string;
  name: string;
  email: string;
}