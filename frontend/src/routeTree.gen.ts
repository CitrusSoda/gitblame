/* prettier-ignore-start */

/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// This file is auto-generated by TanStack Router
// Import Routes
import { Route as rootRoute } from './routes/__root';
import { Route as AboutImport } from './routes/about';
import { Route as BlameImport } from './routes/blame';
import { Route as IndexImport } from './routes/index';

// Create/Update Routes

const BlameRoute = BlameImport.update({
  path: '/blame',
  getParentRoute: () => rootRoute,
} as any);

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/about': {
      id: '/about';
      path: '/about';
      fullPath: '/about';
      preLoaderRoute: typeof AboutImport;
      parentRoute: typeof rootRoute;
    };
    '/blame': {
      id: '/blame';
      path: '/blame';
      fullPath: '/blame';
      preLoaderRoute: typeof BlameImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  BlameRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/blame"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/blame": {
      "filePath": "blame.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
