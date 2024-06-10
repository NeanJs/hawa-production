import "./globals.css";

export const metadata = {
  title: "Hawa Production | Think. Capture. Present.",
  description: `Hawa Production is where stories come alive. We blend creativity with expertise to craft compelling narratives that captivate audiences. From concept to creation, we're dedicated to delivering exceptional results that resonate. Experience the art of storytelling with Hawa Production.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
