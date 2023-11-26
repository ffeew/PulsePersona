// import { useState } from "react";

export default function VerificationCredentials() {
  return (
    <div className="pl-64">
      <div className="w-full flex flex-col p-10 space-y-5">
        <div className="w-full flex flex-row justify-between items-center">
          {/* heading */}
          <div className="w-full flex flex-col space-y-1">
            <p className="text-2xl font-semibold">Heading Title</p>
            <p>Heading Description</p>
          </div>
        </div>

        <div className="w-full flex flex-col">
          {/* content */}
          <p>Content</p>
        </div>
      </div>
    </div>
  );
}
