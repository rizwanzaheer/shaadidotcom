/**
 *
 * Asynchronously loads the component for UploadImage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
