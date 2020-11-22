<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" xs="4" sm="8" md="4" lg="4">
        <v-card :loading="loading">
          <v-toolbar color="white" flat>
            <v-toolbar-title class="title">Sign up to Noble</v-toolbar-title>
          </v-toolbar>

          <ValidationObserver ref="form" v-slot="{ invalid }">
            <v-form ref="login" method="post" action="register">
              <input type="hidden" name="_token" :value="$csrf">

              <v-card-text>
                <ValidationProvider name="name" :rules="form.rules.name" v-slot="{ errors }">
                  <v-text-field
                    v-model="form.name"
                    :error-messages="errors"
                    label="Name"
                    name="name"
                    autofocus
                    outlined
                  />
                </ValidationProvider>

                <ValidationProvider name="email" :rules="form.rules.email" v-slot="{ errors }">
                  <v-text-field
                    v-model="form.email"
                    :error-messages="errors"
                    prepend-inner-icon="mdi-account-check-outline"
                    label="Email"
                    name="email"
                    outlined
                  />
                  <input v-model="form.email" type="hidden" name="email">
                </ValidationProvider>

                <ValidationProvider name="password" :rules="form.rules.password" v-slot="{ errors }">
                  <v-text-field
                    v-model="form.password"
                    :error-messages="errors"
                    @click:append="show = !show"
                    :append-icon="icon"
                    :type="type"
                    prepend-inner-icon="mdi-lock-outline"
                    label="Password"
                    name="password"
                    outlined
                  />
                </ValidationProvider>

                <ValidationProvider v-slot="{ errors }" vid="confirmation">
                  <v-text-field
                    v-model="form.password_confirmation"
                    :error-messages="errors"
                    prepend-inner-icon="mdi-lock-outline"
                    label="confirm password"
                    name="password_confirmation"
                    type="password"
                    outlined
                  />
                </ValidationProvider>
              </v-card-text>

              <v-card-actions>
                <a href="/login">Already has an account?</a>

                <v-spacer/>

                <v-btn type="submit" :disabled="invalid" color="primary" depressed>
                  Register
                </v-btn>
              </v-card-actions>
            </v-form>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { isEmpty } from "lodash";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import { RegisterForm } from "@/forms/RegisterForm";

export default {
  name: "Register",
  data() {
    const form = new RegisterForm(this.inputs)

    return {
      loading: false,
      show: false,
      form,
    }
  },
  props: {
    errors: {
      default: () => ({}),
      required: true,
      type: Object
    },
    inputs: {
      default: () => ({}),
      required: false,
      type: Object
    },
  },
  computed: {
    type() {
      return this.show ? 'text' : 'password';
    },
    icon() {
      return this.show ? 'mdi-eye-off' : 'mdi-eye';
    },
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    submit() {
      this.loading = 'primary';
      this.$refs.form.validate()
        .then(valid => valid ? this.$refs.login.$el.submit(): undefined)
        .finally(() => this.loading = false);
    }
  },
  mounted() {
    if (!isEmpty(this.errors)) this.$refs.form.setErrors(this.errors);
  }
}
</script>
