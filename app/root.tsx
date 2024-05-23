import { json, type LinksFunction} from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";


export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export const loader = () => {
  return json({
  });
};

export default function App() {


  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="mx-auto my-0 min-w-[320px] max-w-5xl">
        <div className="my-[24px]">
          <Outlet />
        </div>
        <footer className="mx-auto grid w-full max-w-5xl grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] justify-items-center gap-2 px-2 pb-5 text-xs text-gray-500">
          <span>© 2023 考えるエンジン</span>
          <a href="https://kanataw.com/privacy-policy/" target={"_blank"} rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://kanataw.com/company/" target={"_blank"} rel="noreferrer">
            会社概要
          </a>
          <a href="https://kanataw.com/access/" target={"_blank"} rel="noreferrer">
            アクセス
          </a>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
