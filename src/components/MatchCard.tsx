import React from 'react';
import { MessageCircle, X, Check, MapPin, Star, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Match } from '@/types';

interface MatchCardProps {
  match: Match;
  onAccept?: () => void;
  onDecline?: () => void;
  onMessage?: () => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ 
  match, 
  onAccept, 
  onDecline, 
  onMessage 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={match.user.avatar} />
            <AvatarFallback>{match.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{match.user.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{match.user.rating}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
              <span>{match.user.age} years old</span>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {match.distance}km away
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Match Score */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-800">
              {match.matchScore}% Match
            </span>
          </div>
          <Badge variant="outline" className="text-green-700 border-green-300">
            Great Match!
          </Badge>
        </div>

        {/* Event Info */}
        <div className="space-y-2">
          <h4 className="font-medium">For Event:</h4>
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <img
              src={match.event.image}
              alt={match.event.title}
              className="h-12 w-12 rounded object-cover"
            />
            <div className="flex-1 min-w-0">
              <h5 className="font-medium text-sm line-clamp-1">{match.event.title}</h5>
              <p className="text-xs text-muted-foreground">
                {formatDate(match.event.date)} • {match.event.location}
              </p>
            </div>
          </div>
        </div>

        {/* Common Interests */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Common Interests:</h4>
          <div className="flex flex-wrap gap-1">
            {match.commonInterests.map((interest) => (
              <Badge key={interest} variant="secondary" className="text-xs">
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        {/* User Bio */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">About:</h4>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {match.user.bio}
          </p>
        </div>

        {/* Message if exists */}
        {match.message && (
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 italic">"{match.message}"</p>
          </div>
        )}

        {/* Action Buttons */}
        {match.status === 'pending' && (
          <div className="flex space-x-2 pt-2">
            <Button
              onClick={onDecline}
              variant="outline"
              size="sm"
              className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
            >
              <X className="h-4 w-4 mr-1" />
              Decline
            </Button>
            <Button
              onClick={onMessage}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Message
            </Button>
            <Button
              onClick={onAccept}
              size="sm"
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              <Check className="h-4 w-4 mr-1" />
              Accept
            </Button>
          </div>
        )}

        {match.status === 'accepted' && (
          <div className="flex items-center justify-center p-3 bg-green-50 rounded-lg border border-green-200">
            <Check className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">Match Accepted!</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
