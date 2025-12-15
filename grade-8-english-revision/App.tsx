import React, { useState, useMemo } from 'react';
import { examData } from './data';
import { QuestionType } from './types';
import QuestionCard from './components/QuestionCard';
import TextInputCard from './components/TextInputCard';
import ScoreBoard from './components/ScoreBoard';

const App: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Flatten questions to calculate stats
  const allQuestions = useMemo(() => {
    return examData.sections.flatMap(section => section.questions);
  }, []);

  const totalQuestions = allQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  
  const correctCount = allQuestions.reduce((count, q) => {
    const userAnswer = userAnswers[q.id];
    if (!userAnswer) return count;
    
    // Normalize for text inputs
    const normalize = (s: string) => s.trim().toLowerCase().replace(/[.,!]/g, '');
    
    if (q.type === QuestionType.TEXT_INPUT) {
       return normalize(userAnswer) === normalize(q.correctAnswer as string) ? count + 1 : count;
    }
    
    return userAnswer === q.correctAnswer ? count + 1 : count;
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <ScoreBoard 
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        correctCount={correctCount}
        studentName={examData.studentName}
      />

      <main className="max-w-3xl mx-auto px-4 mt-8 space-y-12">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl font-bold text-slate-900">{examData.title}</h2>
          {examData.description && <p className="text-slate-500">{examData.description}</p>}
        </div>

        {examData.sections.map((section) => (
          <section key={section.id} className="scroll-mt-24" id={section.id}>
            <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-slate-300 flex-1"></div>
                <h2 className="text-xl font-bold text-blue-800 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                    {section.title}
                </h2>
                <div className="h-px bg-slate-300 flex-1"></div>
            </div>
            
            {section.description && (
                <p className="text-center text-slate-500 mb-6 italic">{section.description}</p>
            )}

            <div className="space-y-6">
              {section.questions.map((q) => {
                if (q.type === QuestionType.TEXT_INPUT) {
                  return (
                    <TextInputCard 
                      key={q.id}
                      question={q}
                      userAnswer={userAnswers[q.id]}
                      onAnswer={handleAnswer}
                    />
                  );
                }
                return (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    userAnswer={userAnswers[q.id]}
                    onAnswer={handleAnswer}
                  />
                );
              })}
            </div>
          </section>
        ))}
        
        <div className="text-center py-10 text-slate-400 text-sm">
            End of Revision Exam • Good Luck!
        </div>
      </main>
    </div>
  );
};

export default App;