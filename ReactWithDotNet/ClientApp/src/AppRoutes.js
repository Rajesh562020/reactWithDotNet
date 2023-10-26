import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import  TestLink  from "./components/TestLink";
import TestApi from "./components/TestApi";
import TestApiAsp from "./components/TestApiAsp";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },

    {
    path: '/test-link',
    element: <TestLink />
    },
    {
        path: '/test-api',
        element: <TestApi/>
    },
    {
        path: '/test-api-asp',
        element: <TestApiAsp/>
    }
];

export default AppRoutes;
