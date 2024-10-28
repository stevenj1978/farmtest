'use client';

import { Farm } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Award } from 'lucide-react';

interface SearchResultsProps {
  farms: Farm[];
  isLoading?: boolean;
}

export function SearchResults({ farms, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800" />
            <CardHeader>
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (farms.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          No farms found matching your criteria. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {farms.map((farm) => (
        <Card key={farm.id} className="overflow-hidden group">
          <div className="aspect-video w-full overflow-hidden relative">
            {farm.featured && (
              <div className="absolute top-2 right-2 z-10">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  Featured
                </Badge>
              </div>
            )}
            <img
              src={farm.image}
              alt={farm.name}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-start justify-between">
              <span>{farm.name}</span>
              {farm.location.distance && (
                <Badge variant="outline">{farm.location.distance} mi</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {farm.description}
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              {farm.location.city}, {farm.location.state}
            </div>
            <div className="flex flex-wrap gap-2">
              {farm.certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="text-xs">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}