export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  interests: string[];
  location: string;
  age: number;
  joinedDate: string;
  eventsAttended: number;
  rating: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price: number;
  capacity: number;
  attendees: number;
  image: string;
  organizer: string;
  tags: string[];
  difficulty?: string;
  duration?: string;
}

export interface Match {
  id: string;
  user: User;
  event: Event;
  matchScore: number;
  commonInterests: string[];
  distance: number;
  status: 'pending' | 'accepted' | 'declined';
  message?: string;
}

export interface EventCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}
