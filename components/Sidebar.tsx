
import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants';

const Sidebar: React.FC = () => {
    return (
        <nav className="w-full md:w-64 bg-slate-800 text-white p-5 md:p-6 flex-shrink-0 flex flex-col">
            <h1 className="text-2xl font-bold text-white mb-6">Hormozi's Playbook</h1>
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-hidden space-x-2 md:space-x-0 md:space-y-2">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-200 ${isActive ? 'bg-teal-600 text-white font-semibold shadow-inner' : ''
                            }`
                        }
                    >
                        <span className="whitespace-nowrap">{link.name}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Sidebar;
