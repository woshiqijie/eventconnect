import { User, Event, Match, EventCategory } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Adventure seeker and photography enthusiast. Love exploring new places and meeting creative people!',
    interests: ['Photography', 'Hiking', 'Art', 'Travel', 'Music'],
    location: 'San Francisco, CA',
    age: 28,
    joinedDate: '2023-01-15',
    eventsAttended: 24,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Tech professional by day, foodie by night. Always up for trying new restaurants and cooking classes.',
    interests: ['Technology', 'Cooking', 'Wine Tasting', 'Startups', 'Networking'],
    location: 'San Francisco, CA',
    age: 32,
    joinedDate: '2022-11-08',
    eventsAttended: 18,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Yoga instructor and wellness advocate. Passionate about mindful living and outdoor activities.',
    interests: ['Yoga', 'Meditation', 'Wellness', 'Nature', 'Fitness'],
    location: 'San Francisco, CA',
    age: 26,
    joinedDate: '2023-03-22',
    eventsAttended: 31,
    rating: 4.7
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Music producer and vinyl collector. Love discovering underground artists and live music venues.',
    interests: ['Music', 'Vinyl Records', 'Concerts', 'Audio Production', 'Art'],
    location: 'San Francisco, CA',
    age: 29,
    joinedDate: '2022-09-14',
    eventsAttended: 42,
    rating: 4.6
  },
  {
    id: '5',
    name: 'Priya Patel',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Book lover and language enthusiast. Enjoy literary events, book clubs, and cultural exchanges.',
    interests: ['Reading', 'Languages', 'Writing', 'Culture', 'Literature'],
    location: 'San Francisco, CA',
    age: 27,
    joinedDate: '2023-02-10',
    eventsAttended: 19,
    rating: 4.9
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Golden Gate Photography Walk',
    description: 'Join fellow photographers for a scenic walk across the Golden Gate Bridge. Perfect for all skill levels, we\'ll capture stunning sunrise shots and share techniques.',
    category: 'Photography',
    date: '2024-01-20',
    time: '06:30',
    location: 'Golden Gate Bridge, San Francisco',
    price: 0,
    capacity: 15,
    attendees: 8,
    image: 'https://images.pexels.com/photos/1006965/pexels-photo-1006965.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'SF Photo Club',
    tags: ['Photography', 'Outdoor', 'Sunrise', 'Walking'],
    difficulty: 'Beginner',
    duration: '3 hours'
  },
  {
    id: '2',
    title: 'Wine & Paint Night',
    description: 'Unleash your creativity while sipping on premium wines. All materials provided, no experience necessary. A perfect evening to meet new people and create art.',
    category: 'Art',
    date: '2024-01-22',
    time: '19:00',
    location: 'Art Studio Mission, San Francisco',
    price: 45,
    capacity: 20,
    attendees: 12,
    image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'Creative Nights SF',
    tags: ['Art', 'Wine', 'Social', 'Creative'],
    difficulty: 'All Levels',
    duration: '2.5 hours'
  },
  {
    id: '3',
    title: 'Startup Networking Mixer',
    description: 'Connect with entrepreneurs, investors, and innovators in the Bay Area startup scene. Featuring keynote speakers and structured networking sessions.',
    category: 'Networking',
    date: '2024-01-25',
    time: '18:30',
    location: 'WeWork SOMA, San Francisco',
    price: 25,
    capacity: 100,
    attendees: 67,
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'Bay Area Entrepreneurs',
    tags: ['Networking', 'Startups', 'Business', 'Professional'],
    difficulty: 'Professional',
    duration: '3 hours'
  },
  {
    id: '4',
    title: 'Sunset Yoga in the Park',
    description: 'Find your zen with a peaceful yoga session as the sun sets over the city. Suitable for all levels, mats provided. End with a group meditation.',
    category: 'Wellness',
    date: '2024-01-21',
    time: '17:30',
    location: 'Dolores Park, San Francisco',
    price: 15,
    capacity: 30,
    attendees: 18,
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'SF Wellness Community',
    tags: ['Yoga', 'Wellness', 'Outdoor', 'Meditation'],
    difficulty: 'All Levels',
    duration: '1.5 hours'
  },
  {
    id: '5',
    title: 'Jazz Night at The Blue Note',
    description: 'Experience the best of local jazz talent in an intimate setting. Featured artists include the Maria Santos Quartet and special guest performers.',
    category: 'Music',
    date: '2024-01-26',
    time: '20:00',
    location: 'The Blue Note, San Francisco',
    price: 35,
    capacity: 80,
    attendees: 45,
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'SF Jazz Society',
    tags: ['Jazz', 'Music', 'Live Performance', 'Culture'],
    difficulty: 'All Levels',
    duration: '3 hours'
  },
  {
    id: '6',
    title: 'Cooking Class: Italian Cuisine',
    description: 'Learn to make authentic Italian pasta and sauces from scratch. Includes wine pairing and a full dinner. Take home recipes and new cooking skills.',
    category: 'Cooking',
    date: '2024-01-24',
    time: '18:00',
    location: 'Culinary Institute SF',
    price: 85,
    capacity: 12,
    attendees: 9,
    image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'Chef Marco\'s Kitchen',
    tags: ['Cooking', 'Italian', 'Wine', 'Hands-on'],
    difficulty: 'Beginner',
    duration: '3.5 hours'
  }
];

export const mockCategories: EventCategory[] = [
  { id: '1', name: 'Photography', icon: 'Camera', color: 'bg-blue-500', count: 12 },
  { id: '2', name: 'Art', icon: 'Palette', color: 'bg-purple-500', count: 8 },
  { id: '3', name: 'Networking', icon: 'Users', color: 'bg-green-500', count: 15 },
  { id: '4', name: 'Wellness', icon: 'Heart', color: 'bg-pink-500', count: 10 },
  { id: '5', name: 'Music', icon: 'Music', color: 'bg-orange-500', count: 18 },
  { id: '6', name: 'Cooking', icon: 'ChefHat', color: 'bg-red-500', count: 7 },
  { id: '7', name: 'Sports', icon: 'Trophy', color: 'bg-yellow-500', count: 14 },
  { id: '8', name: 'Technology', icon: 'Laptop', color: 'bg-indigo-500', count: 11 }
];

export const mockMatches: Match[] = [
  {
    id: '1',
    user: mockUsers[0],
    event: mockEvents[0],
    matchScore: 95,
    commonInterests: ['Photography', 'Art'],
    distance: 2.3,
    status: 'pending',
    message: 'Hey! I saw you\'re interested in photography too. Would love to join you for this sunrise shoot!'
  },
  {
    id: '2',
    user: mockUsers[1],
    event: mockEvents[2],
    matchScore: 88,
    commonInterests: ['Technology', 'Networking'],
    distance: 1.8,
    status: 'accepted'
  },
  {
    id: '3',
    user: mockUsers[2],
    event: mockEvents[3],
    matchScore: 92,
    commonInterests: ['Wellness', 'Fitness'],
    distance: 0.9,
    status: 'pending'
  }
];
