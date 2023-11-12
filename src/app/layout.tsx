import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainContainer from '@common/containers/mainContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MELI',
    description: 'MELI example app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MainContainer>
                    {children}
                </MainContainer>
            </body>
        </html>
    )
}
