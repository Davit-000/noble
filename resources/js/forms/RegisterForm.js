export class RegisterForm {
  rules = {
    name: {
      alpha_spaces: true,
      required: true,
      string: true,
    },
    email: {
      required: true,
      string: true,
      email: true,
    },
    password: {
      confirmed: 'confirmation',
      required: true,
      string: true,
      min: 8
    },
    password_confirmation: {

    }
  };

  constructor(inputs = {}) {
    this.name = inputs.name || '';
    this.email = inputs.email || '';
    this.password = inputs.password || '';
    this.password_confirmation = inputs.password_confirmation || '';
  }
}
