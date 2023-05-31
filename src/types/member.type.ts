export interface MemberType {
  id: string;
  nickName: string;
  socialId: string;
  name: string;
  email: string;
  imageUrl: string;
  memberRole: "MEMBER";
  loginType: "GITHUB";
  createdAt: string;
  modifiedAt: string;
}

export interface MemberProfileType {
  socialId: string;
  imgUrl: string;
}