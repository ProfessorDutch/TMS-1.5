import React, { useState } from 'react';
import { Heart, Check, ArrowRight, X, Star, Target, Users, BookOpen, Sprout, Church, Share2 } from 'lucide-react';

interface BusinessQuestionnaireProps {
  onComplete: (answers: Record<string, string[]>) => void;
  onBack: () => void;
  onClose: () => void;
}

const questions = [
  {
    id: 'faith_impact',
    text: "Do you believe in empowering youth through faith-based education?",
    icon: <Heart className="w-12 h-12 text-patriot-red animate-pulse" />,
    type: 'radio',
    theme: 'red',
    options: [
      { value: 'yes', label: 'Yes, I want to invest in their future', color: 'bg-gradient-to-r from-patriot-red to-patriot-crimson' },
      { value: 'maybe', label: 'I need to learn more', color: 'bg-gradient-to-r from-patriot-blue to-patriot-navy' },
      { value: 'no', label: 'Not at this time', color: 'bg-gradient-to-r from-patriot-navy to-gray-800' }
    ]
  },
  {
    id: 'mentorship',
    text: "Would you consider providing mentorship opportunities?",
    icon: <Users className="w-12 h-12 text-patriot-blue animate-bounce" />,
    type: 'radio',
    theme: 'blue',
    options: [
      { value: 'yes', label: 'Yes, I want to be a mentor', color: 'bg-gradient-to-r from-patriot-blue to-blue-600' },
      { value: 'maybe', label: 'I need more information', color: 'bg-gradient-to-r from-blue-500 to-blue-700' },
      { value: 'future', label: 'In the future', color: 'bg-gradient-to-r from-blue-700 to-blue-900' }
    ]
  },
  {
    id: 'resources',
    text: "How would you like to support our mission?",
    icon: <Target className="w-12 h-12 text-amber-600 animate-spin-slow" />,
    type: 'checkbox',
    theme: 'amber',
    options: [
      { value: 'financial', label: 'Financial Support', color: 'bg-gradient-to-r from-amber-500 to-amber-700' },
      { value: 'facilities', label: 'Provide Facilities', color: 'bg-gradient-to-r from-amber-600 to-amber-800' },
      { value: 'expertise', label: 'Share Expertise', color: 'bg-gradient-to-r from-amber-700 to-amber-900' },
      { value: 'network', label: 'Network Access', color: 'bg-gradient-to-r from-amber-800 to-amber-950' }
    ]
  },
  {
    id: 'commitment',
    text: "What level of engagement interests you?",
    icon: <BookOpen className="w-12 h-12 text-emerald-600 animate-float" />,
    type: 'radio',
    theme: 'emerald',
    options: [
      { value: 'active', label: 'Active Partnership', color: 'bg-gradient-to-r from-emerald-500 to-emerald-700' },
      { value: 'periodic', label: 'Periodic Involvement', color: 'bg-gradient-to-r from-emerald-600 to-emerald-800' },
      { value: 'advisory', label: 'Advisory Role', color: 'bg-gradient-to-r from-emerald-700 to-emerald-900' }
    ]
  },
  {
    id: 'growth',
    text: "Are you ready to help us grow this movement?",
    icon: <Sprout className="w-12 h-12 text-patriot-red animate-grow" />,
    type: 'radio',
    theme: 'red',
    options: [
      { value: 'yes', label: "Yes, let's move mountains together", color: 'bg-gradient-to-r from-patriot-red to-patriot-crimson' },
      { value: 'discuss', label: "Let's discuss further", color: 'bg-gradient-to-r from-patriot-blue to-patriot-navy' }
    ]
  }
];

export default function BusinessQuestionnaire({ onComplete, onBack, onClose }: BusinessQuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [showAnimation, setShowAnimation] = useState(false);

  const handleAnswer = (questionId: string, value: string, type: 'radio' | 'checkbox') => {
    setShowAnimation(true);
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

    setTimeout(() => {
      setShowAnimation(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        onComplete(answers);
      }
    }, 500);
  };

  const question = questions[currentQuestion];
  const themeColors = {
    red: 'from-patriot-red to-patriot-crimson',
    blue: 'from-patriot-blue to-blue-600',
    amber: 'from-amber-500 to-amber-700',
    emerald: 'from-emerald-500 to-emerald-700'
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex-1 flex justify-center gap-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-12 rounded-full transition-all duration-300 ${
                index < currentQuestion 
                  ? `bg-gradient-to-r ${themeColors[question.theme]} scale-95`
                  : index === currentQuestion
                    ? `bg-gradient-to-r ${themeColors[question.theme]} scale-100`
                    : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <div className="w-6" />
      </div>

      <div className={`text-center mb-8 transition-opacity duration-300 ${
        showAnimation ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="mb-4">{question.icon}</div>
        <h3 className="text-2xl font-bold text-patriot-navy mb-4">
          {question.text}
        </h3>
      </div>

      <div className={`space-y-4 transition-all duration-300 ${
        showAnimation ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
      }`}>
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(question.id, option.value, question.type)}
            className={`w-full flex items-center justify-between p-6 rounded-xl border-2 transition-all duration-300 ${
              answers[question.id]?.includes(option.value)
                ? `${option.color} border-transparent text-white transform scale-105 shadow-lg`
                : 'border-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:from-gray-50 hover:to-patriot-cream'
            }`}
          >
            <span className={`text-left text-lg font-medium ${
              answers[question.id]?.includes(option.value) ? 'text-white' : 'text-patriot-navy'
            }`}>
              {option.label}
            </span>
            {answers[question.id]?.includes(option.value) && (
              <Check className="w-6 h-6 text-white" />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors text-patriot-navy font-medium"
        >
          Back
        </button>
        {currentQuestion === questions.length - 1 && (
          <button
            onClick={() => onComplete(answers)}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-patriot-red to-patriot-crimson text-white hover:from-patriot-crimson hover:to-patriot-red transition-colors font-medium shadow-lg"
          >
            Complete <Star className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}