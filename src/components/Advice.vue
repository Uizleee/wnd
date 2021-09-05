<template>
  <div>
    <h2 align="center"  id="advices">Советы</h2>
     <img src="@/assets/imgs/background.jpg" style="width: 100%;">
     <div class="container">
         <p class= "block1">Мы надеемся на теплую и солнечную погоду, но,
        если погода нас не порадует,
         пожалуйста, одевайтесь теплее</p>
         <p class= "block2">Просим не обременять себя выбором подарка,
              а предоставить это замечательное право нам,
              внеся свой вклад в бюджет нашей молодой семьи, спасибо!</p>
              <p class="block3">Любые вопросы можно задать по телефону нашему
                  замечательному организатору:
              </p>
              <h3>+7 913 813 99 86 Эльвира</h3>
              </div>
          </div>
</template>

<script>

export default {
  name: 'Advice',
  components: {},
};
</script>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    padding: 0%;
    border:1px solid silver;
}
</style>
