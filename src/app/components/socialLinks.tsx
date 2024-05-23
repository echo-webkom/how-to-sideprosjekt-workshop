
import React from "react";
import { links } from '@/utils/linksData';
const SocialLinks: React.FC = () => {
  return (
      <div className="bg-gradient-to-b from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% p-8 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {links.map(link => (
              <li key={link.href} className="flex items-center space-x-4">
                <img src={link.icon} alt={link.text} className="w-6 h-6" />
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  {link.text}
                  </a>
              </li>
              ))}
        </ul>
      </div>
  );
};

export default SocialLinks;
