<script>
export default {
  name: "AppBlog",
  data() {
    return {
      posts: [
        {
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
  <div class="mainBlog">
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
          <div class="postImage">
            <img
              src="../images/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg"
            />
          </div>
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

<style lang="scss" scoped>
.mainBlog {
  padding: 100px 0px 270px 0px;
}

.blogTitleButton {
  display: flex;
  justify-content: space-between;
}

.post {
  width: 50%;
  height: 500px;
  position: relative;
}

.postImage {
  width: 100%;
  height: 100%;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.postContent {
  position: absolute;
  background-color: #fff;
  width: 80%;
  right: 0;
  top: 65%;
  padding: 53px 72px;

  & h3 {
    padding: 20px 0px;
  }
}

.data {
  padding-right: 10px;
}

.autore,
.data {
  color: red;
}

.postContentInfo {
  width: 80%;
}
</style>
