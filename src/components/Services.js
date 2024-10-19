import image1 from "../assets/001-deal.png";
import image2 from "../assets/004-talking.png";
import image3 from "../assets/005-punctual.png";
import image4 from "../assets/head-hunting.png";

const features = [
  {
    name: "Executive Search",
    description:
      "As a market leader in executive search, we specialize in identifying top-tier leadership and board professionals.",
    href: "#",
    icon: image2,
  },
  {
    name: "Permanent Recruitment",
    description:
      "Leveraging our extensive HR network and rigorous recruitment process, we find the perfect candidates to join your team.",
    href: "#",
    icon: image1,
  },
  {
    name: "Interim HR Recruitment",
    description:
      "Collaborating with highly skilled interim contractors, we ensure your projects progress seamlessly and on schedule.",
    href: "#",
    icon: image3,
  },
  {
    name: "Screening of Candidates",
    description:
      "Leveraging our extensive HR network and rigorous recruitment process, we find the perfect candidates to join your team.",
    href: "#",
    icon: image4,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Human Resource performs human resource management
            functions, such as finding, hiring, training, and supporting new
            employees. As a result, We are responsible for such
            important tasks as reviewing resumes, keeping track of employee
            information, and ensuring a company complies with labor laws and
            employment standards.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center ">
                    <img
                      alt=""
                      src={feature.icon}
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
