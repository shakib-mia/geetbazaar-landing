import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      heading: "Easy Uploads",
      paragraph:
        "Drag, drop, and release music in just minutes. Our smooth upload process makes it effortless to share singles, EPs, and albums without the technical hassle.",
    },
    {
      id: 2,
      heading: "Global Reach",
      paragraph:
        "Distribute your tracks across Spotify, Apple Music, YouTube, TikTok, and 100+ platforms worldwide. Reach fans everywhere and grow your audience without limits.",
    },
    {
      id: 3,
      heading: "Revenue Insights",
      paragraph:
        "Stay on top of your earnings with real-time revenue tracking. Withdraw anytime and see exactly how much each release is generating.",
    },
    {
      id: 4,
      heading: "Analytics Dashboard",
      paragraph:
        "Get powerful insights into your listeners — track streams, downloads, and audience demographics to make smarter decisions for your music career.",
    },
    {
      id: 5,
      heading: "Multi-Artist Management",
      paragraph:
        "Easily manage multiple artists or projects from one dashboard. Perfect for labels, managers, and creators handling more than one career.",
    },
    {
      id: 6,
      heading: "Secure & Reliable",
      paragraph:
        "Your music is protected with encrypted storage and cloud backups, ensuring your files and earnings stay safe, secure, and always accessible.",
    },
  ];

  return (
    <section className="container">
      <h2 data-animate="fade-in-up" className="lg:w-1/2 mx-auto text-center">
        All-in-One Music Distribution Platform
      </h2>
      <p
        data-animate="fade-in-up"
        className="lg:w-1/2 mx-auto text-center"
        data-delay="100"
      >
        Upload your music, distribute worldwide, track real-time earnings, and
        manage multiple artists effortlessly — all from one secure platform.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6 mt-8 lg:w-5/6 mx-auto">
        {features.map(({ id, heading, paragraph }) => (
          <div key={id} data-animate="fade-in-up">
            <h5>{heading}</h5>
            <p className="mt-2">{paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
