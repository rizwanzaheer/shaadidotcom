/**
 *
 * Asynchronously loads the component for SweetAlertPopup
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
