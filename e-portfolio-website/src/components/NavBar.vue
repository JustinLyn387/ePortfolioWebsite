<template>
  <!-- Nav bar that contains a list of the router links -->
  <nav>
    <ul>
      <li><router-link exact to="/aboutme">About Me</router-link></li>
      <li><router-link exact to="/workexperience">Work Experience</router-link></li>
      <li><router-link exact to="/projects">Projects</router-link></li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
    color: whitesmoke;
    font-weight: bold;
    padding-left: 50px;
  }
  a {
    text-decoration: none;
    padding: 6px 8px;
    font-size: 20px;
    border-radius: 10px;
  }
  nav{
    padding: 17px 0;
    border-radius: 50px;
  }
  .router-link-active{
    border-bottom: 3px solid cornflowerblue;
    border-radius: 2px;
    color: whitesmoke;
  }
  .v-application a {
    color: whitesmoke;
  }

</style>
