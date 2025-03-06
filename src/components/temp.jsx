import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Bardiner</h3>
        <p className="text-gray-600 mb-4">
          Hello! <strong className="text-gray-800">Bardiner</strong> is a professional platform where we provide interesting and valuable content focused on <strong className="text-gray-800">Landing Pages</strong>. We are committed to
          delivering high-quality, reliable, and insightful information. Our goal is to turn our passion for Landing Pages into a thriving online resource.
        </p>

        <p className="text-gray-600 mb-4">We will continue to post such valuable and knowledgeable information on our website for all of you. Your love and support mean a lot to us.</p>

        <p className="text-gray-600 mb-4">We are dedicated to providing you with the very best insights and knowledge related to Landing Pages.</p>

        <p className="text-gray-600 mb-4">
          We hope you find all of the information on <strong className="text-gray-800">Bardiner</strong> helpful, as we love sharing it with you.
        </p>

        <p className="text-gray-600 mb-4">
          <strong>Visit us at:</strong>{" "}
          <Link href="https://figma-to-nextjs-tailwindcss-slicing-6.vercel.app/" target="_blank" className="text-blue-600 hover:underline">
            https://figma-to-nextjs-tailwindcss-slicing-6.vercel.app/
          </Link>
        </p>

        <p className="text-gray-600 mb-4">
          <strong>For any inquiries or further information, please feel free to contact us via email at:</strong>{" "}
          <a href="mailto:sandis17@outlook.com" className="text-blue-600 hover:underline">
            sandis17@outlook.com
          </a>
        </p>

        <p className="text-gray-800 font-semibold text-lg">Thank you for visiting Bardiner!</p>
      </div>
    </section>
  );
};

export default AboutPage;
