import type { OptionType } from '@/page/signup/type/optionType';

export type QuestionType = {
  id: number;
  type: string;
  content: string;
  optionList: OptionType[];
};
