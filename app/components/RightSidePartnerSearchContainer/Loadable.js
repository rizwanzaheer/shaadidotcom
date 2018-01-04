/**
 *
 * Asynchronously loads the component for RightSidePartnerSearchContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
