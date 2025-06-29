import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Loading } from '@/components/ui';

type LazyRoute = Omit<RouteObject, 'element' | 'children' | 'index'> & {
  lazy: () => Promise<{ default: React.ComponentType }>;
  children?: LazyRoute[];
  isIndex?: boolean;
};

export function lazyLoadRoute(route: LazyRoute): RouteObject {
  const { lazy: lazyImport, children, isIndex, ...rest } = route;
  const LazyComponent = lazy(lazyImport);
  
  const routeObject: RouteObject = {
    ...rest,
    element: (
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    ),
  };

  // Only add children if they exist
  if (children && children.length > 0) {
    routeObject.children = children.map(child => lazyLoadRoute(child));
  }

  // Handle index route
  if (isIndex) {
    return { index: true, ...routeObject };
  }

  return routeObject;
}
