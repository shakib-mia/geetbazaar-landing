import Head from "next/head";
import React from "react";
import Button from "../components/Button/Button";

export const metadata = {
  title: "About - GeetBazaar",
};

const page = () => {
  return (
    <>
      {/* <Head> */}
      {/* <title></title> */}
      {/* </Head> */}
      <main>
        <header className="container">
          <h2
            className="lg:w-8/12 text-center mx-auto"
            data-animate="fade-in-up"
          >
            GeetBazaar: Where Your Music Meets the World
          </h2>
          <p
            className="lg:w-10/12 mx-auto text-center"
            data-animate="fade-in-up"
            data-delay="1000"
          >
            At GeetBazaar, we believe every artist deserves the stage to shine.
            Whether you’re an independent musician, a label, or a creator, our
            platform empowers you to share your music with a global audience
            effortlessly. From distribution to monetization, analytics to
            revenue management, GeetBazaar is your all-in-one hub for music
            success.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 container gap-12 items-center">
          <aside className="order-2 lg:order-1">
            <h2 data-animate="fade-in-up">Our Mission</h2>
            <p className="py-2" data-animate="fade-in-up" data-delay="500">
              We aim to break down barriers for artists everywhere by providing
              tools and services that make music distribution simple, fair, and
              profitable. Our mission is to help creators focus on their art
              while we handle the technicalities of reaching millions of
              listeners worldwide.
            </p>

            <div data-animate="fade-in-up">
              <Button>Learn More</Button>
            </div>
          </aside>
          <aside
            data-animate="fade-in-up"
            className="w-full mx-auto bg-purple-700 aspect-square rounded-full order-1 lg:order-2"
          ></aside>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 container gap-12 items-center">
          <aside
            data-animate="fade-in-up"
            className="w-full mx-auto bg-purple-700 aspect-square rounded-full"
          ></aside>
          <aside>
            <h2 data-animate="fade-in-up">What We Offer</h2>

            <ul className="py-4 space-y-2 list-disc list-inside">
              <li data-animate="fade-in-up">
                <b>Global Music Distribution:</b> Release your music across all
                major streaming platforms including Spotify, Apple Music,
                YouTube Music, Amazon Music, JioSaavn, Wynk, and more.
              </li>

              <li data-animate="fade-in-up">
                <b>Caller Tune Services:</b> Make your music available as CRBT
                on Jio, Vi, BSNL, Airtel, and other operators.
              </li>

              <li data-animate="fade-in-up">
                <b>Monetization & Revenue:</b> Keep up to 90% of your streaming
                revenue and earn through social media platforms like Facebook
                and Instagram.
              </li>

              <li data-animate="fade-in-up">
                <b>Powerful Analytics:</b> Track streams, listener growth,
                engagement, and earnings in real-time with our intuitive
                dashboard.
              </li>

              <li data-animate="fade-in-up">
                <b>Easy Catalog Management:</b> Upload unlimited songs, schedule
                releases, and manage your music with complete copyright
                ownership.
              </li>
            </ul>

            <div data-animate="fade-in-up">
              <Button>Learn More</Button>
            </div>
          </aside>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 container gap-12 items-center">
          <aside className="order-2 lg:order-1">
            <h2 data-animate="fade-in-up">Why Artists Choose GeetBazaar</h2>

            <ul className="py-4 space-y-2 list-disc list-inside">
              <li data-animate="fade-in-up">
                <b>Worldwide Reach:</b> No matter where your fans are,
                GeetBazaar ensures your music is accessible globally.
              </li>
              <li data-animate="fade-in-up">
                <b>Fast & Secure:</b> Quick song approvals, hassle-free uploads,
                and secure revenue withdrawals.
              </li>
              <li data-animate="fade-in-up">
                <b>Flexible Plans:</b> From free releases to advanced yearly
                plans, there’s a package to suit every artist’s needs.
              </li>
              <li data-animate="fade-in-up">
                <b>Comprehensive Support:</b> Lifetime support and expert
                guidance for your music journey.
              </li>
            </ul>

            <div data-animate="fade-in-up">
              <Button>Learn More</Button>
            </div>
          </aside>

          <aside
            data-animate="fade-in-up"
            className="w-full mx-auto bg-purple-700 aspect-square rounded-full order-1 lg:order-2"
          ></aside>
        </section>

        <section className="container text-center">
          <h2 data-animate="fade-in-up">Join GeetBazaar Today</h2>
          <p className="lg:w-8/12 mx-auto py-4" data-animate="fade-in-up">
            Ready to take your music career to the next level? Sign up with
            GeetBazaar and start distributing your music to millions of fans
            worldwide. Whether you’re an independent artist, a label, or a
            creator, we have the tools and services to help you succeed.
          </p>

          <div data-animate="fade-in-up">
            <Button
              href="https://geetbazaar.adztronaut.com/"
              className="mx-auto w-fit"
              target="_blank"
            >
              Get Started
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
