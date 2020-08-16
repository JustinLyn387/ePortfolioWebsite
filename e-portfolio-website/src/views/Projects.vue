<template>
  <v-container class="projectsContainer">
    <v-row>
      <v-col class="leftColumn pt-4">
        <v-row class="topLeft">
          <v-col>
            <v-card class="projCard pb-2" color="black">
              <h2 class="py-4 white--text">Project Collection</h2>
              <p class="px-4 projectText white--text">Here is a sample of some of the projects that I've completed!
              A few other small assignments and programs can be found in my other repositories.</p>
              <a class="githubIcon" href='https://github.com/JustinLyn387' target="_blank"> <font-awesome-icon :icon="['fab', 'github']" size="4x"/></a>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="bottomLeft">
          <v-col>
            <v-card class="projCard" color="red accent-3">
              <v-img max-height="350" src="../assets/kijijiCrawler2.jpeg"></v-img>
              <v-card-title>Kijiji Crawler</v-card-title>
              <v-card-subtitle class="pb-0">• Class Project •</v-card-subtitle>
              <v-card-text class="text--primary pb-0">
                <p><br>3rd year CS assignment where we had to create a crawler in Java that would scrape Kijiji listings
                  and display them on Google Maps</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text href="https://github.com/JustinLyn387/Kijiji-Crawler-Assignment" target="_blank">View Github</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="pt-4">
        <v-row class="topRight">
          <v-col>
            <v-card class="projCard" color="#FCFCFC">
              <v-row>
                <v-col cols="5">
                  <v-card-title>UTSC CourseTree</v-card-title>
                  <v-card-subtitle class="pb-0">• Side Project •</v-card-subtitle>
                  <v-card-text class="text--primary pb-0">
                    <p><br>This project was started in an attempt to create a better platform for UTSC students to
                      view and select courses that they need without having to open a million tabs
                    <br><br>Main Languages: Vue & Python</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text href="https://github.com/JustinLyn387/utsc-coursetree-project" target="_blank">View Github</v-btn>
                  </v-card-actions>
                </v-col>
                <v-divider dark></v-divider>
                <v-col cols="7" class="pl-0">
                  <img src="../assets/courseTree.png"/>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="bottomRight">
          <v-col class="rightColumns">
            <v-card class="projCard pb-1" color="green accent-3">
              <img src="../assets/terminal.jpeg"/>
              <v-card-title>Mock Terminal</v-card-title>
              <v-card-subtitle class="pb-0">• Class Project •</v-card-subtitle>
              <v-card-text class="text--primary">
                <p><br>2nd year CS assignment where we had to create a clone of the Terminal/Command Prompt.
                The terminal had to perform the same basic commands like ls, cat, echo, man, pwd, etc...</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text href="https://github.com/JustinLyn387/Java-Mock-Terminal" target="_blank">View Github</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="rightColumns">
            <v-card class="projCard" color="light-blue accent-3">
              <img src="../assets/chatbot.jpeg"/>
              <v-card-title>Chatbot</v-card-title>
              <v-card-subtitle class="pb-0">• Class Project •</v-card-subtitle>
              <v-card-text class="text--primary pb-0">
                <p><br>3rd year CS group assignment where we had to create a Chabot for DFI. The chabot was required to
                utilize Java & IBM Watson, however we were free to choose the frontend framework and any other languages
                that we wanted to use</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text href="https://github.com/JustinLyn387/CSCC01-Chatbot-Project" target="_blank">View Github</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
  .projectsContainer{
    max-width: 1600px;
    height: 100%;
    padding: 20px 5% 30px 5%;
  }
  .projCard {
    min-width: 100%;
    min-height: 100%;
  }
  h2 {
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
    width: auto\9;
    padding-bottom: 0;
  }
  .bottomLeft{
    min-height: 50vh;
  }
  .topRight{
    min-height: 40vh;
  }
  .topLeft{
    max-height: 40vh;
  }
  .bottomRight{
    max-height: 50vh;
  }
  .leftColumn{
    max-width: 30%;
  }
  .projectText{
    text-align: center;
  }
  .githubIcon{
    color: whitesmoke;
    padding-left: 41%;
  }

</style>
