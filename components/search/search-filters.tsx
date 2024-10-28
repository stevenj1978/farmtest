'use client';

import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FILTERS } from '@/lib/constants/filters';
import { type SearchFormType } from '@/lib/types';
import { type Control } from 'react-hook-form';

interface SearchFiltersProps {
  control: Control<SearchFormType>;
  onFilterChange: (values: any) => void;
  watchedValues: SearchFormType;
}

export function SearchFilters({ control, onFilterChange, watchedValues }: SearchFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <div className="space-y-6">
        <FormField
          control={control}
          name="productTypes"
          render={() => (
            <FormItem>
              <FormLabel className="text-base">Product Types</FormLabel>
              <div className="grid grid-cols-2 gap-2">
                {FILTERS.PRODUCT_TYPES.map((type) => (
                  <FormField
                    key={type.value}
                    control={control}
                    name="productTypes"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type.value)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, type.value]
                                : field.value?.filter((value) => value !== type.value);
                              field.onChange(newValue);
                              onFilterChange({ ...watchedValues, productTypes: newValue });
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {type.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="certifications"
          render={() => (
            <FormItem>
              <FormLabel className="text-base">Farm Certifications</FormLabel>
              <div className="grid grid-cols-1 gap-2">
                {FILTERS.CERTIFICATIONS.map((cert) => (
                  <FormField
                    key={cert.value}
                    control={control}
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
                              onFilterChange({ ...watchedValues, certifications: newValue });
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
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-6">
        <FormField
          control={control}
          name="meatAttributes"
          render={() => (
            <FormItem>
              <FormLabel className="text-base">Meat Specifications</FormLabel>
              <div className="grid grid-cols-1 gap-2">
                {FILTERS.MEAT_ATTRIBUTES.map((attr) => (
                  <FormField
                    key={attr.value}
                    control={control}
                    name="meatAttributes"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(attr.value)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, attr.value]
                                : field.value?.filter((value) => value !== attr.value);
                              field.onChange(newValue);
                              onFilterChange({ ...watchedValues, meatAttributes: newValue });
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {attr.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="weightPricing"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Weight Pricing</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select pricing type" />
                </SelectTrigger>
                <SelectContent>
                  {FILTERS.WEIGHT_PRICING.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="seasonalAvailability"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Seasonal Availability</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  {FILTERS.SEASONAL_AVAILABILITY.map((season) => (
                    <SelectItem key={season.value} value={season.value}>
                      {season.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}