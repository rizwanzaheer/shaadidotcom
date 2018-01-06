/**
 *
 * Asynchronously loads the component for MyProfile
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
