<template>
  <section class="list-title">
    <div class="title-box">
      <h3 class="title-inner">ALL List</h3>
      <Sort-icon class="icon-inner" />
      <Moviesort-icon class="icon-inner" />
    </div>
    <List-item />
  </section>
</template>

<style scoped>
.list-title {
  padding: 10px 0;
}

.title-box {
  margin: 20px 30px;
  padding-bottom: 10px;
  border-bottom: solid 2px #eff0f4;
  grid-template-columns: 1fr 1fr;
}

.title-inner {
  display: inline;
  margin-top: 5px;
  font-size: 20px;
  letter-spacing: 0.15em;
  font-weight: 600;
  color: #d0d3e2;
}

.icon-box {
  /* display: inline-block; */
  /* width: 100px; */
}

.icon-inner {
  /* float: right; */
  display: inline;
  padding: 10px 5px;
}
</style>