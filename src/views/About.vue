<template>
    <div>
        <div id="filters">
            <button @click="setFilter('A')">A</button>
            <button @click="setFilter('B')">B</button>
            <button @click="setFilter('C')">C</button>
        </div>
        <div v-for="item in items" :key="item.id" v-if="filter===item.filter || filter==='ALL'">
            {{item.id}}
        </div>

        
        <template>
          <div>{{ new Date() | dateFormat('MMMM DD HH:mm') }}</div>
        </template>

        <template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

<v-btn class="ma-2" tile outlined color="success">
      <v-icon left>mdi-pencil</v-icon> Edit
    </v-btn>


    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    filter: 'A'
                },
                {
                    id: 2,
                    filter: 'B'
                }
            ],
            filter: 'ALL'
        }
    },
    methods: {
      setFilter(filterName) {
          this.filter = filterName
      },
    },

    
}
</script>