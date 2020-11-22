<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" xs="4" sm="8" md="4" lg="4">
        <v-card :loading="loading">
          <v-toolbar color="white" flat>
            <v-toolbar-title class="title">Login to Noble</v-toolbar-title>
          </v-toolbar>

          <ValidationObserver ref="form" v-slot="{ invalid }">
            <v-form @submit.prevent="submit" ref="login" method="post" action="/login">
              <input type="hidden" name="_token" :value="$csrf">

              <v-card-text>
                <ValidationProvider name="email" :rules="form.rules.email" v-slot="{ errors }">
                  <v-text-field
                    v-model="form.email"
                    :error-messages="errors"
                    prepend-inner-icon="mdi-account-check-outline"
                    label="Email"
                    name="email"
                    persistent-hint
                    autofocus
                    outlined
                  />
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

                <ValidationProvider name="remember" rules="nullOrInteger" v-slot="{ errors }">
                  <v-checkbox
                    v-model="form.remember"
                    :error-messages="errors"
                    :false-value="null"
                    :true-value="1"
                    autocomplete="off"
                    label="Remember Me?"
                    type="checkbox"
                    color="primary"
                    name="remember"
                  />
                </ValidationProvider>
              </v-card-text>

              <v-card-actions>
                <a href="/register">Create an account?</a>

                <v-spacer/>

                <v-btn type="submit" :disabled="invalid" color="primary">
                  Login
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
import {isEmpty} from "lodash";
import {ValidationProvider} from "vee-validate";
import {ValidationObserver} from "vee-validate";
import {LoginForm} from "@/forms/LoginForm";

export default {
  name: "Login",
  data() {
    const form = new LoginForm(this.inputs)

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
        .then(valid => valid ? this.$refs.login.$el.submit() : undefined)
        .finally(() => this.loading = false);
    }
  },
  mounted() {
    if (!isEmpty(this.errors)) this.$refs.form.setErrors(this.errors);
  }
}
</script>
