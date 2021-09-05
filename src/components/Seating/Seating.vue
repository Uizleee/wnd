<template>
    <div>
      <h2>Рассадка</h2>
      <div class="desk">
        <img class="desk__image" src="@/assets/imgs/desk2.jpg"/>
        <div class="desk__person-name">
          <div>{{ personData.name }}</div>
          <div class="desk__person-seat">Стол: <span>{{ personData.desk }}</span></div>
        </div>
      </div>
      <template v-if="personData.neighbors.length > 0">
        <div class="neighbors-title">За столом:</div>
        <div class="neighbors-list">
          {{ neighborsStr }}
        </div>
      </template>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Seating',
  components: {},
  props: {
    personData: {
      type: Object,
      default: null,
    },
  },
  computed: {
    neighborsStr() {
      return _.sortBy(this.personData.neighbors, ['name']).map((item) => item.name).join(', ');
    },
  },
};
</script>

<style scoped lang="sass">
  .desk
    width: 100%;
    position: relative;
    &__image
      // position: absolute;
      display: inline-block;
      width: 100%;
    &__person-name
      position: absolute;
      top: 0px;
      font-size: 22px;
      width: 100%;
      text-align: center;
      background-color: rgba(255, 255, 255, .7);
      padding: 5px 10px
      font-weight: 600;
      color: #844200;
    &__person-seat
      font-size: 18px;
      span
        font-size: 20px;

  .neighbors-title
    font-size: 25px;
    font-weight: 600;
    color: #AE957C;
</style>
