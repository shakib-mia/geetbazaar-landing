import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";

const ContactPage = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 mx-auto max-w-xl">
          Have questions, feedback, or need assistance? Our team is here to help
          you every step of the way.
        </p>
      </header>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <aside className="space-y-6">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-200">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-purple-600 dark:text-purple-400" />
              Email:{" "}
              <a
                href="mailto:support@geetbazaar.com"
                className="underline hover:text-purple-600 dark:hover:text-purple-400"
              >
                support@geetbazaar.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-purple-600 dark:text-purple-400" />
              Phone: +880 1234-567890
            </p>
            <p className="flex items-center gap-2">
              <IoLocation className="text-purple-600 dark:text-purple-400" />
              Office Address:
            </p>
            <div className="pl-7">
              <p>GeetBazaar HQ</p>
              <p>Cooch Beher, West Bengal, Bangladesh</p>
            </div>
          </div>
        </aside>

        {/* Contact Form */}
        <aside className="col-span-2">
          <form className="space-y-6 p-6 dark:shadow-white/50 shadow-[0_0_10px] rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Name" name="name" required />
              <InputField label="Email" name="email" type="email" required />
            </div>
            <InputField label="Subject" name="subject" required />
            <InputField
              label="Message"
              name="message"
              as="textarea"
              rows={5}
              required
            />
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </aside>
      </div>
    </main>
  );
};

export default ContactPage;
