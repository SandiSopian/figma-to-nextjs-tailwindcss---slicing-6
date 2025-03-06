import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full transition-all">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-4">404 | Page Not Found</h2>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <div className="mt-8">
              <Link href="/" className="inline-block bg-BgColorMain hover:bg-BgColorSecond text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
