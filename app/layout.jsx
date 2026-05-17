import "../src/main.scss";

export const metadata = {
  title: "Maciej Kalwa. Front-end developer.",
  description: "Personal portfolio and CV of Maciej Kalwa.",
  icons: {
    icon: "/icons/icon-react.svg",
  },
};

const themeScript = `
(function () {
  const stored = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (stored === "dark" || (!stored && systemDark)) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="futura-bg"
      style={{ backgroundColor: "#131234" }}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
