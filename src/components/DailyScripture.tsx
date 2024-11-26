import React, { useState, useEffect } from 'react';
import { BookOpen, Quote } from 'lucide-react';

const scriptures = [
  {
    verse: "Therefore encourage one another and build each other up, just as in fact you are doing.",
    reference: "1 Thessalonians 5:11",
    theme: "community"
  },
  {
    verse: "And let us consider how we may spur one another on toward love and good deeds.",
    reference: "Hebrews 10:24",
    theme: "support"
  },
  {
    verse: "Start children off on the way they should go, and even when they are old they will not turn from it.",
    reference: "Proverbs 22:6",
    theme: "youth"
  }
];

export default function DailyScripture() {
  const [scripture, setScripture] = useState(scriptures[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * scriptures.length);
    setScripture(scriptures[index]);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-patriot-cream to-white p-8 rounded-2xl shadow-lg text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-patriot-red" />
            <h3 className="text-2xl font-bold text-patriot-navy">Today's Scripture</h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Quote className="w-8 h-8 text-patriot-red/20 absolute -top-4 -left-4" />
              <blockquote className="text-2xl text-patriot-blue italic mb-4 leading-relaxed">
                "{scripture.verse}"
              </blockquote>
              <Quote className="w-8 h-8 text-patriot-red/20 absolute -bottom-4 -right-4 rotate-180" />
            </div>
            
            <p className="text-lg font-semibold text-patriot-red mt-6">
              {scripture.reference}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}