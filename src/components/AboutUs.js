import { CheckCircleIcon } from "@heroicons/react/20/solid";

const stats = [
  {
    title: "Client Satisfaction Rate: ",
    label:
      "Our clients consistently report high satisfaction with our services and outcomes.",
    value: "90%",
  },
  {
    title: "Reduction in Time-to-Hire: ",
    label:
      "Our streamlined recruitment processes significantly decrease the time it takes to fill positions.",
    value: "85%",
  },
  {
    title: "Increase in Employee Retention: ",
    label:
      "HR solutions help businesses retain top talent and reduce turnover rates.",
    value: "70%",
  },
];
const values = [
  {
    name: "1. Outcome-Focused",
    description:
      "Our Human Resources vision is to create an outcome-driven culture that elevates performance, unlocks potential, and accelerates employee growth. We will advance the organization's success by investing in talent development, diversity, and collaboration. A relentless focus on measurable impact will enable our employees to reach new heights and drive meaningful change across the business landscape.",
  },
  {
    name: "2. DEI-Focused",
    description:
      "Our human resources vision is to foster a dynamic and supportive environment where employees flourish professionally and personally. We are a catalyst for transformative change, championing diversity, equity, and inclusion while inspiring a culture of creativity and resilience. Together, we'll shape the future of our organization and redefine the employee experience for lasting success.",
  },
  {
    name: "3. Employee Wellbeing",
    description:
      "We will prioritize the holistic wellbeing of every employee, fostering a compassionate and supportive environment. Supporting work-life wellness, mental health, and personal growth will guide our actions. We believe that nurturing our employees' wellbeing is the key to unlocking their potential and driving our organization's success. Together, we will create a supportive workplace culture that empowers our employees to thrive in all aspects of their lives.",
  },
  {
    name: "4. Learning and Collaboration",
    description:
      "We cultivate a thriving and inclusive workplace where every team member feels valued and inspired to reach their fullest potential. Together, we'll build a culture of continuous learning and teamwork that drives our organization's success, enriching the lives of every employee",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-28 pt-28 sm:pt-28 lg:px-8 lg:pt-28">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Connecting you to success and unleashing the potential
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Our team comprises seasoned HR professionals with diverse
                    backgrounds and expertise. From recruitment specialists to
                    compliance experts, our staff is equipped with the knowledge
                    and skills to address all aspects of human resource
                    management.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <div className=" max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    It is the mission of our human resource department to
                    provide effective human resource management by developing
                    and implementing policies, programs and services that
                    contribute to the attainment of corporate and employee goals
                    by:
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                    <li className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      Properly balancing the needs of the employees and the
                      needs of the company.
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      Providing training and development in areas of effective
                      leadership and career development of employees, employment
                      law and government regulation, and litigation avoidance.
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      Hiring the most-qualified employees by preplanning
                      staffing needs, ensuring an effective internal interview
                      process, increasing company visibility in the employment
                      marketplace, identifying the best and most cost-effective
                      recruitment sources, and conducting thorough reference
                      checks.
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      Retaining our valued employees by assuring effective
                      leadership qualities in our managers; providing
                      competitive wages and benefits; furnishing technical,
                      interpersonal and career development training and
                      coaching; conducting exit interviews and supplying
                      relevant feedback to management; and enhancing two-way
                      communication between employees and management.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className=" space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        <span className=" font-bold tracking-tight text-gray-900 ">
                          {stat.title}
                        </span>
                        {stat.label}
                      </dt>

                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our vision
            </h2>
          </div>
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
}
