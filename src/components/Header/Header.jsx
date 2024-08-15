import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import './Header.css';
import logo from '../../assets/icons/logo.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();  // Get the current location

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Check if the current path is a login page
  const isLoginPage = location.pathname === '/login' || location.pathname === '/admin-login';

  return (
    <header className="bg-apple-black text-apple-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <img 
          className="w-[100px] animate-float" 
          src={logo} 
          alt="Floating Logo" 
        />
      </div>
      
      <nav className="flex items-center space-x-10 mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/billing"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Billing
        </NavLink>
      </nav>

      <nav className="flex items-center space-x-10">
        <div className="relative dropdown">
          <button 
            className="text-white hover:text-yellow-500 transition-colors duration-300 text-lg font-bold"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Departments
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black p-2 rounded shadow-lg z-50">
              <NavLink to="/department/savings" className="block px-4 py-2 hover:bg-gray-200">Savings</NavLink>
              <NavLink to="/department/grocery" className="block px-4 py-2 hover:bg-gray-200">Grocery</NavLink>
              <NavLink to="/department/back-to-school" className="block px-4 py-2 hover:bg-gray-200">Back To School</NavLink>
              <NavLink to="/department/back-to-college" className="block px-4 py-2 hover:bg-gray-200">Back To College</NavLink>
              <NavLink to="/department/halloween" className="block px-4 py-2 hover:bg-gray-200">Halloween</NavLink>
              <NavLink to="/department/tailgating" className="block px-4 py-2 hover:bg-gray-200">Tailgating</NavLink>
              <NavLink to="/department/home-garden-tools" className="block px-4 py-2 hover:bg-gray-200">Home, Garden & Tools</NavLink>
              <NavLink to="/department/electronics-video-games" className="block px-4 py-2 hover:bg-gray-200">Electronics & Video Games</NavLink>
              <NavLink to="/department/clothing-shoes-accessories" className="block px-4 py-2 hover:bg-gray-200">Clothing, Shoes, & Accessories</NavLink>
              <NavLink to="/department/toys-kids-baby" className="block px-4 py-2 hover:bg-gray-200">Toys, Kids & Baby</NavLink>
              <NavLink to="/department/beauty" className="block px-4 py-2 hover:bg-gray-200">Beauty</NavLink>
              <NavLink to="/department/personal-care" className="block px-4 py-2 hover:bg-gray-200">Personal Care</NavLink>
              <NavLink to="/department/pharmacy-health-wellness" className="block px-4 py-2 hover:bg-gray-200">Pharmacy, Health & Wellness</NavLink>
              <NavLink to="/department/auto-tires" className="block px-4 py-2 hover:bg-gray-200">Auto & Tires</NavLink>
              <NavLink to="/department/household-essentials" className="block px-4 py-2 hover:bg-gray-200">Household Essentials</NavLink>
              <NavLink to="/department/pets" className="block px-4 py-2 hover:bg-gray-200">Pets</NavLink>
              <NavLink to="/department/sports-outdoors" className="block px-4 py-2 hover:bg-gray-200">Sports & Outdoors</NavLink>
              <NavLink to="/department/school-office-art-supplies" className="block px-4 py-2 hover:bg-gray-200">School, Office & Art Supplies</NavLink>
              <NavLink to="/department/seasonal-decor-party-supplies" className="block px-4 py-2 hover:bg-gray-200">Seasonal Decor & Party Supplies</NavLink>
              <NavLink to="/department/movies-music-books" className="block px-4 py-2 hover:bg-gray-200">Movies, Music & Books</NavLink>
            </div>
          )}
        </div>
        <div className="space-x-8">
          {!isLoginPage && (
            <NavLink to="/login" className="button-81">
              Login
            </NavLink>
          )}
          <button className="button-81">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
