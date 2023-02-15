import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './style.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'ODP APP',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <html lang='zh-CN' className='h-100vh'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='min-h-full m-0 p-0'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
