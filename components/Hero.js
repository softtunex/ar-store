// components/Hero.js
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to AR-Store</h1>
        <p className="text-lg mb-8">
          Experience a new way of shopping with augmented reality. See your
          products before you buy them!
        </p>
        <div className="space-x-4">
          <Link href="/auth/sign-up">
            <a className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
              Get Started
            </a>
          </Link>
          <Link href="/auth/sign-in">
            <a className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold">
              Login
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
