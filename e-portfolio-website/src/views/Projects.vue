<template>
  <v-container class="projectsContainer">
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <v-row>
      <h2>Projects ~</h2>
    </v-row>
    <v-row class="mt-10">
      <v-slide-group class="projectGallery">
        <v-slide-item v-for="project in projects" :key="project.name">
          <v-card class="projectCard" v-bind:color="project.colour">
            <v-img class="projImage" :src="project.image"/>
            <v-card-title>{{ project.name }}</v-card-title>
            <v-card-subtitle class="pb-0" style="font-size: 16px">{{ project.type }}</v-card-subtitle>
            <v-card-text class="text--primary pb-0 projectInfo">
              <p><br>{{ project.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn text v-bind:href="project.link" target="_blank">View Github</v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>

  </v-container>

</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          name: 'UTSC CourseTree',
          type: '• Side Project •',
          image: require('../assets/courseTree.png'),
          description: 'This project is an attempt to create a better experience for UTSC students to select courses that they need without having to open a million tabs. Main technologies used are Vue and Python',
          link: 'https://github.com/JustinLyn387/utsc-coursetree',
          colour: '#6495ed'
        },
        {
          name: 'Chatbot',
          type: '• Class Project •',
          image: require('../assets/chatbot.jpeg'),
          description: '3rd year CS group assignment where we created a functional chatbot and pitched it to DFI. The chatbot was created using Java & IBM Watson as well as Angular for the front end',
          link: 'https://github.com/JustinLyn387/CSCC01-Chatbot-Project',
          colour: 'rgb(255, 156, 56)'
        },
        {
          name: 'Kijiji Crawler',
          type: '• Class Project •',
          image: require('../assets/kijijiCrawler2.jpeg'),
          description: 'Another 3rd year CS assignment where my partner and I had to create a crawler in Java that would scrape Kijiji listings and then display them on Google Maps using the Maps JavaScript API',
          link: 'https://github.com/JustinLyn387/Kijiji-Crawler-Assignment',
          colour: 'red accent-3'
        },
        {
          name: 'Mock Terminal',
          type: '• Class Project •',
          image: require('../assets/terminal.jpeg'),
          description: '2nd year CS assignment where we had to create a clone of the Terminal/Command Prompt. The terminal had to perform the same basic commands like ls, cat, man, pwd, etc..',
          link: 'https://github.com/JustinLyn387/Java-Mock-Terminal',
          colour: 'green accent-3'
        }]
    }
  }
}
</script>

<style scoped>
  h2{
    font-family: 'Caveat', cursive;
    font-size: 47px;
    font-weight: lighter;
  }
  p{
    font-size: 15px;
  }
  .projectsContainer{
    max-width: 1900px;
    height: 100%;
    padding: 110px 8% 20px 8%;
  }
  .projectGallery{
    min-width: 100%;
  }
  .projectCard{
    height: 75vh;
    width: 372px;
    padding: 25px;
    margin: 15px 30px 15px 0;
    overflow-y: scroll;
  }
  .projectInfo{
    margin-top: 15vh;
  }
  .projImage{
    height: 30vh;
  }
</style>
