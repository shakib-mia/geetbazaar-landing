import React from "react";

export const metadata = {
  title: "Services - GeetBazaar",
  description:
    "Discover the comprehensive services offered by GeetBazaar to help artists and labels distribute, monetize, and analyze their music effectively.",
};

const page = () => {
  return (
    <div className="relative py-12 lg:py-32 container">
      <div className="text-center">
        <h6
          className="bg-gray-700 inline-block px-4 py-2 rounded-full !text-white mx-auto"
          // data-animate="fade-in-up"
        >
          Services
        </h6>

        <h2
          // data-animate="fade-in-up"
          data-delay="100"
          className="mt-4 text-center"
        >
          What Do We Offer
        </h2>

        <p className="lg:w-8/12 mx-auto">
          At GeetBazaar, we empower artists, labels, and creators with
          cutting-edge tools and services that help them share their music with
          the world, maximize revenue, and make data-driven decisions for
          sustainable growth.
        </p>
      </div>

      <section className="mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <aside>
          <h2> Music Distribution</h2>
          <p>
            Take your music beyond borders. With GeetBazaar, you can distribute
            your songs to all major streaming platforms, digital stores, and
            telecom partners in just a few clicks.
          </p>
          <ul className="list-disc pl-4 mt-2">
            <li>
              Global coverage: Spotify, Apple Music, YouTube Music, Amazon
              Music, JioSaavn, Wynk, and more.
            </li>
            <li>Caller tune support: Jio, Airtel, Vi, BSNL.</li>
            <li>24/7 upload management and fast delivery.</li>
            <li>Easy catalog management with unlimited releases.</li>
          </ul>
        </aside>
        <aside className="w-full aspect-square bg-primary rounded-full"></aside>
      </section>

      <section className="mx-auto text-right grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <aside className="w-full aspect-square bg-primary rounded-full order-2 lg:order-1"></aside>
        <aside className="order-1 lg:order-2">
          <h2 className="text-xl font-semibold mb-2">Monetization</h2>
          <p className="mb-4">
            Take your music beyond borders. With GeetBazaar, you can distribute
            your songs to all major streaming platforms, digital stores, and
            telecom partners in just a few clicks.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center justify-end gap-2">
              <span>
                Global coverage: Spotify, Apple Music, YouTube Music, Amazon
                Music, JioSaavn, Wynk, and more.
              </span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>Caller tune support: Jio, Airtel, Vi, BSNL.</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>24/7 upload management and fast delivery.</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>Easy catalog management with unlimited releases.</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </li>
          </ul>
        </aside>
      </section>

      <section className="mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <aside>
          <h2>In-depth Data Analysis</h2>
          <p>
            Success is more than just streams. GeetBazaar gives you powerful
            insights to track performance and grow strategically.
          </p>
          <ul className="list-disc pl-4 mt-2">
            <li>Real-time streaming & revenue reports.</li>
            <li>Real-time streaming & revenue reports.</li>
            <li>Track listener growth, engagement, and trends.</li>
            <li>Smart tools to help you make data-backed decisions.</li>
          </ul>
        </aside>
        <aside className="w-full aspect-square bg-primary rounded-full"></aside>
      </section>

      <section className="mx-auto text-right grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <aside className="w-full aspect-square bg-primary rounded-full order-2 lg:order-1"></aside>
        <aside className="order-1 lg:order-2">
          <h2 className="text-xl font-semibold mb-2">
            Seamless Revenue Withdrawal
          </h2>
          <p className="mb-4">
            Getting paid has never been easier. With GeetBazaar, you can
            withdraw your revenue securely, quickly, and without hidden charges.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center justify-end gap-2">
              <span>
                Multiple payout options (Bank Transfer, Mobile Wallets,
                International Gateways).
              </span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>Fast processing with minimum payout thresholds.</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>Transparent transaction history available anytime.</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>Hassle-free withdrawal in just a few clicks.</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default page;
