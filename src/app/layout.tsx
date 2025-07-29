import React from 'react';
import '@/app/globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>AI Generated Project</title>
        <meta name="description" content="A comprehensive Next.js app." />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;