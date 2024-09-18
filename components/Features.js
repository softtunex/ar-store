// components/Features.js
export default function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose AR-Store?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">
              Augmented Reality Previews
            </h3>
            <p>
              See your products in real-time before making a purchase using AR
              technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Multi-Store Support</h3>
            <p>
              Create and manage multiple stores with ease, all in one platform.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Easy-to-Use Interface</h3>
            <p>
              Our platform is designed to be user-friendly, ensuring a seamless
              shopping experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
