/**
 *
 * Asynchronously loads the component for EditProfileContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
