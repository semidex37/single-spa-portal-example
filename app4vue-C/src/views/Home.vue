<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App - Charlie"/>-->

    <div class="basketsContainer">
      <template v-for="item in baskets">
        <div class="basketItem">
          <img :src="item.img">
          <h5>{{ item.name }}</h5>
        </div>
      </template>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      baskets: []
    }
  },
  computed: {
    ...mapState({
      eventHub: state => state.globalEventDistributor.eventHub
    })
  },
  mounted() {
    this.eventHub.$on('ShoppingBasket:AddItem:addBasketItem', this.updateItem);
  },
  methods: {
    updateItem(item) {
      console.log('updateItem', item);
      this.baskets.push(item);
    }
  }
}
</script>

<style scoped>
  .basketsContainer {

  }

  .basketItem {
    border: solid 1px black;
    width: 150px;
    height: 100px;
    margin: 0.5em;
  }

  .basketItem:hover {
    background-color: #d1e8e2;
    cursor: pointer;
  }

  .basketItem img {
    padding: 0.2em;
  }

</style>
