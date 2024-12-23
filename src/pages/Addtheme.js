import React, { useEffect, useState } from 'react'
import { themes } from '../utils/themes';

function Addtheme() {
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("theme") || "light" ;
    });
    useEffect(()=>{
    document.querySelector("body").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save theme to local storage
    },[theme]);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
      };
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Choose a Theme</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => changeTheme(t)}
            className={`btn ${theme === t ? "btn-active" : ""}`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      <p className="text-lg mt-6">
        Current Theme: <span className="font-bold">{theme}</span>
      </p>
    </div>
  )
}

export default Addtheme
