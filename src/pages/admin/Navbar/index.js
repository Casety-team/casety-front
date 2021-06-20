const Navbar = () => {
  return (
    <aside class="relative bg-blue-500 h-screen w-64 hidden sm:block shadow-xl">
      <div class="p-10" />
      <nav class="text-white text-base font-semibold pt-3">
        <a
          href="/admin"
          class="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          <i class="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          href="/admin/users"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i class="fas fa-sticky-note mr-3"></i>
          Utilisateurs
        </a>
        <a
          href="/admin/blog"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i class="fas fa-table mr-3"></i>
          Blog
        </a>
      </nav>
    </aside>
  );
};

export default Navbar;
