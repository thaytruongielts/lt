import React from 'react';
import { Award, BookOpen } from 'lucide-react';

interface Props {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  studentName: string;
}

const ScoreBoard: React.FC<Props> = ({ totalQuestions, answeredCount, correctCount, studentName }) => {
  // Calculate score on a 10-point scale
  // If no questions answered yet, score is 0
  const score = totalQuestions > 0 ? ((correctCount / totalQuestions) * 10).toFixed(2) : "0.00";
  const progress = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-md py-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
            <BookOpen size={20} />
        </div>
        <div>
            <h1 className="font-bold text-slate-800 text-sm md:text-base">{studentName}</h1>
            <p className="text-xs text-slate-500">Grade 8A6 • Revision Final Term 1</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-right hidden md:block">
            <p className="text-xs text-slate-500 uppercase font-semibold">Progress</p>
            <p className="text-sm font-medium">{answeredCount} / {totalQuestions}</p>
        </div>
        
        <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
            <Award className="text-yellow-500" size={24} />
            <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Score (10 Scale)</p>
                <p className="text-xl font-bold text-blue-600">{score}</p>
            </div>
        </div>
      </div>
      
      {/* Progress Bar background */}
      <div className="absolute bottom-0 left-0 h-1 bg-slate-100 w-full">
        <div 
            className="h-full bg-blue-500 transition-all duration-500" 
            style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreBoard;