import React from "react";

export default function Footer() {
  return (
    
    <footer className="bg-gray-950 text-white w-full">
     
      {/* Top grid section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 p-12">
        <div className="flex flex-col justify-center">
          <p className="text-gray-300">
            Launch your directory website in hours, not weeks
          </p>
        </div>

        <div>
          <h1 className="text-lg font-bold mb-4">General</h1>
          <ul className="space-y-2">
            <li className="text-gray-400">Products</li>
            <li className="text-gray-400">Pricing</li>
            <li className="text-gray-400">Blogs</li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-bold mb-4">Resources</h1>
          <ul className="space-y-2">
            <li className="text-gray-400">Products</li>
            <li className="text-gray-400">Pricing</li>
            <li className="text-gray-400">Blogs</li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-bold mb-4">Help & Support</h1>
          <ul className="space-y-2">
            <li className="text-gray-400">Contact Us</li>
            <li className="text-gray-400">Submission</li>
            <li className="text-gray-400">Changelogs</li>
            <li className="text-gray-400">Documentation</li>
          </ul>
        </div>
      </div>

      {/* Divider line — FULL WIDTH */}
      <div className="h-px bg-gray-700/40 w-full mb-5"></div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-12 py-6 text-gray-400 text-sm">
        <p>CopyWright © 2025 Themefisher.</p>
        <div className="flex gap-4">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}
