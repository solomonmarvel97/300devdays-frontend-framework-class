<template>
    <div class="signupform">
        <!-- <img :src="image" alt="person"/> -->
        <div class="form-header">
            <h2>Admin Login</h2>
            <p>Welcome back. Enter your credentials to access your account</p>
        </div>

        <form @submit.prevent="sigin">
            <!-- email field -->
            <div class="form-group">
                <label for="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="hello@example.c" v-model="credentials.email" required>
            </div>

            <!-- password field -->
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" name="password" type="password" v-model="credentials.password" required>
            </div>

            <input type="submit" value="Sign In">

            <p>Email: {{ credentials.email }}</p>

        </form>
    </div>
</template>

<script>
import image1 from '@/assets/images/3.webp'

export default {
    data() {
        return {
            credentials: {
                email: null,
                password: null
            },
            image: image1
        }
    },
    methods: {
        sigin() {
            let credentials = this.credentials
            console.log(JSON.stringify(credentials))
            alert(`${this.credentials.email} and ${this.credentials.password}`)
        }
    }
}
</script>

<style scoped>
.signupform {
    max-width: 300px;
}

.signupform h2 {
    margin-bottom: 8px;
}

.signupform p {
    margin-bottom: 8px;
    color: #64748B
}

.form-header {
    margin-bottom: 2em;
}
</style>