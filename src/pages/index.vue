<template>
  <div class="container">
    <h1>Docker Nuxt ボイラープレート</h1>
    <p>by 野田地区理大祭</p>
    <p>
      <a href="https://ja.nuxtjs.org/" class="btn" target="_blank" rel="noopener noreferrer">
        Nuxt.js 日本語ドキュメント
      </a>
    </p>
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead';

export default {
  head() {
    return makeHead('ボイラープレートトップページ', 'ボイラープレートトップページです。');
  }
}
</script>

<style lang="scss" scoped>
  .container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #333;
    max-width: 960px;
    margin: 0 auto;
    min-height: 100vh;
    padding: 0 1rem;
    box-shadow: 0 0 0.3rem rgba(#000, 0.25);
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btn {
    $nuxt-color: #42b883;
    $base-transition: 0.3s ease;
    display: inline-block;
    border: 1px solid $nuxt-color;
    padding: 0.5rem 2rem;
    color: $nuxt-color;
    text-decoration: none;
    transition: #{$base-transition} background, #{$base-transition} color, #{$base-transition} box-shadow;

    &:hover {
      background: $nuxt-color;
      color: #fff;
    }

    &:active {
      background: darken($nuxt-color, 7);
    }

    &:focus {
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba($nuxt-color, 0.5);
    }
  }
</style>
