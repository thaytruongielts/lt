import React, { useState } from 'react';
import { Question } from '../types';
import { Check, X, ArrowRight } from 'lucide-react';

interface Props {
  question: Question;
  onAnswer: (id: string, answer: string) => void;
  userAnswer?: string;
}

const TextInputCard: React.FC<Props> = ({ question, onAnswer, userAnswer }) => {
  const [inputValue, setInputValue] = useState(userAnswer || '');
  
  const isAnswered = !!userAnswer;
  // Normalize checking for loose comparison
  const normalize = (s: string) => s.trim().toLowerCase().replace(/[.,!]/g, '');
  const isCorrect = isAnswered && normalize(userAnswer) === normalize(question.correctAnswer as string);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAnswer(question.id, inputValue);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
       <h3 className="text-lg font-medium text-slate-800 mb-4 flex items-start gap-2">
        <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded mt-1 flex-shrink-0">
          {question.id}
        </span>
        {question.question}
      </h3>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isAnswered}
            placeholder="Type your answer here..."
            className={`flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 ${
              isAnswered
                ? isCorrect
                  ? "border-green-500 bg-green-50 text-green-800"
                  : "border-red-500 bg-red-50 text-red-800"
                : "border-slate-300 focus:ring-blue-200"
            }`}
          />
          {!isAnswered && (
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              Check
            </button>
          )}
        </div>
      </form>

      {isAnswered && (
        <div className={`mt-3 text-sm flex items-center gap-1 font-medium ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
           {isCorrect ? (
             <>
               <Check size={16} /> Correct!
             </>
           ) : (
             <>
               <X size={16} /> Incorrect
             </>
           )}
        </div>
      )}
    </div>
  );
};

export default TextInputCard;