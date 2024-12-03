import Image from "next/image";
import TeamSection from "@/components/Team";
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import Footer from "@/components/Footer";

const tiers = [
  {
    id: 'activity',
    href: '/actividades',
    priceMonthly: 'Activities',
    features: ['Mindfulness meditation', 'Breathing exercises', 'Positive affirmations', 'Non-judgmental thinking'],
    featured: false,
  },
  {
    id: 'diary',
    href: '/diario',
    priceMonthly: 'Diary',
    features: ['Private entries', 'Public entries', 'Fully customizable', 'PGP encrypted'],
    featured: false,
  },
  {
    id: 'sesion',
    href: '/sesion',
    priceMonthly: 'Sesion',
    features: ['Certified professionals', 'Capable volunteers', 'Group therapy', 'Pair therapy'],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="mt-4 text-3xl font-bold text-black">WARMTH FROM HOME</p>
        <Image
          src="/On-live.png"
          width={300}
          height={180}
          alt="On-live logo"
          className="w-[25vw] h-auto"
        />
        
        {/* Pricing Section */}
        <div className="r w-full bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
          <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              ACTIVITES
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 items-center lg:max-w-7xl lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  'bg-white shadow-md h-full',
                  'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(tier.featured ? 'text-black' : 'text-black', 'text-base/7 font-semibold')}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? 'text-white' : 'text-gray-900',
                      'text-5xl font-semibold tracking-tight',
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}></span>
                </p>
                <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
                  {tier.description}
                </p>
                <ul className="mt-4 list-disc list-inside">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  target="_blank"
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'bg-black text-white shadow-sm hover:bg-black focus-visible:outline-black'
                      : 'text-black ring-1 ring-inset ring-black hover:ring-black focus-visible:outline-black',
                    'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                  )}
                >
                  Start
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-full"></div>
        <br/>
        <TeamSection />
      </div>
      <Footer />
    </>
  );
}