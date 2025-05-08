import "./globals.css";


export const metadata = {
  title: "RideRenew Pro Valeting",
  description: "Your one-stop solution for all your car valeting needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}
