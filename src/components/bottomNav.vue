<template>
    <v-bottom-navigation
    class="d-flex d-sm-none"
    :value="activeBtn"
    grow
    app
    shift
    color="blue accent-2"
    >
        <v-btn router-link to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn router-link to="/allevents">
        <span>All Events</span>
        <v-icon>mdi-eventbrite</v-icon>
        </v-btn>

        <v-btn router-link to="/about">
        <span>About</span>
        <v-icon>question_answer</v-icon>
        </v-btn>

        <v-btn router-link to="/signin">
        <span>SignIn</span>
        <v-icon>mdi-login</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    data () {
        return {
            activeBtn: 0,
        }
    }
};
</script>