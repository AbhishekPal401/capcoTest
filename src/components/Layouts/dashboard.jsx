import { NavLink, Outlet, useLocation } from "react-router";
import "./dashboard.css";

const DashboardLayout = () => {
  const { pathname } = useLocation();

  const getTitle = () => {
    if (pathname === "/") return "Dashboard";
    if (pathname.startsWith("/posts")) return "Posts";
    if (pathname.startsWith("/settings")) return "Settings";
    return "MyApp";
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">MyApp</h2>

        <nav className="menu">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <h1>{getTitle()}</h1>
          <div className="user">
            <span>👤 Abhishek</span>
          </div>
        </header>

        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
