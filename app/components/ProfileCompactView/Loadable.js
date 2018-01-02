/**
 *
 * Asynchronously loads the component for ProfileCompactView
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
