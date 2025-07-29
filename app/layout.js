import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import ConvexClientProvider from "./ConvexClientProvider";


export const metadata = {
  title: "ROCKYZEN – AI Website Builder",
  description: "Built by Radhakrishnan V using Gemini + Convex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <ConvexClientProvider>
        <Provider>
        {children}
        </Provider>
        </ConvexClientProvider>
        
      </body>
    </html>
  );
}
