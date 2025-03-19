import type React from "react"
import "@/app/globals.css"
import { Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Configuração da fonte Playfair Display para uso global
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>Polly Paixão - Consultoria de Sono</title>
        <meta name="description" content="Durma bem e acorde disposto sem remédios" />
      </head>
      <body className={`${playfair.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
