import { NavLink } from "react-router";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs([]);
  return (
    <div>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
};