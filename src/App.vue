<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
}

#app {
  min-width: 768px;
}

a {
  text-decoration: none;
}

h1,
h2,
h3 {
  text-align: center;
  margin: 5px 0;
}

nav {
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

input {
  padding: 5px 10px;
}

.button {
  border: 1px solid rgb(59, 116, 59);
  color: white;
  padding: 15px 30px;
  background-color: rgb(59, 116, 59);
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    color: rgb(59, 116, 59);
    background-color: white;
    cursor: pointer;
  }
}
</style>
