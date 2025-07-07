import React from 'react';
import { Bell, Search, Menu, Heart, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EventConnect
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant={activeTab === 'discover' ? 'default' : 'ghost'}
              onClick={() => onTabChange('discover')}
              className="flex items-center space-x-2"
            >
              <Search className="h-4 w-4" />
              <span>Discover</span>
            </Button>
            <Button
              variant={activeTab === 'events' ? 'default' : 'ghost'}
              onClick={() => onTabChange('events')}
              className="flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </Button>
            <Button
              variant={activeTab === 'matches' ? 'default' : 'ghost'}
              onClick={() => onTabChange('matches')}
              className="flex items-center space-x-2"
            >
              <Users className="h-4 w-4" />
              <span>Matches</span>
              <Badge variant="secondary" className="ml-1">3</Badge>
            </Button>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search events, people, or interests..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                2
              </Badge>
            </Button>
            
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" />
              <AvatarFallback>YU</AvatarFallback>
            </Avatar>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
