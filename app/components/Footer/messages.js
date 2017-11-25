/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'app.components.Footer.license.message',
    defaultMessage: "The World's No.1 Matchmaking Service™",
  },
  authorMessage: {
    id: 'app.components.Footer.author.message',
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
