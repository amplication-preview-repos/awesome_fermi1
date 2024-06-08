import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "answer";

export const QuestionTitle = (record: TQuestion): string => {
  return record.answer?.toString() || String(record.id);
};
