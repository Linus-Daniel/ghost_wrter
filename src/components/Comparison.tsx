// components/Comparison.tsx
export default function Comparison() {
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
          {[
            {
              title: "Ghostwriting",
              items: [
                "I write original content in your voice",
                "You provide ideas, I handle execution",
                "Best when starting from scratch",
                "Full confidentiality guaranteed"
              ]
            },
            {
              title: "Editing",
              items: [
                "I refine your existing content",
                "You maintain primary authorship",
                "Best with solid drafts",
                "Credit shared appropriately"
              ]
            }
          ].map((service, i) => (
            <div key={i} className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                {service.title}
                {i === 0 && (
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                    Most Popular
                  </span>
                )}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }