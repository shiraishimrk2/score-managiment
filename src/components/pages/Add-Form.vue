<template>
  <form v-on:submit.prevent="submit">
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">曲名</label>
      <input type="text" class="col-sm-9 form-control" id="title" />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">アーティスト</label>
      <input type="text" class="col-sm-9 form-control" id="artist" />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">作曲者</label>
      <input type="text" class="col-sm-9 form-control" id="composer" />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">編曲者</label>
      <input type="text" class="col-sm-9 form-control" id="arranger" />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">出版社</label>
      <input type="text" class="col-sm-9 form-control" id="publisher" />
    </div>
    <button type="submit" class="btn btn-primary">登録</button>
  </form>
</template>
