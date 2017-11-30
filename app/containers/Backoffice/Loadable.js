/**
 *
 * Asynchronously loads the component for Backoffice
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
