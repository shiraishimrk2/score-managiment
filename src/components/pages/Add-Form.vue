<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <form v-on:submit.prevent="submit">
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">曲名</label>
            <input
              type="text"
              class="col-sm-9 form-control"
              id="title"
              v-model="scorelist.title"
            />
          </div>
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label"
              >アーティスト</label
            >
            <input
              type="text"
              class="col-sm-9 form-control"
              id="artist"
              v-model="scorelist.artist"
            />
          </div>
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">作曲者</label>
            <input
              type="text"
              class="col-sm-9 form-control"
              id="composer"
              v-model="scorelist.composer"
            />
          </div>
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">編曲者</label>
            <input
              type="text"
              class="col-sm-9 form-control"
              id="arranger"
              v-model="scorelist.arranger"
            />
          </div>
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">出版社</label>
            <input
              type="text"
              class="col-sm-9 form-control"
              id="publisher"
              v-model="scorelist.publisher"
            />
          </div>
          <button type="submit" class="btn btn-primary">登録</button>
        </form>
      </div>
    </div>
  </div>
</template>
