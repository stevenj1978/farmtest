'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CategoryFilters } from '@/components/category-filters';
import { SearchResults } from '@/components/search/search-results';
import { FILTERS } from '@/lib/constants/filters';
import { searchSchema, type SearchFormType } from '@/lib/types';

export function SearchFarms() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const form = useForm<SearchFormType>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      zipCode: '',
      radius: 25,
      productTypes: [],
      productAttributes: {},
      certifications: [],
    },
  });

  async function onSubmit(data: SearchFormType) {
    setIsSearching(true);
    try {
      // TODO: Implement API call to search farms
      console.log('Search data:', data);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Location Search */}
          <div className="flex items-center space-x-4 bg-white dark:bg-gray-900/90 rounded-lg shadow-lg p-4">
            <div className="flex-1 flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Enter your ZIP code"
                        className="border-0 focus-visible:ring-0 text-lg"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isSearching} size="lg">
              <Search className="h-4 w-4 mr-2" />
              Find Farms
            </Button>
          </div>

          {/* Category Filters */}
          <CategoryFilters form={form} />

          {/* Additional Filters */}
          <Accordion type="single" collapsible className="bg-white dark:bg-gray-900/90 rounded-lg shadow-lg">
            <AccordionItem value="additional">
              <AccordionTrigger className="px-6 py-4">
                <span className="flex items-center gap-2">
                  <ChevronDown className="h-4 w-4" />
                  Additional Filters
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-6">
                  {/* Farm Certifications */}
                  <div className="space-y-4">
                    <FormLabel className="text-lg font-semibold">Farm Certifications:</FormLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {FILTERS.CERTIFICATIONS.map((cert) => (
                        <FormField
                          key={cert.value}
                          control={form.control}
                          name="certifications"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(cert.value)}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...field.value, cert.value]
                                      : field.value?.filter((value) => value !== cert.value);
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {cert.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </form>
      </Form>

      {searchResults.length > 0 && (
        <div className="mt-8">
          <SearchResults farms={searchResults} isLoading={isSearching} />
        </div>
      )}
    </div>
  );
}