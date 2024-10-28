'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
        <p className="text-gray-600">{error.message}</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}