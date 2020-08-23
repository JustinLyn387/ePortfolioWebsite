<template>
  <v-container class="homeContainer">
    <section>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
    <v-row class="homeText">
      <v-col class="py-0 homeColumn">
        <h1 style="font-size: 7em">Justin? WHO?</h1>
        <h2>Hey there! Welcome to my website where<br> you can find out a little bit more about who I am ...</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'HelloWorld',
  data () {
    return {
      drawer: null
    }
  },

  mounted () {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    })

    tl.add({
      targets: 'section div',
      width: '100%',
      backgroundColor: 'rgb(255, 156, 56 )',
      delay: anime.stagger(100) // increase delay by 100ms for each elements.
    })
      .add({
        targets: 'section div',
        width: '90%',
        backgroundColor: 'rgb(255, 156, 56 )'
      })
      .add({
        targets: '.homeText',
        top: '20%',
        opacity: 1,
        duration: 4000
      }, '-=1600')

    anime({
      targets: 'section',
      scaleY: '2',
      scaleX: '2',
      translateX: '40%',
      rotate: '45deg',
      duration: 5000,
      delay: 2000

    })
  }
}
</script>

<style scoped>
  .homeContainer{
    padding: 0;
    min-width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    max-height: 100vh;
    background-color: cornflowerblue;
  }
  section {
    display: grid;
    grid-template-columns: repeat(10, auto);
  }
  div {
    height: 100vh;
    transition: background-color 1s;
    z-index: 5;
  }
  .homeText {
    max-height: 30vh;
    margin-top: 15%;
    position: absolute;
    left: 10%;
    opacity: 0;
    z-index: 2;
    color: whitesmoke;
  }
  .homeColumn{
    height: auto;
  }

</style>
