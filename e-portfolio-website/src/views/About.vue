<template>
  <v-container class="aboutContainer">
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <v-row>
      <h2>About ~</h2>
    </v-row>
    <v-row class="mt-12">
      <v-col cols="4">
        <vue-diagonal :deg="3" background="orange" class="picBack2"/>
        <vue-diagonal :deg="-4" background="#6495ed" class="picBack1">
          <img src="../assets/profilePic.jpeg" class="mt-2">
        </vue-diagonal>
        <vue-diagonal :deg="3" background="orange"  class="picBack2"/>
      </v-col>
      <v-col cols="8">
        <h1>Justin Lyn</h1>
        <h3>Computer Science Student</h3>
        <p><b>I code, design, collaborate, and solve problems.</b> I love learning new concepts and technologies, and
          creating things that other people can use and share with others.<br><br>
          My computer science career started back when I was in grade 11 and since attending the University of Toronto
          in the fall of 2017, I have been narrowing down what path I want to pursue in the world of computer science.
          I chose to study computer science after watching CSI Cyber and seeing how powerful technology and computers
          can be and what they are capable of doing. Now in my 3rd year of studies, I’ve gained knowledge in various
          concepts such as, design patterns, databases, data structures, software life cycles, and the design and
          operation of digital computers.<br><br>
          Over the past few years, I’ve been able to gain hands on work experience with companies operating in Ontario,
          and have been lucky enough to experience both the hardware and software side of computer science. Currently,
          I am working as a software developer at SS&C Technologies and have been able
          to gain in depth knowledge on how companies maintain and manage data having worked extensively with SQL servers
          , and both integration and reporting services.<br><br>
          In the future, I plan to continue pursuing a career in the software world of computer science, striving for
          opportunities where I can design, create, and explore the various ways to provide information and services to the world. </p>
        <v-btn depressed ripple color="orange" style="margin-left: 30px; padding: 0 20px 0 20px" class="mt-4" v-on:click="openResume">resume</v-btn>
      </v-col>
    </v-row>
    <v-divider class="mt-12"/>
    <v-row>
      <h1 class="py-6 headers">Interests</h1>
      <v-slide-group>
        <v-slide-item v-for="picture in items" :key="picture.text">
          <v-hover v-slot:default="{ hover }">
            <v-img class="slideItem" :src="picture.src">
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="black">
                  <p>{{ picture.text }}</p>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      hover: false,
      items: [
        {
          src: 'https://18ogess18pg1ptgub1nm316t-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/16063372_web1_RubiksRumble3.0314.jpg',
          text: 'Rubiks Cubes'
        },
        {
          src: 'https://learn.g2.com/hubfs/What_is_Information_Technology.jpg',
          text: 'New Technology'
        },
        {
          src: 'https://simplefreethemes.com/wp-content/uploads/2018/09/Graphic-Designing.jpg',
          text: 'Creating & Designing'
        },
        {
          src: 'https://www.chuppspianos.com/wp-content/uploads/2013/09/Steinway-Sons-Model-D-Grand-Piano-Logo-and-Piano-Keys.jpg',
          text: 'Music'
        },
        {
          src: 'https://www.liveabout.com/thmb/hQYsUyZZvgMrDwIjTmZqEXafiyE=/2667x2000/smart/filters:no_upscale()/RioOlympicsswimmingpool-GettyImages-519838356-59c09963054ad90011cf5247.jpg',
          text: 'Swimming'
        },
        {
          src: 'https://bearkeydesign.com/wp-content/uploads/2019/11/1tampawebdesign.jpg',
          text: 'Web Design'
        },
        {
          src: 'https://pbs.twimg.com/profile_images/1295046967987404800/W9VMD0uS_400x400.png',
          text: 'Basketball'
        },
        {
          src: 'https://www.creativelive.com/blog/wp-content/uploads/2015/10/jsygaVpSPKes2SCJeihQ_EM2C5950-620x413.jpg',
          text: 'Photography'
        }
      ]
    }
  },
  methods: {
    openResume () {
      const pdf = '/Resume.pdf'
      window.open(pdf, '_blank')
    }
  }
}
</script>

<style scoped>
  h1, h3{
    padding-left: 30px;
  }
  p{
    font-size: 18px;
    padding: 50px 30px 0 30px;
  }
  h2{
    font-family: 'Caveat', cursive;
    font-size: 47px;
    font-weight: lighter;
  }
  .aboutContainer{
    max-width: 1900px;
    height: 100%;
    padding: 110px 8% 20px 8%;
  }
  .picBack1{
    padding: 15px 15px;
    z-index: 1;
  }
  .picBack2{
    height: 2.3vh;
  }
  .headers{
    min-width: 100%;
    text-align: center;
    font-size: 45px;
    font-weight: lighter;
  }
  .slideItem{
    height: 250px;
    width: 250px;
    margin: 20px 20px;
  }
  img {
    max-width: 100%;
    height: auto;
    width: auto\9;
    image-orientation: from-image;
  }
  .resumeBtn{
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
