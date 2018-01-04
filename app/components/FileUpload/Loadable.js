/**
 *
 * Asynchronously loads the component for FileUpload
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
