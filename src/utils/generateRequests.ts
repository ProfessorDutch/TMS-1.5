import { faker } from '@faker-js/faker';

interface BlessingRequest {
  id: string;
  name: string | null;
  age: number;
  church: string;
  destination: string;
  startDate: string;
  endDate: string;
  goal: number;
  amountRaised: number;
  story: string;
  imageUrl: string;
  supporters: number;
  isAnonymous: boolean;
}

const missionTypes = [
  'Youth Camp',
  'Mission Trip',
  'Leadership Retreat',
  'Worship Conference',
  'Service Project',
  'Bible Study Intensive'
];

const imageUrls = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
  'https://images.unsplash.com/photo-1526746323784-6bc814d79273',
  'https://images.unsplash.com/photo-1509027572446-af8401acfdc3',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
  'https://images.unsplash.com/photo-1470076892663-af684e5e15af',
  'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3',
  'https://images.unsplash.com/photo-1504052434569-70ad5836ab65',
  'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e'
];

const stories = [
  "Seeking support for a transformative youth camp experience that will deepen our relationship with Christ through worship, fellowship, and outdoor adventures.",
  "Join us in making possible a mission trip to serve underprivileged communities while spreading God's love through action and compassion.",
  "Help enable young worship leaders to attend a specialized conference where they'll develop their gifts and learn to lead others in praise.",
  "Support our youth group's journey to a faith-building retreat focused on spiritual growth and community building.",
  "Contribute to sending passionate young believers to a leadership development program where they'll learn to guide their peers in faith.",
  "Enable participation in a service-learning project combining hands-on community service with biblical teaching.",
  "Help make possible an intensive discipleship program that will equip young people with strong biblical foundations.",
  "Support youth attendance at a regional conference focused on applying faith in today's challenging world.",
  "Enable participation in a cross-cultural mission experience that will broaden perspectives and deepen faith."
];

export function generateSystemRequests(userRequestCount: number): BlessingRequest[] {
  const targetCount = Math.max(200, Math.min(userRequestCount + 200, 3000));
  const systemRequestsNeeded = Math.max(0, targetCount - userRequestCount);
  
  return Array.from({ length: systemRequestsNeeded }, () => {
    const isAnonymous = faker.datatype.boolean();
    const startDate = faker.date.future();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + faker.number.int({ min: 3, max: 14 }));
    
    const goal = faker.number.int({ min: 300, max: 2500 });
    const amountRaised = faker.number.int({ min: 0, max: goal });
    
    return {
      id: faker.string.uuid(),
      name: isAnonymous ? null : faker.person.fullName(),
      age: faker.number.int({ min: 13, max: 25 }),
      church: `${faker.location.city()} ${faker.helpers.arrayElement(['Church', 'Community Church', 'Fellowship', 'Ministry'])}`,
      destination: faker.location.city(),
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      goal,
      amountRaised,
      story: faker.helpers.arrayElement(stories),
      imageUrl: `${faker.helpers.arrayElement(imageUrls)}?auto=format&fit=crop&q=80`,
      supporters: faker.number.int({ min: 5, max: 50 }),
      isAnonymous
    };
  });
}