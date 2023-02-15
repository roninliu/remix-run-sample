import { Outlet } from '@remix-run/react';

export default function UserLayout() {
  return (
    <div>
      <div>this is user layout</div>
      <div>
        <p>context area</p>
        <Outlet />
      </div>
    </div>
  );
}
