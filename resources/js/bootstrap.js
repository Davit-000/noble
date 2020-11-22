import axios from "axios";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";
import {isString, isArray, isBoolean, isNullOrInteger, inArray} from "./rules";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Object.keys(rules).forEach(rule => extend(rule, {...rules[rule], message: messages[rule]}));

extend('string', {
  validate: isString,
  message: 'The {_field_} field must string.'
});

extend('array', {
  validate: isArray,
  message: 'The {_field_} field must string.'
});

extend('boolean', {
  validate: isBoolean,
  message: 'The {_field_} field must string.'
});

extend('nullOrInteger', {
  validate: isNullOrInteger,
  message: 'The {_field_} is not valid'
});

extend('inArray', {
  validate: inArray,
  message: 'The {_field_} is not valid'
});

const meta = document.head.querySelector('meta[name="csrf-token"]');
const app = document.getElementById('app');

const csrf = meta.getAttribute('content');
const auth = JSON.parse(app.dataset.auth);

app.removeAttribute('data-auth');

export {csrf, auth};
