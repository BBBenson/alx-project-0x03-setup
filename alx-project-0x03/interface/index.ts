// Define the PageRouteProps type
export interface PageRouteProps {
  pageRoute: string;
}

import { useRouter } from 'next/router';

// Imeperative routing with useRouter
const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
  const router = useRouter();
  router.push(pageRoute, undefined, { shallow: false });
}