/**
 *
 * Asynchronously loads the component for Searchbar
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
