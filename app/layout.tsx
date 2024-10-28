import { GeistSans } from 'geist/font/sans';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata = {
  title: 'Farm Fresh Direct - Connect with Local Farmers',
  description: 'Find and buy fresh, local produce directly from farmers in your area.',
  keywords: ['farm', 'local produce', 'farmers market', 'organic', 'fresh food'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        GeistSans.className
      )}>
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}