import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import './app.scss'

export const metadata = {
  title: 'Japanese N5',
  description: 'Learn Japanese N5 vocabulary and grammar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json"/>
      </head>
      <body>{children}</body>
      </html>
  )
}
