const stats = [
    { id: 1, name: 'Students Trained', value: '1,000+' },
    { id: 2, name: 'First Attempt Pass Rate', value: '400+' },
    { id: 3, name: 'Total Passes', value: '100%' },
  ];
  
  export default function AchievementsSection() {
    return (
      <div className="bg-white relative isolate mt-10 px-6 py-24 sm:py-32 lg:px-8">
  
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Achievements
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering students with exceptional driving skills and unmatched success rates.
          </p>
  
          <dl className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <dd className="text-5xl font-extrabold tracking-tight text-gray-900 hover:text-indigo-600 transition duration-300 ease-in-out">
                  {stat.value}
                </dd>
                <dt className="mt-4 text-lg font-medium text-gray-600">{stat.name}</dt>
                {stat.id !== stats.length && (
                  <div className="mt-8 w-16 h-[2px] bg-indigo-600"></div>
                )}
              </div>
            ))}
          </dl>
  
          <div className="mt-16">
            <a
              href="/gallery"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-300"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    );
  }
  