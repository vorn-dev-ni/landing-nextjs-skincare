import { FacebookIcon, Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    icon: <Phone className="w-6 h-6 text-primary-400" />,
    title: "Phone",
    description: "+1 (312) 123-4567",
  },
  {
    icon: <Mail className="w-6 h-6 text-primary-400" />,
    title: "Email",
    description: "contact@example.com",
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary-400" />,
    title: "Address",
    description: "2168 S Archer Ave, Chicago, IL 60616, US",
  },
  {
    icon: <FacebookIcon className="w-6 h-6 text-primary-400" />,
    title: "Facebook",
    description: "Panhavorn",
  },
];

const ContactList = () => {
  return (
    <div className="my-12">
      <ul className="space-y-6">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex items-start space-x-4 bg-white p-4 rounded-xl "
          >
            <div className="pt-1">{contact.icon}</div>
            <div>
              <h4 className="text-lg font-semibold">{contact.title}</h4>
              <p className="text-sm text-gray-600">{contact.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
