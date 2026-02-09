
export type Topic = 'Word' | 'Excel' | 'PowerPoint' | 'Navegação Defensiva' | 'Segurança & Malware' | 'Teoria Microsoft 365' | 'Microsoft Access';

export interface Question {
  id: string;
  topic: Topic;
  question: string;
  options: string[];
  correctAnswer: number; // Index of options array (0-4)
  explanation: string;
}

export interface QuizState {
  currentTopic: Topic | null;
  currentQuestionIndex: number;
  score: number;
  userAnswers: { [questionId: string]: number };
  isFinished: boolean;
}
