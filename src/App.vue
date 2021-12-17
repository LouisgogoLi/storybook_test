<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'PropsApp' }">PropsApp</router-link> |
    <router-link :to="{ name: 'PropsAndEmit' }">PropsAndEmit</router-link> |
    <router-link :to="{ name: 'DirectiveTest' }">DirectiveTest</router-link> |
    <router-link :to="{ name: 'SlotTest' }">SlotTest</router-link> |
    <router-link :to="{ name: 'ProvideInjectTest' }"
      >ProviedInjectTest</router-link
    >
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
