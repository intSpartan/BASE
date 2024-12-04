import { Briefcase, FileText, Video, ClipboardList } from 'lucide-react';

const services = [
  {
    title: "Assessments",
    description: "Elevate your potential with precision-driven Online Assessments: Empowering your journey to success, one test at a time.",
    icon: FileText,
  },
  {
    title: "Resume Shortlisting",
    description: "Unlock the power of precision with Resume Shortlisting: Let us find your perfect match from the talent pool.",
    icon: ClipboardList,
  },
  {
    title: "Online Interviews",
    description: "Bridge the distance with Online Interviews: Connect, assess, and hire top talent from anywhere, seamlessly.",
    icon: Video,
  },
  {
    title: "Track your Application",
    description: "Stay in the loop with Track your Application: Follow your journey to success every step of the way.",
    icon: Briefcase,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Look into the vast services we provide to guide you through the dynamic landscape of education and career planning.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors">
                Get Access
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

