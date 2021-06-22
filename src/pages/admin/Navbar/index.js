const Navbar = (value) => {
  return (
    <aside style={{marginTop: 80}} className="fixed top-0 bg-blue-500 h-screen w-64 hidden sm:block shadow-xl">
      <nav className="text-white text-base font-semibold pt-3">
        <a
          href="/admin"
          className={
            value === "dashboard"
              ? "flex items-center active-nav-link text-white py-4 pl-6 nav-item"
              : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          }
        >
          <i className="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          href="/admin/users"
          className={
            value === "users"
              ? "flex items-center active-nav-link text-white py-4 pl-6 nav-item"
              : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          }
        >
          <i className="fas fa-sticky-note mr-3"></i>
          Utilisateurs
        </a>
        <a
          href="/admin/blog"
          className={
            value === "blog"
              ? "flex items-center active-nav-link text-white py-4 pl-6 nav-item"
              : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          }
        >
          <i className="fas fa-table mr-3"></i>
          Blog
        </a>
      </nav>
    </aside>
  );
};

export default Navbar;
