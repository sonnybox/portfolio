import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const icons = localFont({
    src: '../fonts/symbols-regular.ttf',
    variable: '--icon',
});
const font = Figtree({ subsets: ['latin'], variable: '--main' });

export const metadata: Metadata = {
    title: 'Portfolio - Sonny Box',
    description: 'My personal portfolio website.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${font.variable} ${icons.variable} w-screen h-screen overflow-hidden bg-primary-bg text-primary-text`}
            >
                {children}
            </body>
        </html>
    );
}
