export interface AnswerType {
  questionId: number;
  choiceId: number;
}

export interface UserType {
  name: string;
  email: string;
  birthday?: string;
  job?: string;
  profileImageUrl: string;
  answers?: AnswerType[];
}

export interface AuthStoreType {
  user: UserType;
  isLoggedIn: boolean;
  setUser: (newUser: UserType) => void;
  resetUser: () => void;
}
