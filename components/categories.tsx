import { 
  Beef, 
  Carrot, 
  Egg, 
  Apple, 
  Milk, 
  Fish,
  Wheat,
  Flower2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'Meat',
    icon: Beef,
    color: 'bg-red-100 dark:bg-red-900/20',
    textColor: 'text-red-600 dark:text-red-400',
  },
  {
    name: 'Vegetables',
    icon: Carrot,
    color: 'bg-orange-100 dark:bg-orange-900/20',
    textColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    name: 'Eggs',
    icon: Egg,
    color: 'bg-yellow-100 dark:bg-yellow-900/20',
    textColor: 'text-yellow-600 dark:text-yellow-400',
  },
  {
    name: 'Fruits',
    icon: Apple,
    color: 'bg-green-100 dark:bg-green-900/20',
    textColor: 'text-green-600 dark:text-green-400',
  },
  {
    name: 'Dairy',
    icon: Milk,
    color: 'bg-blue-100 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    name: 'Seafood',
    icon: Fish,
    color: 'bg-cyan-100 dark:bg-cyan-900/20',
    textColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    name: 'Grains',
    icon: Wheat,
    color: 'bg-amber-100 dark:bg-amber-900/20',
    textColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    name: 'Flowers',
    icon: Flower2,
    color: 'bg-pink-100 dark:bg-pink-900/20',
    textColor: 'text-pink-600 dark:text-pink-400',
  },
];

export function Categories() {
  return (
    <section className="w-full py-12 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="flex flex-col items-center justify-center h-32 space-y-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className={`p-3 rounded-full ${category.color}`}>
                <category.icon className={`h-6 w-6 ${category.textColor}`} />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}