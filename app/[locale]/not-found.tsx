import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Не знайдено</h2>
      <p className="text-lg text-gray-700 mb-8">Не вдалося знайти запитуваний ресурс</p>
      <Link href="/">
        <a className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Повернення на головну
        </a>
      </Link>
    </div>
  );
}
