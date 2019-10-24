<template>
    <div>
        <v-btn v-on:click="userFilterKey = 'all'" :class="{ active: userFilterKey == 'all' }">All</v-btn>
        <v-btn v-on:click="userFilterKey = 'nearby'" :class="{ active: userFilterKey == 'nearby' }">Nearby</v-btn>
        <ul>
            <li v-for="user in userFilter" :key="user">
            {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userFilterKey: 'all',
            users: [
                { name: 'Bill Close', distance: 10 },
                { name: 'Bill Far', distance: 100 },
                { name: 'Bill Criswell', distance: 1 }
            ]
        }
    },
  computed: {
    userFilter() {
      return this[this.userFilterKey]
    },
    all() {
      return this.users
    },
    nearby() {
      return this.users.filter((user) => user.distance <= 15)
    }
  }
}
</script>