<template>
    <div class="col-md-6 my-3 offset-3">
        <div class="card bg-secondary text-white">
            <div class="card-header">
                <h5 class="card-header text-center font-weight-bold">Registeration Form</h5>
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <div class="form-row">
                            <div class="form-group col-md-6 text-left">
                                <label for="First Name">First Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="$v.firstname.$model"
                                    :class="{
                                        'is-invalid': $v.firstname.$error,
                                        'is-valid': !$v.firstname.$invalid
                                    }"
                                />
                                <div class="valid-feedback">
                                    Your First Name is Valid.
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.firstname.required"
                                        >First name is required.</span
                                    >
                                    <span v-if="!$v.firstname.minLength"
                                        >First name must have at least
                                        {{ $v.firstname.$params.minLength.min }}
                                        Letters.</span
                                    >
                                    <span v-if="!$v.firstname.maxLength"
                                        >First name must have at most
                                        {{ $v.firstname.$params.maxLength.max }}
                                        Letters</span
                                    >
                                </div>
                            </div>
                            <div class="form-group col-md-6 text-left">
                                <label for="Last Name">Last Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="$v.lastname.$model"
                                    :class="{
                                        'is-invalid': $v.lastname.$error,
                                        'is-valid': !$v.lastname.$invalid
                                    }"
                                />
                                <div class="valid-feedback">
                                    Your Last Name is Valid
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.lastname.required"
                                        >Last name is required</span
                                    >
                                    <span v-if="!$v.lastname.minLength"
                                        >Last name must have at least
                                        {{
                                            $v.lastname.$params.minLength.min
                                        }}Letters</span
                                    >
                                    <span v-if="!$v.lastname.maxLength"
                                        >Last name must have at most
                                        {{ $v.lastname.$params.maxLength.max }}
                                        Letters</span
                                    >
                                </div>
                            </div>

                            <div class="form-group col-md-6 text-left">
                                <label>Username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.trim="$v.username.$model"
                                    :class="{
                                        'is-invalid': $v.username.$error,
                                        'is-valid': !$v.username.$invalid
                                    }"
                                />
                                <div class="valid-feedback">
                                    Your username is Valid!
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.username.required"
                                        >Username is required</span
                                    >
                                    <span v-if="!$v.username.isUnique"
                                        >Username is already registered</span
                                    >
                                </div>
                            </div>

                            <div class="form-group col-md-6 text-left">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model.number.lazy="$v.phone.$model"
                                    :class="{
                                        'is-invalid': $v.phone.$error,
                                        'is-valid': !$v.phone.$invalid
                                    }"
                                />
                                <div class="valid-feedback">
                                    Your Phone No. is Valid!
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.phone.required"
                                        >Email is required</span
                                    >
                                    <span v-if="!$v.phone.numeric"
                                        >This phone no. only numeric accepted
                                    </span>
                                </div>
                            </div>

                            <div class="form-group col-md-6 text-left">
                                <label>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model.trim="$v.password.$model"
                                    :class="{
                                        'is-invalid': $v.password.$error,
                                        'is-valid': !$v.password.$invalid
                                    }"
                                />
                                <div class="valid-feedback">
                                    Your Password is Valid!
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.password.required"
                                        >Password is required</span
                                    >
                                    <span v-if="!$v.password.minLength">
                                        {{ $v.password.$params.minLength.min }}
                                        characters minimum.</span
                                    >
                                </div>
                            </div>

                            <div class="form-group col-md-6 text-left">
                                <label>Repeat Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    v-model.trim="$v.repeatpassword.$model"
                                    :class="{
                                        'is-invalid': $v.repeatpassword.$error,
                                        'is-valid':
                                            password != ''
                                                ? !$v.repeatpassword.$invalid
                                                : ''
                                    }"
                                />
                                <div class="valid-feedback">
                                    Your Password is Identical!
                                </div>
                                <div class="invalid-feedback">
                                    <span
                                        v-if="!$v.repeatpassword.sameAsPassword"
                                        >Password must be Identical</span
                                    >
                                </div>
                            </div>

                            <div class="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                id="showpassword"
                                class="custom-control-input"
                                @click="toggleShowPassword"
                                v-model="showpassword"
                            />
                            <label
                                for="showpassword"
                                class="custom-control-label"
                                >Show Password</label
                            >
                        </div>
                        </div>

                        <div class="form-group mt-4 text-left">
                            <label>Email</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model.trim="$v.email.$model"
                                :class="{
                                    'is-invalid': $v.email.$error,
                                    'is-valid': !$v.email.$invalid
                                }"
                            />
                            <div class="valid-feedback">
                                Your Email is Valid!
                            </div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.email.required"
                                    >Email is required</span
                                >
                                <span v-if="!$v.email.isUnique"
                                    >Email is already registered</span
                                >
                            </div>
                        </div>

                        <button type="submit" class="btn btn-success mx-auto d-block">
                            Submit {{ submitStatus }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    required,
    minLength,
    maxLength,
    email,
    sameAs,
    numeric
} from "vuelidate/lib/validators";
export default {
    name: "FormValidation",
    data() {
        return {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            repeatpassword: "",
            showpassword: false,
            phone: "",
            submitStatus: null
        };
    },
    validations: {
        firstname: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(8)
        },
        lastname: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(12)
        },
        username: {
            required,
            isUnique(value) {
                if (value === "") return true;

                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(
                            typeof value === "string" && value.length % 2 !== 0
                        );
                    }, 350 + Math.random() * 300);
                });
            }
        },
        email: {
            required,
            email,
            isUnique(value) {
                if (value === "") return true;

                // eslint disable-next-line
                var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(email_regex.test(value));
                    }, 350 + Math.random() * 300);
                });
            }
        },
        password: {
            required,
            minLength: minLength(8)
        },
        repeatpassword: {
            sameAsPassword: sameAs("password")
        },
        phone: {
            required,
            numeric,
            minLength: minLength(12)
        }
    },
    methods: {
        toggleShowPassword() {
            var show = document.getElementById("password");
            if (this.showpassword == false) {
                this.showpassword = true;
                show.type = "text";
            } else {
                this.showpassword = false;
                show.type = "password";
            }
        },
        submitForm() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "FAIL";
            } else {
                this.submitStatus = "SUCCESS";
            }
        }
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Baloo+2&display=swap');

.card {
    font-family: 'Baloo 2', cursive;
}

</style>