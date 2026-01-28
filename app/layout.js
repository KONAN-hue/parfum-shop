import './globals.css';

import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'GreatGood',
  description: 'Site de commande de parfums GreatGood',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        {children}
      </body>
    </html>
  );
}
