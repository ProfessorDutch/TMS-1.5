import React from 'react';
import { FileText, Shield, Book } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-12 h-12 text-patriot-red" />
            <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-patriot-blue mb-4">
            Effective Date: 11/11/2024
          </p>
          <p className="text-patriot-blue max-w-3xl">
            Welcome to The Mustard Seed! Please read these terms carefully to understand your rights and responsibilities as part of our community.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">1. General Overview</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-patriot-blue mb-4">
                  The Mustard Seed exists to develop courses, training modules, and mentoring opportunities for Christians, Jesus followers, and like-minded individuals who want to help the youth of America grow on a more stable foundation than they may have had themselves.
                </p>
                <div className="space-y-2">
                  <p className="text-patriot-blue font-medium">The primary function of the website and app is to create a platform where users can:</p>
                  <ul className="list-disc pl-6 space-y-2 text-patriot-gray">
                    <li>Connect with others who share their faith and values</li>
                    <li>Share content, track engagement, and earn Mustard Seeds</li>
                    <li>Support the mission through participation as Ambassadors or Foundation Members</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">2. User Registration and Participation</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Free User Account</h3>
                    <p className="text-patriot-gray">
                      To access and participate in The Mustard Seed platform, all users must create a free account. Registration requires basic information such as name and email address.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Age Restrictions</h3>
                    <p className="text-patriot-gray">
                      The Mustard Seed is open to users aged 13 and older. By creating an account, users confirm that they meet this minimum age requirement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Ambassadors</h3>
                    <p className="text-patriot-gray">
                      Becoming an Ambassador is free. Ambassadors are users whose primary goal is to share the message of The Mustard Seed by liking posts, sharing content, and spreading awareness of the mission. Actions such as likes, shares, and QR code scans earn Ambassadors Mustard Seeds.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Foundation Members</h3>
                    <p className="text-patriot-gray">
                      Foundation Members are individuals who choose to support the mission through monthly recurring revenue subscriptions. These subscriptions are used to purchase Mustard Seed Packages, which directly fund classes, training modules, and mentoring opportunities for kids to grow on a stronger foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">3. User Content and Contributions</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Content Uploads</h3>
                    <p className="text-patriot-gray mb-2">Users are permitted to upload content to The Mustard Seed platform. However, all content must be directly related to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-patriot-gray">
                      <li>Classes they have taken through The Mustard Seed</li>
                      <li>Events they have attended or shared</li>
                      <li>Successes and outcomes resulting from Mustard Seed content or projects</li>
                      <li>Businesses or organizations that have hosted events in partnership with The Mustard Seed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Content Guidelines</h3>
                    <p className="text-patriot-gray mb-2">All uploaded content must align with the mission and values of The Mustard Seed, including fostering faith, hope, and opportunities for youth.</p>
                    <p className="text-patriot-gray">Prohibited content includes, but is not limited to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-patriot-gray">
                      <li>Material unrelated to The Mustard Seed mission</li>
                      <li>Content that is inappropriate, offensive, or violates the values of the community</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">4. Payments and Donations</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Subscription Model</h3>
                    <p className="text-patriot-gray">
                      The Mustard Seed operates on a subscription-based model. Users who subscribe are purchasing a monthly package of Mustard Seeds, which are used to support funding for classes and opportunities for users who need them, and the creation of new content, courses, and mentoring programs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Purpose of Subscriptions</h3>
                    <p className="text-patriot-gray">
                      Subscribers understand that their primary value lies in supporting a mission they believe in.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Access to Content</h3>
                    <p className="text-patriot-gray">
                      As courses and training modules are developed, subscribers will gain access to this content through the app.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Refund Policy</h3>
                    <p className="text-patriot-gray">
                      All charges made on The Mustard Seed platform are final. Users agree that no refunds will be issued for any reason.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">5. Data Collection and Privacy</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Data Collected</h3>
                    <p className="text-patriot-gray mb-2">The Mustard Seed collects basic information from users, including:</p>
                    <ul className="list-disc pl-6 space-y-2 text-patriot-gray">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Location</li>
                      <li>Social media activity (related to likes, shares, and engagement with Mustard Seed content)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Purpose and Sharing</h3>
                    <p className="text-patriot-gray">
                      Collected data is used solely for tracking likes, shares, and communication for mission-related outreach. User data is not shared with third parties or external organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">6. User Conduct and Legal Jurisdiction</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">User Conduct</h3>
                    <p className="text-patriot-gray">
                      Violations of the community's moral code or Terms of Service will result in suspension or termination.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Legal Jurisdiction</h3>
                    <p className="text-patriot-gray">
                      The Terms of Service are governed by the laws of the State of Georgia, with legal proceedings to be held in Atlanta, Georgia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">7. Business Relationships</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Not a Nonprofit Organization</h3>
                    <p className="text-patriot-gray">
                      The Mustard Seed is an independently owned business, not a 501(c)(3).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-patriot-navy mb-2">Corporate Sponsorships</h3>
                    <p className="text-patriot-gray">
                      Sponsorships support pathways for employment or program development but do not reflect the values of The Mustard Seed unless explicitly stated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}