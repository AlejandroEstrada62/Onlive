import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    name: 'Read',
    description:
      'read chapter 3 of the book the little prince of sep so you can see what poor is.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'CLass',
    description:
      'watch the pre-recorded video by your advisor and reflect on it, write in your journal.',
    icon: LockClosedIcon,
  },
  {
    name: 'write a diary',
    description:
      'write in your journal your day to day, if you can write a problem and explain it later in the session, you have 50 percent of the problem solved, detail your reflections in it.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Take a break',
    description:
      'take rest, sleep vitals to keep one full life, haz lo que te guste, si no encuentra algo? sólo descansa viendo carefulmente algo lindo como el cielo.',
    icon: FingerPrintIcon,
  },
  {
    name: 'set an alarm',
    description:
      'set your alarms to do all your tasks on time and in form, it is good to have a routine, just don´t forget that some routines must become hobbies at some point.',
    icon: FingerPrintIcon,
  },
]

export default function Example() {
  return (
    <>
      <Navbar />
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Activities
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          Exercises commissioned by a professional.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <input type="checkbox" className="absolute left-0 top-0 h-6 w-6 rounded-full border-gray-300 text-black focus:ring-black" />
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
      <Footer />
</>  
)
}
