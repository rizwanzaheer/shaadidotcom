/**
 *
 * Asynchronously loads the component for SignupModal
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
