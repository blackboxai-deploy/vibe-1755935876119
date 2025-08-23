export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Hello World! 👋
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to your new Next.js application
        </p>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Getting Started
            </h2>
            <p className="text-gray-600">
              This is a simple Hello World app built with Next.js and Tailwind CSS.
              You can now start building your amazing project!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}