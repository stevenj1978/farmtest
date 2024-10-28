'use client';

import { 
  Beef, 
  Carrot, 
  Egg, 
  Apple, 
  Milk,
  Bird,
  Leaf,
  Cookie,
  CircleDot,
  Sandwich
} from 'lucide-react';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { FILTERS } from '@/lib/constants/filters';
import { type UseFormReturn } from 'react-hook-form';
import { type SearchFormType } from '@/lib/types';

const CATEGORY_ICONS = {
  vegetables: Carrot,
  fruits: Apple,
  beef: Beef,
  pork: Sandwich,
  lamb: Bird,
  chicken: Bird,
  turkey: Bird,
  eggs: Egg,
  dairy: Milk,
  honey: Cookie,
  mushrooms: CircleDot,
  herbs: Leaf,
} as const;

const CATEGORY_COLORS = {
  vegetables: 'text-orange-600 dark:text-orange-400',
  fruits: 'text-green-600 dark:text-green-400',
  beef: 'text-red-600 dark:text-red-400',
  pork: 'text-red-500 dark:text-red-300',
  lamb: 'text-pink-600 dark:text-pink-400',
  chicken: 'text-yellow-600 dark:text-yellow-400',
  turkey: 'text-amber-600 dark:text-amber-400',
  eggs: 'text-yellow-500 dark:text-yellow-300',
  dairy: 'text-blue-600 dark:text-blue-400',
  honey: 'text-amber-500 dark:text-amber-300',
  mushrooms: 'text-stone-600 dark:text-stone-400',
  herbs: 'text-emerald-600 dark:text-emerald-400',
} as const;

interface CategoryFiltersProps {
  form: UseFormReturn<SearchFormType>;
}

export function CategoryFilters({ form }: CategoryFiltersProps) {
  const selectedCategories = form.watch('productTypes');

  return (
    <div className="space-y-6">
      {/* Mobile: Checkbox Grid */}
      <div className="md:hidden bg-white dark:bg-gray-900/90 rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Find Me a Farmer that Sells:
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {FILTERS.PRODUCT_TYPES.map((category) => (
            <FormField
              key={category.value}
              control={form.control}
              name="productTypes"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(category.value)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, category.value]
                          : field.value?.filter((value) => value !== category.value);
                        field.onChange(newValue);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal cursor-pointer text-gray-900 dark:text-gray-100">
                    {category.label}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Scrollable Category Icons */}
      <div className="hidden md:block">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Find Me a Farmer that Sells:
        </h3>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg bg-white dark:bg-gray-900/90 shadow-lg p-4">
          <div className="flex space-x-4">
            {FILTERS.PRODUCT_TYPES.map((category) => {
              const Icon = CATEGORY_ICONS[category.value as keyof typeof CATEGORY_ICONS] || CircleDot;
              const colorClass = CATEGORY_COLORS[category.value as keyof typeof CATEGORY_COLORS] || 'text-gray-600';
              const isSelected = selectedCategories.includes(category.value);
              
              return (
                <button
                  key={category.value}
                  onClick={() => {
                    const currentValue = form.getValues('productTypes');
                    const isSelected = currentValue.includes(category.value);
                    form.setValue('productTypes', isSelected
                      ? currentValue.filter(v => v !== category.value)
                      : [...currentValue, category.value]
                    );
                  }}
                  className={`flex flex-col items-center justify-center p-2 min-w-[100px] rounded-lg transition-colors
                    ${isSelected
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                >
                  <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                    <Icon className={`h-6 w-6 ${colorClass}`} />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Dynamic Subcategory Filters */}
      {selectedCategories.length > 0 && (
        <div className="bg-white dark:bg-gray-900/90 rounded-lg shadow-lg divide-y divide-gray-200 dark:divide-gray-800">
          {selectedCategories.map((categoryValue) => {
            const category = FILTERS.PRODUCT_TYPES.find(c => c.value === categoryValue);
            const Icon = CATEGORY_ICONS[categoryValue as keyof typeof CATEGORY_ICONS] || CircleDot;
            const colorClass = CATEGORY_COLORS[categoryValue as keyof typeof CATEGORY_COLORS] || 'text-gray-600';
            const attributes = FILTERS.PRODUCT_ATTRIBUTES[categoryValue as keyof typeof FILTERS.PRODUCT_ATTRIBUTES];

            if (!category || !attributes) return null;

            return (
              <div key={categoryValue} className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                    <Icon className={`h-5 w-5 ${colorClass}`} />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {category.label} Options
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-12">
                  {attributes.map((attr) => (
                    <FormField
                      key={attr.value}
                      control={form.control}
                      name={`productAttributes.${categoryValue}`}
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(attr.value)}
                              onCheckedChange={(checked) => {
                                const currentValues = field.value || [];
                                const newValue = checked
                                  ? [...currentValues, attr.value]
                                  : currentValues.filter((value) => value !== attr.value);
                                field.onChange(newValue);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal text-gray-900 dark:text-gray-100">
                            {attr.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}