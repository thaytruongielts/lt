export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TEXT_INPUT = 'TEXT_INPUT',
  TRUE_FALSE = 'TRUE_FALSE'
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  context?: string; // For reading passages or dialog speakers
  options?: string[]; // For MC
  correctAnswer: string | string[]; // Can be multiple valid answers for text input
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  content?: string; // For reading passages
  questions: Question[];
}

export interface AppData {
  title: string;
  description?: string;
  studentName: string;
  className: string;
  sections: Section[];
}