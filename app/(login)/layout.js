// app/(login)/layout.js
import "../globals.css";
export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen">{children}</div>
      </body>
    </html>
  );
}
