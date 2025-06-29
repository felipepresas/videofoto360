import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// Styles
import './styles/fontawesome';
import './index.css';

// Router
import { router } from './config/routes';
import Fallback from './components/ui/Fallback';

// Error Boundary Component
// eslint-disable-next-line react-refresh/only-export-components
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundaryFallback>
    {children}
  </ErrorBoundaryFallback>
);

// Simple Error Fallback UI
// eslint-disable-next-line react-refresh/only-export-components
const ErrorBoundaryFallback = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

// Get root element
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

// Create root
const root = createRoot(container);

// Create a wrapper component to handle hydration
// eslint-disable-next-line react-refresh/only-export-components
const App = () => (
  <Suspense fallback={<Fallback />}>
    <RouterProvider router={router} />
  </Suspense>
);

// Render app with proper hydration handling
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
