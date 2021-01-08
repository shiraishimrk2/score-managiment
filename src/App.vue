<template>
  <div id="app">
    <header v-if="$route.name !== 'タイトル'">
      <Header />
    </header>

    <main>
      <RouterView />
    </main>

    <footer v-if="$route.name !== 'タイトル' && $route.name !== '初期設定'">
      <Footer-Menu />
    </footer>
  </div>
</template>
<style>
html {
  height: 100%;
}

body {
  height: 100%;
  background-color: #f6f6f6;
  margin: 0;
}
main {
  height: 100%;
  overflow: hidden;
}
h1 {
  font-size: 1rem;
}
h2 {
  font-size: 1rem;
  color: #101748;
  text-align: center;
  font-family: "Meylio UI";
  font-weight: 550;
  letter-spacing: 0.15em;
  margin: 0px;
}
a {
  font-size: 1rem;
}
li {
  list-style-type: none;
}

@media screen and (min-width: 1024px) {
  #app {
    display: grid;
    width: 100%;
    grid-template-areas:
      "hed hed hed"
      "fot wap wap";
    grid-template-rows: 55px 1fr;
    grid-template-columns: 80px 1fr;
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