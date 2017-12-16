/*
 * SignupModal Messages
 *
 * This contains all the text for the SignupModal component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.SignupModal.header',
    defaultMessage: `Let's set up your account, while
    we find Matches for you!`,
  },
  email: {
    id: 'app.components.SignupModal.email',
    defaultMessage: 'Enter your email id',
  },
  password: {
    id: 'app.components.SignupModal.password',
    defaultMessage: 'Create a password',
  },
  createProfileFor: {
    id: 'app.components.SignupModal.createProfileFor',
    defaultMessage: 'Create Profile for',
  },
  nextBtnText: {
    id: 'app.components.SignupModal.nextBtnText',
    defaultMessage: 'Next',
  },
  AlreadyMember: {
    id: 'app.components.SignupModal.AlreadyMember',
    defaultMessage: 'Already a Member?',
  },
});
