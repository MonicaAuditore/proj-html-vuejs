<script>
export default {
  name: "AppBlog",
  data() {
    return {
      posts: [
        {
          img: "startup-business-people-and-strategy-board-PAJ3P9K-1390x1042",
          data: "july 4, 2019",
          autore: "by paul",
          titolo: "Canadian Consulting Firm acquired by UK Giant",
          desc: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a...",
        },

        {
          img: "business-people-working-together-on-project-and-5FHSKBL-1390",
          data: "july 4, 2019",
          autore: "by paul",
          titolo: "Canadian Consulting Firm acquired by UK Giant",
          desc: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a...",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="blog" class="mainBlog">
    <div class="containerOne">
      <div class="titleSmall">
        <div class="line"></div>
        <div class="titleSmallText">
          <h6>BLOG</h6>
        </div>
      </div>
      <div class="blogTitleButton">
        <h2>THE RECENT NEWS YOU MUST READ IT</h2>
        <div>
          <button><h6>VIEW ALL</h6></button>
        </div>
      </div>
      <div class="blogPosts">
        <div class="post" v-for="post in posts">
          <img :src="'src/images/' + post.img + '.jpg'" />

          <div class="postContent">
            <div class="postContentInfo">
              <span class="data">{{ post.data }}</span>
              <span class="autore">{{ post.autore }}</span>
              <h3>{{ post.titolo }}</h3>
              <p>{{ post.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
