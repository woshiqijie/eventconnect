import React from 'react';
import { Camera, Palette, Users, Heart, Music, ChefHat, Trophy, Laptop } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EventCategory } from '@/types';

const iconMap = {
  Camera,
  Palette,
  Users,
  Heart,
  Music,
  ChefHat,
  Trophy,
  Laptop
};

interface CategoryFilterProps {
  categories: EventCategory[];
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onCategoryToggle
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          const isSelected = selectedCategories.includes(category.id);
          
          return (
            <Button
              key={category.id}
              variant={isSelected ? "default" : "outline"}
              onClick={() => onCategoryToggle(category.id)}
              className={`h-auto p-4 flex flex-col items-center space-y-2 transition-all duration-200 ${
                isSelected 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20' : category.color}`}>
                <IconComponent className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-white'}`} />
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{category.name}</div>
                <Badge 
                  variant={isSelected ? "secondary" : "outline"} 
                  className={`text-xs mt-1 ${isSelected ? 'bg-white/20 text-white border-white/30' : ''}`}
                >
                  {category.count}
                </Badge>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
