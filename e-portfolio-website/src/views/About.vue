<template>
  <v-container class="aboutContainer">
    <v-row>
      <v-col><v-row>
        <h1 class="py-6">WHO?</h1>
      </v-row>
        <v-row>
          <v-col cols="3">
            <v-row>
              <v-col class="pb-10">
                <img src="../assets/profilePic.jpeg">
              </v-col>
            </v-row>
            <v-row>
              <v-col class="resumeBtn">
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="9" class="pl-8">
            <h1>Justin Lyn</h1>
            <h2>Computer Science Student</h2><br>
            <p><b>I code, design, collaborate, and solve problems.</b> I love learning new things, and am especially interested
              in all things technology related, from AI to web design.<br><br>
              My computer science career started back when I was in grade 11 and since attending the University of Toronto
              in the fall of 2017, I have been narrowing down what path I want to pursue in the world of computer science.
              I chose to study computer science after watching CSI Cyber and seeing how powerful technology and computers
              can be and what they are capable of doing. Now in my 3rd year of studies, I’ve gained knowledge in various
              concepts such as, design patterns, databases, data structures, software life cycles, and the design and
              operation of digital computers.<br><br>
              Over the past few years, I’ve been able to gain hands on work experience with companies operating in Ontario,
              and have been lucky enough to experience both the hardware and software worlds of computer science. Currently,
              I am working as a Software Developer for International Financial Data Services Ltd. (IFDS) and have been able
              to contribute in various aspects. From creating new reports for employees to integrating brand new systems for
              retrieving and updating information that the company uses.<br><br>
              In the future, I plan to continue pursuing a career in the software world of computer science, striving for
              opportunities where I can design, create, and explore the various ways to provide information and services to the world. </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <h1 class="py-6">Interests</h1>
      <v-carousel cycle hide-delimiter-background>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
          <h2 :class="`font-weight-bold mb-4 ${item.color}--text interestText`">{{ item.text }}</h2>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      items: [
        {
          src: 'https://18ogess18pg1ptgub1nm316t-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/16063372_web1_RubiksRumble3.0314.jpg',
          text: 'Rubiks Cubes',
          color: 'white'
        },
        {
          src: 'https://learn.g2.com/hubfs/What_is_Information_Technology.jpg',
          text: 'New Technology',
          color: 'white'
        },
        {
          src: 'https://simplefreethemes.com/wp-content/uploads/2018/09/Graphic-Designing.jpg',
          text: 'Creating & Designing',
          color: 'white'
        },
        {
          src: 'https://www.chuppspianos.com/wp-content/uploads/2013/09/Steinway-Sons-Model-D-Grand-Piano-Logo-and-Piano-Keys.jpg',
          text: 'Music',
          color: 'white'
        },
        {
          src: 'https://www.liveabout.com/thmb/hQYsUyZZvgMrDwIjTmZqEXafiyE=/2667x2000/smart/filters:no_upscale()/RioOlympicsswimmingpool-GettyImages-519838356-59c09963054ad90011cf5247.jpg',
          text: 'Swimming',
          color: 'white'
        }
      ]
    }
  }
}
</script>

<style scoped>
  h1, h2, p{
    color: whitesmoke;
  }
  .aboutContainer{
    max-width: 1600px;
    height: 100%;
    padding: 20px 10% 20px 10%;
  }
  .interestText{
    font-weight: bold;
    font-size: 40px;
    padding: 2vh 0 0 4vh;
  }
  img {
    max-width: 100%;
    height: auto;
    width: auto\9;
    padding-bottom: 0;
    image-orientation: from-image;
  }
  .resumeBtn{
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
