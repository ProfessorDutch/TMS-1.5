import React, { useState } from 'react';
import { Heart, Share2, Users, Check, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  type: 'radio' | 'checkbox';
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: 'community',
    text: "Will you help build our faith community?",
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes, I commit to being an active member' },
      { value: 'maybe', label: 'I need to learn more first' },
      { value: 'no', label: 'Not at this time' }
    ]
  },
  {
    id: 'sharing',
    text: "Can you share our mission with at least 50 people?",
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes, I will share with 50+ people' },
      { value: 'partial', label: 'I can share with 20-49 people' },
      { value: 'minimal', label: 'I can share with less than 20 people' }
    ]
  },
  {
    id: 'engagement',
    text: "How will you engage with our content?",
    type: 'checkbox',
    options: [
      { value: 'like', label: 'Like and react to posts' },
      { value: 'comment', label: 'Leave encouraging comments' },
      { value: 'share', label: 'Share posts with my network' },
      { value: 'create', label: 'Create content about the mission' }
    ]
  },
  {
    id: 'commitment',
    text: "What level of commitment can you make?",
    type: 'radio',
    options: [
      { value: 'daily', label: 'Daily engagement' },
      { value: 'weekly', label: 'Weekly engagement' },
      { value: 'monthly', label: 'Monthly engagement' }
    ]
  }
];

interface AmbassadorQuestionnaireProps {
  onComplete: (answers: Record<string, string[]>) => void;
  onBack: () => void;
}

export default function AmbassadorQuestionnaire({ onComplete, onBack }: AmbassadorQuestionnaireProps) {
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (questionId: string, value: string, type: 'radio' | 'checkbox') => {
    if (type === 'radio') {
      setAnswers(prev => ({ ...prev, [questionId]: [value] }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: prev[questionId]?.includes(value)
          ? prev[questionId].filter(v => v !== value)
          : [...(prev[questionId] || []), value]
      }));
    }
  };

  const canProceed = () => {
    const currentQuestionId = questions[currentQuestion].id;
    return answers[currentQuestionId]?.length > 0;
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 mx-1 rounded-full ${
              index <= currentQuestion ? 'bg-patriot-red' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-patriot-navy mb-4">
          {questions[currentQuestion].text}
        </h3>
      </div>

      <div className="space-y-4">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(
              questions[currentQuestion].id,
              option.value,
              questions[currentQuestion].type
            )}
            className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-colors ${
              answers[questions[currentQuestion].id]?.includes(option.value)
                ? 'border-patriot-red bg-patriot-cream'
                : 'border-gray-200 hover:border-patriot-red hover:bg-patriot-cream'
            }`}
          >
            <span className="text-left text-patriot-navy">{option.label}</span>
            {answers[questions[currentQuestion].id]?.includes(option.value) && (
              <Check className="w-5 h-5 text-patriot-red" />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${
            canProceed()
              ? 'bg-patriot-red text-white hover:bg-patriot-crimson'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQuestion < questions.length - 1 ? (
            <>Next <ArrowRight className="w-5 h-5" /></>
          ) : (
            'Complete'
          )}
        </button>
      </div>
    </div>
  );
}