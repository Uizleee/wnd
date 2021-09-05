<template>
  <div>
    <b-navbar toggleable="lg" class="main__navbar">
            <b-navbar-brand href="/" size="xl" class="title">She Said Yes</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item right>
                      <a class="menu-link" href="#concepts" v-smooth-scroll @click="onClickLink">
                        Концепт
                      </a>
                    </b-nav-item>
                    <b-nav-item href="#">
                      <a class="menu-link" href="#maps" v-smooth-scroll @click="onClickLink">
                        Площадка
                      </a>
                    </b-nav-item>
                    <b-nav-item>
                      <a class="menu-link" href="#timings" v-smooth-scroll @click="onClickLink">
                      Тайминг
                    </a>
                    </b-nav-item>
                    <b-nav-item v-if="isPerson">
                      <a class="menu-link" href="#seatings" v-smooth-scroll @click="onClickLink">
                        Рассадка
                      </a>
                    </b-nav-item>
                    <b-nav-item>
                      <a class="menu-link" href="#Specialists" v-smooth-scroll @click="onClickLink">
                        Специалисты
                      </a>
                    </b-nav-item>
                    <b-nav-item>
                      <a class="menu-link" href="#Advices" v-smooth-scroll @click="onClickLink">
                        Советы
                      </a>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
      </div>
</template>
<script>

export default {
  name: 'Menu',
  components: {},
  props: {
    isPerson: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClickLink(e) {
      e.stopPropagation();
    },
  },
};
</script>

<style scoped lang="sass">
.main__navbar
  padding: 0px 0px 16px 0px;
.navbar
  text-align: center;
  position: right;
.title
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 330px)
    font-size: 26px;

.menu-link
  text-decoration: none;
  color: rgba(0, 0, 0, .5);
  &:hover
    color: rgba(0, 0, 0, .8);
</style>
