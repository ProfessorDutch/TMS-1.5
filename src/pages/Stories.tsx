import React from 'react';
import ImpactStory from '../components/ImpactStory';

export default function Stories() {
  const stories = [
    {
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      name: "Sarah's Journey",
      quote: "The youth camp changed my perspective on faith and community. I've never felt closer to God.",
      date: "Summer 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1526746323784-6bc814d79273?auto=format&fit=crop&w=800&q=80",
      name: "Mission Trip Impact",
      quote: "Serving others while spreading God's love has been the most rewarding experience of my life.",
      date: "Spring 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?auto=format&fit=crop&w=800&q=80",
      name: "Youth Leadership",
      quote: "The leadership program gave me the confidence to guide others in their faith journey.",
      date: "Fall 2023"
    }
  ];

  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
            Impact Stories
          </h1>
          <p className="text-xl text-patriot-blue mb-8 max-w-3xl">
            Witness the transformative power of faith in young lives.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <ImpactStory key={index} {...story} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}