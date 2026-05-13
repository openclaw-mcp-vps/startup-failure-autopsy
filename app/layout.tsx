import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Startup Failure Autopsy — Learn From Every Failure',
  description: 'Structured startup failure analysis and lessons database. Document, search, and learn from startup failures to build better companies.',
  keywords: 'startup failure, post-mortem, lessons learned, founder stories, startup education',
  openGraph: {
    title: 'Startup Failure Autopsy',
    description: 'Structured startup failure analysis and lessons database.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f24c24c6-2ad6-48e1-97ba-d8816a9c274f"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
