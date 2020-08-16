<template>
  <v-app>
    <v-app-bar class="navbar" elevation="5" color="black" floating>
      <v-toolbar-title>
        <button v-on:click="$router.push('/')">+</button>
      </v-toolbar-title>
      <v-toolbar-items>
        <NavBar/>
      </v-toolbar-items>
    </v-app-bar>
    <v-content class="content">
      <router-view/>
      <v-footer class="font-weight-medium" elevation="10" color="black">
        <v-divider></v-divider>
        <v-col cols="12" class="footerText">
          Copyright © {{ new Date().getFullYear() }}<strong> Justin Lyn, All rights reserved.</strong>
        </v-col>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: { NavBar },
  data: () => ({
    //
  })
}
</script>

<style scoped>
  button{
    text-align: center;
    color: cornflowerblue;
    font-size: 45px;
    font-weight: bold;
    border: none;
    outline: none;
    padding-left: 10px;
  }
  .navbar{
    max-height: 65px;
  }
  .content{
    background: black;
  }
  .footerText{
    color: whitesmoke;
  }

</style>
