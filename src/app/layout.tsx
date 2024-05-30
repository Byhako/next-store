import type { Metadata } from "next"
import { Inter } from "next/font/google"
import 'app/sass/globals.sass'
import { Header } from "app/components/shared/Header"
import { Footer } from "app/components/shared/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Store",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
