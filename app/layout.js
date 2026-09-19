import './globals.css'

export const metadata = {
  title: 'Voymera',
  description: 'Hotels, flights, tours and travel inspiration.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
