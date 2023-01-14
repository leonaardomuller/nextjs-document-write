import SiteLayout from "../components/SiteLayout";
import React from "react";
import { generateDocument } from "../utils/generateDocument";

const Index = () => (
  <SiteLayout>
    <div className="mt-8 max-w-xl mx-auto px-8">
      <h1 className="text-center">
        <span className="block text-xl text-gray-600 leading-tight">
          Welcome to this
        </span>
        <span className="block text-5xl font-bold leading-none">
          Awesome Website
        </span>
      </h1>
      <div className="mt-12 text-center">
        <button
          onClick={generateDocument}
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6 py-4 leading-tight"
        >
          Generate document
        </button>
      </div>
    </div>
  </SiteLayout>
);

export default Index;
