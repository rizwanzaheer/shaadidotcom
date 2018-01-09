/**
 *
 * Asynchronously loads the component for ReactRangeSlider
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
