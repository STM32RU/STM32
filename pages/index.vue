<template>
  <div class="page-index">
    <section class="home-section">
      <div class="intro">
        <div class="logo">
          <Logo size="124" />
        </div>
        <div class="slogan">
          Сборник полезных материалов
          <br />и советов по STM32
        </div>
        <div class="actions">
          <a class="button" style="margin-right: 10px" href="./docs/index.md">Читать!</a>
          <a
            class="button is-secondary"
            href="https://t.me/stm32std"
            target="_blank"
          >Чат</a>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Logo from '../src/components/Logo.vue'

export const attributes = {
  layout: 'index'
}

export default {
  components: {
    Logo,
  }
}
</script>

<style scoped lang="scss">
.page-index {
  color: var(--text-dark-color);
}

.home-section {
  padding: 60px 0;

  &:not(:first-child) {
    border-top: 1px solid var(--border-color);
  }
}

.intro {
  max-width: 70%;
  text-align: center;
  margin: 20px auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
}

.logo {
  text-align: center;
  margin-bottom: 30px;
}

.slogan {
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.actions {
  margin-top: 60px;
}
</style>
