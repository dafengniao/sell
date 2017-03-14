<template>
  <div class="loading" :class="{ show: show }" v-show="show">
    <transition>
      <svg class="spinner" width="68px" height="68px" viewBox="0 0 44 44">
        <circle class="path" fill="none" stroke-width="4" stroke-linecap="round" cx="22" cy="22" r="20"></circle>
      </svg>
    </transition>
    <p>努力加载中...</p>
  </div>
</template>

<script>
  export default {
    props: ['show']
  };
</script>

<style>
  .loading{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    background: #f5f5f5;
    left: 0;
    top: 0;
  }
  .loading p{
    color: #be8914;
    font-size: 14px;
    line-height: 0.64rem;
    width: 100%;
    text-align: center;
    position: fixed;
    left: 0;
    top: 50%;
    margin-top: -0.32rem;
  }
  .spinner {
    position: fixed;
    z-index: 999;
    transition: opacity .15s ease;
    animation: rotator 1.4s linear infinite;
    animation-play-state: paused;
    right: 50%;
    top: 50%;
    margin-right: -0.906667rem;
    margin-top: -1.973333rem;
  }
  .spinner.show{
    animation-play-state: running
  }

  .spinner.v-enter, .spinner.v-leave-active {
    opacity: 0;
  }
  .spinner.v-enter-active, .spinner.v-leave {
    opacity: 1;
  }

  @keyframes rotator {
    0% {
      transform: scale(0.5) rotate(0deg);
    }
    100% {
      transform: scale(0.5) rotate(270deg);
    }
  }

  .spinner .path {
    stroke: #be8914;
    stroke-dasharray: 126;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 126;
    }
    50% {
      stroke-dashoffset: (126/2) transform rotate(135deg);
    }
    100% {
      stroke-dashoffset: 126 transform rotate(450deg);
    }
  }

</style>
