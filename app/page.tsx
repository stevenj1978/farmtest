import { SearchFarms } from '@/components/search-farms';
import { FeaturedFarms } from '@/components/featured-farms';
import { Leaf, UtensilsCrossed, Apple, Beef } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Search Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Fresh from Local Farms to Your Table
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connect directly with farmers in your area
            </p>
          </div>
          <SearchFarms />
        </div>
      </section>

      {/* Featured Farms Section */}
      <FeaturedFarms />

      {/* Why Choose Local Section */}
      <section className="w-full py-12 md:py-24 bg-green-50 dark:bg-gray-800/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Why Choose Local Farms?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">Fresh & Seasonal</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get produce at peak freshness, harvested at the perfect time
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <UtensilsCrossed className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">Know Your Farmer</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Connect directly with local farmers who grow your food
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <Apple className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">Better for You</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access to organic and naturally grown produce
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <Beef className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">Quality Meats</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ethically raised, grass-fed, and naturally processed meats
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}