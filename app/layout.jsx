import "../src/main.scss";

export const metadata = {
  title: "Maciej Kalwa. Front-end developer.",
  description: "Personal portfolio and CV of Maciej Kalwa.",
  icons: {
    icon: "/icons/icon-react.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark futura-bg"
      style={{ backgroundColor: "#131234" }}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
