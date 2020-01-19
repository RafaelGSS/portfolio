
<template lang="pug">
.main
  .bg
  vue-particles.particles(
    v-if="!isMobile"
    :clickEffect="false"
    color="#444"
    :hoverEffect="true"
    hoverMode="grab"
    :lineOpacity="0.5"
    linesColor="#666"
    :linesDistance="200"
    :moveSpeed="4"
    :particleOpacity="0.5"
    :particleSize="4"
    :particlesNumber="20"
  )
  .info
    img.photo(src="../assets/photo.jpg")
    h1 {{ name }}
    h2
      span(v-for="(title, index) in titles")
        span(v-if="index") &nbsp;&middot;&nbsp;
        span(v-if="title.link")
          a(:href="title.link", target="blank") {{ title.text }}
        span(v-else) {{ title.text }}
    ul
      li(v-for="btn in btns")
        a(:href="btn.url", target="_blank"): .wrapper
          span(:title="btn.title")
            fa(:icon="btn.icon")
  .footer {{ version }}
</template>

<script>
export default {
  data () {
    return {
      name: 'Rafael Gonzaga',
      titles: [
        {
          text: 'Software Engineer'
        },
        {
          text: 'Back-end'
        },
        {
          text: '@quero-edu',
          link: 'https://github.com/quero-edu'
        }
      ],
      version: process.env.VERSION,
      btns: [
        {
          title: 'E-mail',
          icon: ['fas', 'envelope'],
          url: 'mailto:rafael.nunu@hotmail.com'
        },
        {
          title: 'GitHub',
          icon: ['fab', 'github'],
          url: 'https://github.com/rafaelgss'
        },
        {
          title: 'Linkedin',
          icon: ['fab', 'linkedin'],
          url: 'http://www.linkedin.com/in/rafaelgss'
        },
        {
          title: 'Twitter',
          icon: ['fab', 'twitter'],
          url: 'https://www.twitter.com/_rafaelgss'
        },
        {
          title: 'Medium',
          icon: ['fab', 'medium'],
          url: 'https://medium.com/@rafaelgss'
        },
        {
          title: 'SlideShare',
          icon: ['fab', 'slideshare'],
          url: 'https://pt.slideshare.net/RafaelSilva939'
        },
        {
          title: 'Personal Blog - RafaelGSS',
          icon: ['fas', 'blog'],
          url: 'https://blog.rafaelgss.com.br/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Hind';
  font-style: normal;
  font-display: block;
  font-weight: 400;
  src:
    url('../assets/fonts/hind-latin-400.woff2') format('woff2'),
    url('../assets/fonts/hind-latin-400.woff') format('woff');
}

@font-face {
  font-family: 'Hind';
  font-style: normal;
  font-display: block;
  font-weight: 500;
  src:
    url('../assets/fonts/hind-latin-500.woff2') format('woff2'),
    url('../assets/fonts/hind-latin-500.woff') format('woff');
}

html, body, .main {
  height: 100%;
}

body {
  background-color: #000;
  cursor: default;
  font-family: Hind, sans-serif;
  user-select: none;
  overflow: hidden;
}

.main {
  display: grid;
  overflow: auto;
}

.bg {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;

  &:before, &:after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    background-color: #333;
    background-image: url(../assets/bg1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%);
  }

  &:after {
    background-image: radial-gradient(ellipse at center,#327bab8f 0,#000000 70%,#000 100%);
    // background-image: radial-gradient(
    //   ellipse at center,
    //   rgba(black, .75) 0%,
    //   rgba(black, 1) 70%,
    //   rgba(black, 1) 100%
    // );
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.info {
  margin: auto;
  text-align: center;
  z-index: 2;

  .photo {
    $size: 200px;

    border-radius: $size;
    border: 5px solid $color1;
    box-shadow: 0 0 20px 0 black;
    height: $size;
    margin: 30px 0;
    width: $size;
  }

  h1 {
    color: $color1;
    font-size: 240%;
    font-weight: 400;
    margin: 0;
    text-shadow: 0 0 5px black;
  }

  h2 {
    color: $color2;
    font-size: 150%;
    font-weight: 400;
    margin: 5px 0 30px;
    text-shadow: 0 0 5px black;

    a {
      color: $color2;
      text-decoration: none;

      &:hover {
        color: lighten($color2, 20%);
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: inline-block;

      a {
        $size: 64px;

        display: block;
        margin: 0;

        .wrapper {
          border-radius: $size;
          border: 4px solid transparentize($color1, .3);
          box-shadow: 0 0 15px 0 black;
          color: $color1;
          display: block;
          font-size: $size * .5;
          height: $size;
          line-height: 2.25em;
          margin: 10px;
          opacity: .9;
          overflow: hidden;
          text-align: center;
          text-shadow: 0 0 5px black;
          transition: all linear .2s;
          width: $size;
        }

        &:hover .wrapper {
          background-color: transparentize($color1, .8);
          border-color: $color1;
          color: $color1;
          opacity: 1;
          transform: scale(1.1)
        }
      }
    }
  }
}

.footer {
  bottom: 0;
  color: $color1;
  font-size: 80%;
  margin: 5px 0;
  opacity: 0.1;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 10;
}

.particles {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}
</style>
