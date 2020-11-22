export class LoginForm {
  /** @type {string} **/
  email = '';

  /** @type {string} **/
  password = '';

  /** @type {boolean | null} **/
  remember = false;

  /**
   * Validation rules
   *
   * @type {{password: {string: boolean, required: boolean}, email: {required: boolean, email: boolean}}}
   */
  rules = {
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      string: true
    }
  };

  /**
   * Login Form Constructor
   *
   * @param {{email?: string, password?: string, remember?: boolean | null}} inputs
   */
  constructor(inputs = {}) {
    this.email = inputs.email || '';
    this.password = inputs.password || '';
    this.remember = inputs.remember || null;
  }
}
