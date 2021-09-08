<template>
  <div class="mx-auto my-0 my-xl-2 my-lg-4 p-4 main-container" id="app">
      <Menu
        :isPerson="!!currentPerson"
      />
      <img src="@/assets/imgs/head.jpg" style="width: 100%; height: auto;"/>
      <Concept id="concepts"/>
      <Map id="maps"/>
      <Timing id="timings"/>
      <Seating v-if='currentPerson' id="seatings"
        :personData="currentPerson"/>
      <Specialist id="Specialists"/>
      <Advice id="Advices"/>
  </div>
</template>
<script>
import _ from 'lodash';

import Menu from './components/Menu.vue';
import Map from './components/Map.vue';
import Concept from './components/Concept.vue';
import Seating from './components/Seating/Seating.vue';
import Specialist from './components/Specialist.vue';
import Timing from './components/Timing.vue';
import Advice from './components/Advice.vue';

import peronsMixin from './components/Seating/PersonsMixin';

export default {
  name: 'App',
  mixins: [peronsMixin],
  components: {
    Menu,
    Map,
    Concept,
    Seating,
    Specialist,
    Timing,
    Advice,
  },
  data() {
    return {
    };
  },
  computed: {
    currentPerson() {
      let person = _.find(this.persons, { id: this.$route.params.id }) || null;
      if (person) {
        person = {
          ...person,
          neighbors: this.persons.filter((item) => (
            item.desk === person.desk && item.id !== person.id
          )),
        };
      }
      return person;
    },
  },
};
</script>

<style lang="sass">
@font-face
  font-family: "PlayfairDisplayt"
  src: url("./assets/fonts/PlayfairDisplay-Regular.ttf")
  font-display: swap
*
  font-family: 'PlayfairDisplayt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;

.main-container
  display: flex;
  flex-direction: column;
  max-width: 900px;
  text-align: center
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px

h2
  padding: 25px 0px 5px 0px
  font-weight: 600;
  font-size: 30px
  color: #AE957C
h3
 font-size: 20px
</style>
