<template>
  <div class="addevent">
    
    <Sidebar/>
      <div>
        <router-view/>
      </div>

  </div>
</template>

<script>
import Sidebar from '@/components/afterLogin/Sidebar.vue'
//import Events from '../Components/afterlogin/Events.vue'
export default {
  name: 'addevent',
  components: {Sidebar,}
}
</script>