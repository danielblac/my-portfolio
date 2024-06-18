"use client";

export default function OrganizationPage() {
  return (
    <div className="w-full flex flex-col items-center gap-6 mt-32">
      <h2 className="text-4xl text-center max-w-3xl">
        This website belongs to an organization and the codebase cannot be
        viewed by the public!
      </h2>
      <button
        onClick={() => window.close()}
        className="px-10 py-2 rounded-md bg-primary"
      >
        Back
      </button>
    </div>
  );
}
