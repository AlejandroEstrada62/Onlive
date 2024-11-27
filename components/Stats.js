const stats = [
    { id: 1, name: 'Users have joined us to improve their health.', value: '220k' },
    { id: 2, name: 'Users enroll in health programs each week', value: '900+' },
    { id: 3, name: 'Of users saw an improvement after their program', value: '79%' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-bold text-black justify-center text-center text-5xl " >OUTCOMES</h1>
        <br className="mb-15"/>
        <br/>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className={`order-first text-3xl tracking-tight text-gray-900 sm:text-5xl ${
                  stat.id === 3 ? 'font-bold' : 'font-semibold'
                }`}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  