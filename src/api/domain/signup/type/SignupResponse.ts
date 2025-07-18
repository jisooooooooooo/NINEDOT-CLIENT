export interface SignupResponse {
  socialProvider: string;
  socialToken: string;
  name: string;
  email: string;
  birthday: string;
  job: string;
  profileImageUrl: string;
  answers: {
    questionId: number;
    choiceId: number;
  }[];
}
