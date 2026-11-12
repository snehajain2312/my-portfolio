import "./Navbar.css";
function Navbar({theme,setTheme}){
const toggleTheme = () => {
setTheme(theme === "light" ? "dark" : "light");
};
  return (
    <nav className="navbar">
      <a href="#" className="logo">Sneha.</a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
        <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
    
  );
}

export default Navbar;