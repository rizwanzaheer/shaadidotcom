/**
 *
 * Asynchronously loads the component for ImageThumbnail
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
