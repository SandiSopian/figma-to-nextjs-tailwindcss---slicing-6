import Link from "next/link";
import React from "react";

const Disclaimer = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg lg:mt-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h1>
        <p className="text-gray-600 mb-6">Last updated: March 06, 2025</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Interpretation and Definitions</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Interpretation</h3>
        <p className="text-gray-600 mb-4">
          The words with capitalized initial letters have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural form.
        </p>

        <h3 className="text-xl font-semibold text-gray-700">Definitions</h3>
        <p className="text-gray-600">For the purposes of this Disclaimer:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 my-4">
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Bardi.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </li>
          <li>
            <strong>Website</strong> refers to Bardi, accessible from
            <Link href="https://bardi.co.id/" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:underline ml-1">
              https://bardi.co.id/
            </Link>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Disclaimer</h2>
        <p className="text-gray-600 mb-4">The information contained on the Service is for general information purposes only. The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">External Links Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company. Please note that the Company does not guarantee the accuracy, relevance, timeliness, or
          completeness of any information on these external websites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Errors and Omissions Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Portfolio Purpose Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          This website is created solely for portfolio purposes and does not take any commission. All copyrights and ownership rights belong to the official website of Bardi at
          <Link href="https://bardi.co.id/" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:underline ml-1">
            https://bardi.co.id/
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-600">If you have any questions about this Disclaimer, You can contact Us:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 my-4">
          <li>
            By visiting this page on our website:
            <Link href="https://figma-to-nextjs-tailwindcss-slicing-6.vercel.app/" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:underline ml-1">
              https://figma-to-nextjs-tailwindcss-slicing-6.vercel.app/
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Disclaimer;
