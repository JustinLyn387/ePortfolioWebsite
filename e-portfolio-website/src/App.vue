<template>
  <v-app>
    <v-content class="content">
      <v-speed-dial class="floatingNav" open-on-hover transition="slide-x-transition" direction="right">
        <template v-slot:activator>
          <button v-on:click="$router.push('/')">+</button>
        </template>
        <button class="navButton">
          <router-link exact to="/about" v-bind:style="this.navColour">About</router-link>
        </button>
        <v-divider/>
        <button class="navButton">
          <router-link exact to="/workexperience" v-bind:style="this.navColour">Work Experience</router-link>
        </button>
        <v-divider/>
        <button class="navButton">
          <router-link exact to="/projects" v-bind:style="this.navColour">Projects</router-link>
        </button>
      </v-speed-dial>
      <router-view/>
      <v-footer class="font-weight-medium" style="justify-content: center" elevation="9" color="#6495ed">
        <v-row class="footerBar">
          <v-row>
            <v-col class="footerText" cols="10">
              <strong>Copyright © {{ new Date().getFullYear() }} by Justin Lyn</strong>
            </v-col>
          </v-row>
          <v-col cols="2" style="text-align: right">
            <a class="connectIcon" href='https://www.linkedin.com/in/justin-lyn-b9626114b/' target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x"/></a>
            <a class="connectIcon" href='https://www.facebook.com/Justinlyn387' target="_blank"><font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"/></a>
            <a class="connectIcon" href='https://github.com/JustinLyn387' target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="2x"/></a>
          </v-col>
        </v-row>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: { },
  data: () => ({
    navColour: 'color: whitesmoke'
  }),
  watch: {
    $route (to, from) {
      if (to.name === 'Home') {
        this.navColour = 'color: whitesmoke'
      } else {
        this.navColour = 'color: cornflowerblue'
      }
    }
  }
}
</script>

<style scoped>
  button{
    text-align: center;
    color: rgb(255, 156, 56 );
    font-size: 65px;
    font-weight: bold;
    border: none;
    outline: none;
    padding-left: 10px;
  }
  .navButton{
    font-size: 24px;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    padding-left: 75px;
  }
  .v-application a {
    color: whitesmoke;
    text-decoration: none;
  }
  .floatingNav{
    position: absolute;
    margin: 15px 0 0 35px;
  }
  .content{
    background: whitesmoke;
  }
  .footerBar {
    max-width: 1800px;
  }
  .footerText{
    color: whitesmoke;
    padding: 17px 0 0 20px;
  }
  .connectIcon{
    color: whitesmoke;
    margin-right: 20px;
    justify-content: right;
    text-align: right;
  }

</style>
