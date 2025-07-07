import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EventCard } from './EventCard';
import { mockEvents } from '@/data/mockData';

export const EventsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Mock user's events
  const userEvents = {
    upcoming: mockEvents.slice(0, 3),
    past: mockEvents.slice(3, 5),
    hosting: mockEvents.slice(0, 1)
  };

  const stats = [
    { label: 'Events Attended', value: '24', icon: Calendar, color: 'text-blue-600' },
    { label: 'Hours Spent', value: '156', icon: Clock, color: 'text-green-600' },
    { label: 'People Met', value: '89', icon: Users, color: 'text-purple-600' },
    { label: 'Cities Visited', value: '12', icon: MapPin, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Events</h1>
          <p className="text-muted-foreground">Manage your event schedule and history</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Events Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Upcoming</span>
            <Badge variant="secondary">{userEvents.upcoming.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="past" className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Past Events</span>
            <Badge variant="secondary">{userEvents.past.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="hosting" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Hosting</span>
            <Badge variant="secondary">{userEvents.hosting.length}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Add to Calendar
            </Button>
          </div>
          
          {userEvents.upcoming.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userEvents.upcoming.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onJoin={() => console.log('View event details:', event.id)}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No upcoming events</h3>
                <p className="text-muted-foreground mb-4">
                  Discover and join events that match your interests
                </p>
                <Button>Browse Events</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <h2 className="text-lg font-semibold">Past Events</h2>
          
          {userEvents.past.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userEvents.past.map((event) => (
                <div key={event.id} className="relative">
                  <EventCard
                    event={event}
                    onJoin={() => console.log('Rate event:', event.id)}
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-gray-500">Attended</Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No past events</h3>
                <p className="text-muted-foreground">
                  Your event history will appear here
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="hosting" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Events You're Hosting</h2>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Plus className="h-4 w-4 mr-2" />
              Create New Event
            </Button>
          </div>
          
          {userEvents.hosting.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userEvents.hosting.map((event) => (
                <div key={event.id} className="relative">
                  <EventCard
                    event={event}
                    onJoin={() => console.log('Manage event:', event.id)}
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-blue-500">Hosting</Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No events hosted yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first event and bring people together
                </p>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
