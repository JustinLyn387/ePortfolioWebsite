<template>
  <v-container class="experienceContainer">
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <v-row>
      <h2 class="headingText">Work Experience ~</h2>
    </v-row>
    <v-row class="mt-10">
      <v-col>
        <v-card elevation="10" shaped class="timelineCard">
          <v-timeline light>
            <!-- Use a loop to create the timeline -->
            <v-timeline-item color="primary" small>
              <template v-slot:opposite>
                <v-row>
                  <v-col class="workYears">
                    <span :class="`headline font-weight-light $primary--text`" >2020 - Present</span>
                  </v-col>
                  <v-col>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png" height="125px" width="230px"/>
                  </v-col>
                </v-row>
              </template>
              <div class="py-4">
                <h2 :class="`headline font-weight-bold mb-4 blue--text`">Software Developer</h2>
                <h3 :class="`font-weight-bold mb-4 $primary--text`">SS&C Technologies, Toronto, Ontario</h3>
                <div>
                  • Daily interaction with SSMS, SSRS, and SSIS to view, manage, and modify company information<br>
                  • Actively participate in bi-weekly sprint meetings and group projects assisting others and taking initiative when needed<br>
                  • Test & Document code releases prior to deployment
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="blue darken-4">
              <template v-slot:opposite>
                <v-row>
                  <v-col>
                    <img src="https://www.youthemployment.org.uk/dev/wp-content/uploads/2016/10/IFDS-logo-Portrait-Corporate-Blue-1.png" height="155px" width="250px"/>
                  </v-col>
                  <v-col class="workYears">
                    <span :class="`headline font-weight-light $primary--text`" >2020 - 2020</span>
                  </v-col>
                </v-row>
              </template>
              <div class="py-4">
                <h2 :class="`headline font-weight-bold mb-4 primary--text`">Software Developer</h2>
                <h3 :class="`font-weight-bold mb-4 $primary--text`">International Financial Data Services Ltd, Toronto, Ontario</h3>
                <div>
                  • Assist company resources with the creation and modification of reports and troubleshooting of issues related to data, software, and reports<br>
                  • Provide support for proprietary software and websites, and develop new features based on business needs<br>
                  • Integrated a new process which allows for the automation of data extraction and updates which is used for reporting and billing
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="red" small>
              <template v-slot:opposite>
                <v-row>
                  <v-col class="workYears">
                    <span :class="`headline font-weight-light $primary--text`" >2018 - 2019</span>
                  </v-col>
                  <v-col>
                    <img src="https://logos-download.com/wp-content/uploads/2016/08/CGI_logo.png" height="100px" width="200px"/>
                  </v-col>
                </v-row>
              </template>
              <div class="py-4">
                <h2 :class="`headline font-weight-bold mb-4 red--text`">Desktop Technician & Consultant</h2>
                <h3 :class="`font-weight-bold mb-4 $primary--text`">CGI Group Inc., Mississauga, Ontario</h3>
                <div>
                  • Facilitated with a Bell Distribution Inc. project where I had to image and configure 2000+ desktop and tablets and distribute them to Bell and subsidiaries across Canada<br>
                  • Managed the responsibility of the deployment of desktops and laptops for new and returning employees<br>
                  • Assisted Bell & CGI employees with various technical problems ranging from the installation of software to replacing device hardware
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="primary">
              <template v-slot:opposite>
                <v-row>
                  <v-col>
                    <img src="https://bandcaquatics.com/wp-content/uploads/2018/02/cropped-BC-SocialIcon.png" height="200px" width="200px"/>
                  </v-col>
                  <v-col class="workYears">
                    <span :class="`headline font-weight-light $primary--text`" >2017 - 2018</span>
                  </v-col>
                </v-row>
              </template>
              <div class="py-4">
                <h2 :class="`headline font-weight-bold mb-4 primary--text`">Swimming Instructor</h2>
                <h3 :class="`font-weight-bold mb-4 $primary--text`">B&C Aquatics, Pickering, Ontario</h3>
                <div>
                  • Organize and plan each lesson to guarantee each swimmer learns and practices the required abilities to improve<br>
                  • Continue to develop new and different methods and teachings to try and accommodate each swimmer in the program<br>
                  • Collaborate with other instructors on the progress of their swimmers and different teaching techniques to expand knowledge of different practices
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <template v-slot:opposite>
                <v-row>
                  <v-col class="workYears">
                    <span :class="`headline font-weight-light $primary--text`" >2013 - 2017</span>
                  </v-col>
                  <v-col>
                    <img src="https://bandcaquatics.com/wp-content/uploads/2018/02/cropped-BC-SocialIcon.png" height="200px" width="200px"/>
                  </v-col>
                </v-row>
              </template>
              <div class="py-4">
                <h2 :class="`headline font-weight-bold mb-4 primary--text`">Deck Attendant</h2>
                <h3 :class="`font-weight-bold mb-4 $primary--text`">B&C Aquatics, Pickering, Ontario</h3>
                <div>
                  • Facilitated the instructor during lessons by helping swimmer work on their strokes or providing constant feedback on ways for them to improve<br>
                  • Enforced pool safety and regulations to ensure that the swimming environment was safe for everyone<br>
                  • Coordinated groups of children of varying ages and ensured their safety while practicing and waiting for their turn with the instructor
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>

      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'WorkExperience'
}
</script>

<style scoped>
  h2, h3, span, div {
    color: black;
  }
  div{
    font-size: 18px;
  }
  .headingText{
    font-family: 'Caveat', cursive;
    font-size: 47px;
    font-weight: lighter;
  }
  .experienceContainer{
    padding: 110px 8% 20px 8%;
    max-width: 1900px;
    height: 100%;
  }
  .timelineCard{
    padding: 20px 75px 20px 75px;
  }
  .workYears{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
