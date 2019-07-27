<template>
  <div class="page">
    <div id="hero">
      <div class="inner">
        <div class="top">
          <img class="hero-logo" src="../public/hero.jpg" alt="logo"/>
        </div>
        <div class="center">
          <h1>
            前端技术文档
          </h1>
          <p>
            <a class="button white" href="/guide/">快速起步</a>
            <a class="button gary has-icon" href="https://github.com/wangbin3162/bin"
               target="_blank">
              <svg aria-labelledby="simpleicons-github-dark-icon" lang="" role="img" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon" lang="en">GitHub
                Dark icon</title>
                <path fill="#7F8C8D"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              GITHUB</a>
          </p>
        </div>
      </div>
    </div>
    <div id="highlights">
      <div class="inner">
        <div class="point">
          <h2>开源库</h2>
          <p>个人根据工作需求抽象封装的vue开源库bin-ui，以及后台管理系统vue-admin精简版</p>
        </div>
        <div class="point">
          <h2>持续更新</h2>
          <p>本主页收录了工作生活中的常用文档及外链工具文档，个人开源库也会持续更新</p>
        </div>
        <div class="point">
          <h2>技术栈</h2>
          <p>技术栈主要以前端相关技术为主，vue全家桶开发，自己的开源库会持续维护</p>
        </div>

      </div>
    </div>
    <div id="footer">
      <p> MIT Licensed | Copyright © 2019-present wang bin</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Layout'
  }
</script>

<style scoped lang="stylus">
  #hero
    padding: 40px 0 30px
    background-color: #fff
    .inner
      max-width: 1260px
      margin: 0 auto
      .top
        text-align: center
        .hero-logo
          max-height: 260px;
          border-radius: 15px
          box-shadow: 0 0 5px #d5d5d5
      .center
        text-align: center
        margin-top: 20px
        h1
          margin: 0
          font-size: 2.6rem
          line-height: 1.3
          color: #6a8bad
          font-weight: normal
        a.button
          padding: 0.75em 2em
          border-radius: 2em
          display: inline-block
          color: #fff
          background-color: #409eff
          transition: all 0.15s ease
          box-sizing: border-box
          border: 1px solid #409eff
          margin: 1em 0
          font-size: 1.05em
          font-weight: 600
          letter-spacing: 0.1em
          min-width: 8em
          text-align: center
          &.white
            background-color: #fff
            color: #409eff
            margin-right: 15px
          &.gary
            background-color: #f6f6f6
            color: #7f8c8d
            border-color: #409eff
          &.has-icon
            position: relative
            text-indent: 1.4em
            > svg
              position: absolute
              left: 0.6em
              top: 0.6em
              width: 2em
  #highlights
    background-color: #fff
    .inner
      max-width: 900px
      margin: 0 auto
      text-align: center
      .point
        width: 33%
        display: inline-block
        vertical-align: top
        box-sizing: border-box
        padding: 0 2em
        h2
          color: #409eff
          font-size: 1.5em
          font-weight: 400
          margin: 0
          padding: 0.5em 0
          border: none
        p
          color: #7f8c8d
  #footer
    padding: 50px 0 10px
    color: #2c3e50
    text-align: center
</style>
