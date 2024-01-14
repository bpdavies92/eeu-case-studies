<template>
  <v-app>
    <!-- <default-bar /> -->
    <v-navigation-drawer
        color="#303030"
        rail
        rail-width="110"
        permanent
      >

        <v-divider></v-divider>

        <v-list
          density="compact"
          nav
        >
          <v-list-item variant="plain"  value="dashboard" >
              <v-btn @click="router.push({name: 'Home'})" rounded="10" prepend-icon="mdi-home" elevation="0" variant="text" stacked>
                Home
              </v-btn>
          </v-list-item>

          <v-list-item variant="plain"  value="dashboard" >
              <v-btn rounded="10" prepend-icon="mdi-book-open-variant" elevation="0" variant="text"   stacked>
                <span class="block">Commu</span>nities
              </v-btn>
          </v-list-item>

          <v-list-item variant="plain"  value="dashboard" >
              <v-btn rounded="10" prepend-icon="mdi-filter-cog" elevation="0" variant="text"   stacked>
                Resource finder
              </v-btn>
          </v-list-item>

        </v-list>



      </v-navigation-drawer>
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { useRouter } from 'vue-router';

  const router = useRouter()
</script>
