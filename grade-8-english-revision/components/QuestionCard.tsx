import React from 'react';
import { Question, QuestionType } from '../types';
import { Check, X, HelpCircle } from 'lucide-react';

interface Props {
  question: Question;
  onAnswer: (id: string, answer: string) => void;
  userAnswer?: string;
}

const QuestionCard: React.FC<Props> = ({ question, onAnswer, userAnswer }) => {
  const isAnswered = !!userAnswer;
  const isCorrect = userAnswer === question.correctAnswer;
  
  const options = question.type === QuestionType.TRUE_FALSE 
    ? ['True', 'False'] 
    : question.options || [];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
      {question.context && (
        <div className="mb-4 p-4 bg-slate-50 rounded text-slate-700 italic text-sm border-l-4 border-blue-400">
          {question.context}
        </div>
      )}
      
      <h3 className="text-lg font-medium text-slate-800 mb-4 flex items-start gap-2">
        <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded mt-1 flex-shrink-0">
          {question.id}
        </span>
        {question.question}
      </h3>

      <div className="space-y-2">
        {options.map((option) => {
          const isSelected = userAnswer === option;
          let btnClass = "w-full text-left p-3 rounded-md border transition-all duration-200 ";
          
          if (!isAnswered) {
            btnClass += "border-slate-200 hover:bg-slate-50 hover:border-blue-300 cursor-pointer";
          } else {
            if (isSelected) {
              btnClass += isCorrect 
                ? "bg-green-50 border-green-500 text-green-700" 
                : "bg-red-50 border-red-500 text-red-700";
            } else {
              btnClass += "border-slate-200 opacity-50 cursor-not-allowed";
            }
          }

          return (
            <button
              key={option}
              onClick={() => !isAnswered && onAnswer(question.id, option)}
              disabled={isAnswered}
              className={btnClass}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {isSelected && (
                  <span>
                    {isCorrect ? <Check size={20} /> : <X size={20} />}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {isAnswered && !isCorrect && (
        <div className="mt-3 text-sm text-red-500 flex items-center gap-1">
          <X size={14} /> Incorrect
        </div>
      )}
      {isAnswered && isCorrect && (
        <div className="mt-3 text-sm text-green-600 flex items-center gap-1">
          <Check size={14} /> Correct
        </div>
      )}
    </div>
  );
};

export default QuestionCard;