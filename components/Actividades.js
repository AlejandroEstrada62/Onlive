import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { MdPsychologyAlt } from "react-icons/md";
import { IoStopwatchOutline } from "react-icons/io5";
import { RiMentalHealthFill } from "react-icons/ri";

export default function Section() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Online mental health support, anytime, anywhere
              </h1>
              <br/>
              <p className="text-black font-bold text-2xl">Access 24/7 mental health support</p>
              <p className="mt-6 text-xl/8 text-gray-700">
              Explore peer support, wellness programs, and self-assessments to enhance your mental health journey.
              </p>
              <p className="text-black font-bold text-2xl">Free resources for LA County residents</p>
              <p className="mt-6 text-xl/8 text-gray-700">
              Discover free mental health resources specifically for residents of Los Angeles County
              </p>
              <br/>
              <br/>
                <div className='flex flex-wrap items-center justify-center gap-3'>
                <Image
                src="/atlas.png"
                width={100}
                height={100}
                alt="On-live logo"
                />
                <br/>
                <br/>
                <Image
                src="/soporte.png"
                width={100}
                height={100}
                alt="On-live logo"
                />
                </div>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="apoyo.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <h1 className="font-bold text-4xl text-black" >TRUST THE PROCESS</h1>
                <li className="flex gap-x-3">
                  <MdPsychologyAlt aria-hidden="true" className="mt-5 size-7 flex-none text-gray-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Assessments.</strong> iPrevail offers online mental health assessments to track progress, guide you to relevant topics, and highlight areas for additional support.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <IoStopwatchOutline aria-hidden="true" className="mt-1 size-7 flex-none text-gray-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Choose a
                    program.</strong> Connect with others through one-on-one peer coaching or join our communities. Share advice, gain insights, and discuss life’s challenges.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RiMentalHealthFill aria-hidden="true" className="mt-1 size-7 flex-none text-gray-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Learn More About Mental Health
                    .</strong> Trained peer coaches are available 24/7 for one-on-one chats, offering support between clinical appointments or while on waitlists. Reach out anytime.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">How does it work?.</h2>
              <p className="mt-6">
              On-Live is accessible through any device connected to the internet. The On-Live platform offers a one-of-a-kind network of mental health support. From interactive lessons, chats with peer support coaches, to topic-based community support groups, you can see your progress being made & connect with other people going through similar life experiences all in one place.
              </p>
              <br/>
              <p>On-Lives’s peer support coaches are rigorously trained and bring real-life experiences, providing you with compassionate, understanding support. Our coaches have “walked a mile in your shoes,” allowing you to be yourself, feel comfortable, and open up during sessions. Whether you're facing life’s biggest challenges or simply need someone to listen, chat with a peer support coach today!</p>
            </div>
         </div>
        </div>
    </div>
 </div>
  )
}
