import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes.config';

// Create the router with the routes
const appRouter = createBrowserRouter(routes);

export { appRouter as router };
