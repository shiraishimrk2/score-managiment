<template>
  <div id="app">
    <header v-if="$route.name !== 'タイトル'">
      <HeaderMenu />
    </header>

    <main>
      <RouterView />
    </main>

    <footer v-if="$route.name !== 'タイトル' && $route.name !== '初期設定'">
      <FooterMenu />
    </footer>
  </div>
</template>
<style>
html {
  font-family: "Meylio UI";
  letter-spacing: 0.15em;
  height: 100%;
  overflow: hidden;
}

body {
  height: 100%;
  letter-spacing: 0.15em;
  background-color: #f6f6f6;
  margin: 0;
}
main {
  /* height: calc(100% - 55px); */
  overflow: hidden;
  /* margin: 0 30px ; */
}
h1 {
  font-size: 1rem;
  letter-spacing: 0.15em;
}
h2 {
  font-size: 1rem;
  color: #101748;
  text-align: center;
  font-family: "Meylio UI";
  font-weight: 550;
  margin: 0px;
  letter-spacing: 0.15em;
}
a {
  font-size: 1rem;
}
li {
  list-style-type: none;
  letter-spacing: 0.15em;
}
input {
  letter-spacing: 0.15em;
}

#app {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 1024px) {
  #app {
    display: grid;

    grid-template-areas:
      "hed hed hed"
      "fot wap wap";
    grid-template-rows: 60px 1fr;
    grid-template-columns: 60px 1fr;
  }

  #app > header {
    grid-area: hed;
  }

  #app > main {
    grid-area: wap;
  }

  #app > footer {
    grid-area: fot;
  }
}
</style>