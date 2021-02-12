<template>
  <ul class="nav">
    <li class="nav-item">
      <a href="/docs">Материалы</a>
    </li>
    <li class="nav-item">
      <a href="https://github.com/saberland/saber" target="_blank" class="github-link">
        <svg
          aria-hidden="true"
          role="img"
          class="telegram-link"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
        </svg>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.nav {
  list-style: none;
  margin: 0;
  font-size: 1rem;
  height: 100%;
  padding-left: 0;
  & a {
    color: var(--text-light-color);
    display: flex;
    height: 100%;
    align-items: center;
    line-height: 1.7;
    &:hover,
    &.router-link-exact-active {
      color: var(--theme-color);
    }
    &.router-link-exact-active {
      box-shadow: inset 0 -2px 0 var(--theme-color);
    }
  }
}
.nav-item {
  &:not(:first-child) {
    margin-left: 20px;
  }
  & svg {
    width: 26px;
    height: 26px;
  }
  & .telegram-link {
    color: #0088cc99;
    &:hover {
      color: #0088cc;
    }
  }
}
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--border-color);
    & a {
      &.router-link-exact-active {
        box-shadow: none;
      }
    }
  }
  .nav-item {
    height: 30px;
  }
  .nav-item:not(:first-child) {
    margin-left: 0;
  }
}
</style>