<template>
  <div>

    <div class="gameContainer">

      <template v-for="(game, index) in gameList">
        <div class="gameItem" @click="addBasket(game)">
          <img :src="game.img">
          <h5>{{ game.name }}</h5>
        </div>
      </template>

    </div>

  </div>
</template>

<script>
import imgPath1 from '../assets/gameIcon/마비노기.png'
import imgPath2 from '../assets/gameIcon/아스텔리아.png'
import imgPath3 from '../assets/gameIcon/아키에이지.png'
import imgPath4 from '../assets/gameIcon/테일즈위버.png'

import { mapState } from 'vuex'
export default {
  name: "GameList",
  components: {

  },
  props: {

  },
  created() {

  },
  mounted() {

  },
  data() {
    return {
      gameList: [
        {
          name: '마비노기',
          img: imgPath1
        },
        {
          name: '아스텔리아',
          img: imgPath2
        },
        {
          name: '아키에이지',
          img: imgPath3
        },
        {
          name: '테일즈위버',
          img: imgPath4
        },
      ]
    };
  },
  watch: {

  },
  computed: {
    ...mapState({
      eventHub: state => state.globalEventDistributor.eventHub
    })
  },
  methods: {
    addBasket(game) {
      this.eventHub.$emit('ShoppingBasket:AddItem:addBasketItem', game);
    }
  }
}
</script>

<style scoped>
  .gameContainer {

  }

  .gameItem {
    border: solid 1px black;
    width: 150px;
    height: 100px;
    margin: 0.5em;
  }

  .gameItem:hover {
    background-color: #116466;
    cursor: pointer;
  }

  .gameItem img {
    padding: 0.2em;
  }

</style>
