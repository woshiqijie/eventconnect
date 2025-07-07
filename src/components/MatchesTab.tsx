import React, { useState } from 'react';
import { Heart, MessageCircle, Users, Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MatchCard } from './MatchCard';
import { mockMatches } from '@/data/mockData';

export const MatchesTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [sortBy, setSortBy] = useState('score');

  const matches = {
    pending: mockMatches.filter(m => m.status === 'pending'),
    accepted: mockMatches.filter(m => m.status === 'accepted'),
    all: mockMatches
  };

  const stats = [
    { label: 'Total Matches', value: mockMatches.length.toString(), icon: Heart, color: 'text-red-500' },
    { label: 'Pending', value: matches.pending.length.toString(), icon: Users, color: 'text-yellow-500' },
    { label: 'Accepted', value: matches.accepted.length.toString(), icon: Star, color: 'text-green-500' },
    { label: 'Messages', value: '12', icon: MessageCircle, color: 'text-blue-500' }
  ];

  const handleAcceptMatch = (matchId: string) => {
    console.log('Accept match:', matchId);
  };

  const handleDeclineMatch = (matchId: string) => {
    console.log('Decline match:', matchId);
  };

  const handleMessageMatch = (matchId: string) => {
    console.log('Message match:', matchId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Event Matches</h1>
          <p className="text-muted-foreground">Connect with like-minded people for upcoming events</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="score">Match Score</SelectItem>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="date">Event Date</SelectItem>
              <SelectItem value="interests">Common Interests</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
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

      {/* Matches Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="flex items-center space-x-2">
            <Heart className="h-4 w-4" />
            <span>Pending</span>
            <Badge variant="secondary">{matches.pending.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="accepted" className="flex items-center space-x-2">
            <Star className="h-4 w-4" />
            <span>Accepted</span>
            <Badge variant="secondary">{matches.accepted.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="all" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>All Matches</span>
            <Badge variant="secondary">{matches.all.length}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Pending Matches</h2>
            <p className="text-sm text-muted-foreground">
              {matches.pending.length} people want to attend events with you
            </p>
          </div>
          
          {matches.pending.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matches.pending.map((match) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  onAccept={() => handleAcceptMatch(match.id)}
                  onDecline={() => handleDeclineMatch(match.id)}
                  onMessage={() => handleMessageMatch(match.id)}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No pending matches</h3>
                <p className="text-muted-foreground mb-4">
                  Join more events to get matched with like-minded people
                </p>
                <Button>Discover Events</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Accepted Matches</h2>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message All
            </Button>
          </div>
          
          {matches.accepted.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matches.accepted.map((match) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  onMessage={() => handleMessageMatch(match.id)}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No accepted matches yet</h3>
                <p className="text-muted-foreground">
                  Accept pending matches to start connecting with people
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <h2 className="text-lg font-semibold">All Matches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.all.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onAccept={() => handleAcceptMatch(match.id)}
                onDecline={() => handleDeclineMatch(match.id)}
                onMessage={() => handleMessageMatch(match.id)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
