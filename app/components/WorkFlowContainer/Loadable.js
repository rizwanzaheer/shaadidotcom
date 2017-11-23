/**
 *
 * Asynchronously loads the component for WorkFlowContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
