<template>
  <div>
      <h2 align="center">Специалисты</h2>
      <p>
        Вместе с вами, наш самый лучший день будут делать следующие специалисты:
      </p>
      <b-carousel class="spec"
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="500"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;">
      <b-carousel-slide
        caption-html="Эльвира"
        text="Организатор, церемонийместер"
        img-src="@/assets/imgs/slider/org.jpg">
        </b-carousel-slide>
      <b-carousel-slide
        caption-html="Александр Шумейко"
        text="Ведущий"
        img-src="@/assets/imgs/slider/ved.jpg">
        </b-carousel-slide>
        <b-carousel-slide
        caption-html="Андрей Петров"
        text="Фотограф"
        img-src="@/assets/imgs/slider/foto.jpg">
        </b-carousel-slide>
        <b-carousel-slide
        caption-html="Антон Соловов"
        text="Видеограф"
        img-src="@/assets/imgs/slider/video.jpg" >
        </b-carousel-slide>
    </b-carousel>
 </div>
</template>

<script>
export default {
  name: 'Specialist',
  components: {},
};
</script>
