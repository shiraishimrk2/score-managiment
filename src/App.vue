<template>
  <div id="app">
    <header v-if="$route.name !== 'タイトル'">
      <Header></Header>
    </header>

    <main>
      <RouterView />
    </main>

    <footer v-if="$route.name !== 'タイトル' && $route.name !== '初期設定'">
      <Footer-Menu></Footer-Menu>
    </footer>
  </div>
</template>
<style>
/* * {
  outline: 2px solid red;
} */
body {
  background-color: #f6f6f6;
  margin: 0;
}
main {
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
}
a {
  font-size: 1rem;
}
li {
  list-style-type: none;
}
</style>