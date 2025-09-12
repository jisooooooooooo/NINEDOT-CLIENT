export interface AnswerType {
  questionId: number;
  choiceId: number;
}

export interface UserType {
  name: string;
  email: string;
  birthday: string;
  job: string;
  profileImageUrl: string;
  answers: AnswerType[];
}

export interface AuthStoreType {
  user: UserType;
  setUser: (newUser: UserType) => void;
  reset: () => void;
}
