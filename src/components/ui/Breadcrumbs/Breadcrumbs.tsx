import { NavLink } from "react-router";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import './style.scss'

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs([]);
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
};