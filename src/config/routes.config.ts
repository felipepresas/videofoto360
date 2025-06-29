import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// Define the route configuration with proper typing
const routeConfig: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const module = await import('@/App');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import('@/pages/Home');
          return { Component: module.default };
        }
      },
      {
        path: "about",
        lazy: async () => {
          const module = await import('@/pages/About');
          return { Component: module.default };
        }
      },
      {
        path: "services",
        lazy: async () => {
          const module = await import('@/pages/Services');
          return { Component: module.default };
        }
      },
      {
        path: "portfolio",
        lazy: async () => {
          const module = await import('@/pages/Portfolio');
          return { Component: module.default };
        }
      },
      {
        path: "contact",
        lazy: async () => {
          const module = await import('@/pages/Contact');
          return { Component: module.default };
        }
      }
    ]
  }
];

// Create and export the router
export const router = createBrowserRouter(routeConfig);

// Export routes for testing or other purposes
export const routes = routeConfig;
