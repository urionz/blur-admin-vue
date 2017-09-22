<template>
    <div class="auth-main">
        <div class="auth-block">
            <h1 translate>Sign in to blur-admin-vue</h1>
            <a href="/register" class="auth-link" translate>New to blur-admin-vue? Sign up!</a>

            <form class="form-horizontal">
                <div class="form-group row" :class="email.class">
                    <label for="inputEmail" class="col-sm-2 control-label" translate>Email</label>
                    <div class="col-sm-10">
                        <input autocomplete="off" name="email" :value="email.value" @input="handleInput" type="email" class="form-control" placeholder="Email">
                    </div>
                </div>
                <div class="form-group row" :class="password.class">
                    <label for="inputPassword" class="col-sm-2 control-label" translate>Password</label>
                    <div class="col-sm-10">
                        <input autocomplete="off" name="password" type="password" :value="password.value" @input="handleInput" class="form-control" placeholder="Password">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                        <button type="submit" :disabled="hasError" @click="handleSubmit" class="btn btn-default btn-auth" translate>Sign in</button>
                        <a class="forgot-pass" translate>Forgot password?</a>
                    </div>
                </div>
            </form>

            <div class="auth-sep">
                <span>
                    <span translate>or Sign in with one click</span>
                </span>
            </div>

            <div class="al-share-auth">
                <ul class="al-share clearfix">
                    <li>
                        <i class="socicon socicon-facebook" title="facebook"></i>
                    </li>
                    <li>
                        <i class="socicon socicon-twitter" title="twitter"></i>
                    </li>
                    <li>
                        <i class="socicon socicon-google" title="google"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        return {
            email: {
                value: '',
                valid: false,
                class: '',
                rule: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
            },
            password: {
                value: '',
                valid: false,
                class: '',
                rule: /^[a-zA-Z\d_]{8,}$/
            },
            hasError: true
        }
    },
    watch: {
        'email.value'(val) {
            this.validate('email', val)
        },
        'password.value'(val) {
            this.validate('password', val)
        }
    },
    methods: {
        handleInput(event) {
            const value = event.target.value
            const name = event.target.name
            this[name].value = value
        },
        validate(type, val) {
            const reg = this[type].rule
            if (reg.test(val)) {
                this[type].valid = true
                this[type].class = 'has-success'
            } else {
                this[type].valid = false
                this[type].class = 'has-error'
            }
            if (this.email.valid && this.password.valid) this.hasError = false
        },
        handleSubmit(event) {
            event.preventDefault()
            if (this.email.value === 'urionz@urionz.com' && this.password.value === '12345678') {
                this.$router.push({
                    name: 'dashboard'
                })
            }
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/theme/sass/auth';
</style>
