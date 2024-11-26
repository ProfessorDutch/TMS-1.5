import React, { useState } from 'react';
import { Heart, ArrowRight, Star } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "What moves your heart most about youth ministry?",
    options: [
      "Seeing young hearts discover God's love",
      "Helping shape the next generation of believers",
      "Supporting families in their faith journey",
      "Creating a safe space for spiritual growth"
    ]
  },
  {
    id: 2,
    text: "How do you believe we can best support our youth?",
    options: [
      "Through prayer and encouragement",
      "By creating meaningful experiences",
      "With mentorship and guidance",
      "By fostering a loving community"
    ]
  },
  {
    id: 3,
    text: "What impact do you hope to see in young lives?",
    options: [
      "Stronger faith foundations",
      "Deeper understanding of God's love",
      "Confidence in their spiritual journey",
      "Connection to a faith community"
    ]
  }
];

export default function FaithQuestionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showSupport, setShowSupport] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSupport(true);
    }
  };

  if (showSupport) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Star className="w-12 h-12 text-amber-600 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Your Heart for Youth Ministry is Inspiring!
        </h3>
        <p className="text-gray-600 mb-8">
          Every form of support matters - from a simple prayer to active participation.
          Here's how you can make a difference:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-3">Start Simple</h4>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• Like and share Mustard Seed stories</li>
              <li>• Leave encouraging comments</li>
              <li>• Join our prayer community</li>
              <li>• Share your own faith journey</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-3">Grow Your Impact</h4>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• Support specific youth journeys</li>
              <li>• Join monthly blessing circle</li>
              <li>• Volunteer your time</li>
              <li>• Become a youth mentor</li>
            </ul>
          </div>
        </div>

        <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors inline-flex items-center gap-2">
          Explore Ways to Support <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 mx-1 rounded-full ${
              index <= currentQuestion ? 'bg-amber-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {question.text}
        </h3>
      </div>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-amber-600 hover:bg-amber-50 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}