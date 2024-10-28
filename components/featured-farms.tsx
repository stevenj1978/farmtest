import { MapPin, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FEATURED_FARMS = [
  {
    id: '1',
    name: 'Green Valley Farm',
    description: 'Organic vegetables and free-range eggs from our family to yours',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=60',
    badges: ['Organic Certified', 'Family Owned'],
    rating: 4.9,
    specialties: ['Heirloom Tomatoes', 'Free Range Eggs'],
  },
  {
    id: '2',
    name: 'Highland Cattle Co.',
    description: 'Premium grass-fed beef and heritage pork raised with care',
    location: 'Eugene, OR',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=60',
    badges: ['Grass Fed', 'Hormone Free'],
    rating: 4.8,
    specialties: ['Black Angus Beef', 'Berkshire Pork'],
  },
  {
    id: '3',
    name: 'Sunrise Orchards',
    description: 'Sweet and juicy fruits grown with sustainable practices',
    location: 'Salem, OR',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop&q=60',
    badges: ['Pesticide Free', 'Sustainable'],
    rating: 4.7,
    specialties: ['Heritage Apples', 'Raw Honey'],
  },
];

export function FeaturedFarms() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">
            Featured Farms
          </h2>
          <button className="text-green-600 dark:text-green-400 hover:underline">
            View all farms →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_FARMS.map((farm) => (
            <Card key={farm.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute top-2 right-2 z-10 flex items-center bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 stroke-yellow-400" />
                  {farm.rating}
                </div>
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{farm.name}</span>
                </CardTitle>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  {farm.location}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {farm.description}
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {farm.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Known for: </span>
                    {farm.specialties.join(', ')}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}