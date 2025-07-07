import React from 'react';
import { Calendar, MapPin, Users, Clock, DollarSign, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Event } from '@/types';

interface EventCardProps {
  event: Event;
  onJoin?: () => void;
  showMatchScore?: boolean;
  matchScore?: number;
}

export const EventCard: React.FC<EventCardProps> = ({ 
  event, 
  onJoin, 
  showMatchScore = false, 
  matchScore 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {showMatchScore && matchScore && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-green-500 text-white font-semibold">
              <Star className="h-3 w-3 mr-1" />
              {matchScore}% Match
            </Badge>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {event.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {event.title}
          </h3>
          {event.price === 0 ? (
            <Badge variant="outline" className="text-green-600 border-green-600">
              Free
            </Badge>
          ) : (
            <div className="flex items-center text-sm font-medium">
              <DollarSign className="h-3 w-3" />
              {event.price}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            {formatDate(event.date)} at {formatTime(event.time)}
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-red-500" />
            {event.location}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-2 text-green-500" />
              {event.attendees}/{event.capacity} attending
            </div>
            {event.duration && (
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {event.duration}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {event.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {event.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{event.tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={`https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop`} />
              <AvatarFallback className="text-xs">OR</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">
              by {event.organizer}
            </span>
          </div>
          
          <Button 
            onClick={onJoin}
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Join Event
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
