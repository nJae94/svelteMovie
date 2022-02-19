<footer>
  <a href="https://github.com/nJae94/svelteMovie">GithubRepo</a>
  <p>
    @{new Date().getFullYear()}
    nJae94
  </p>
</footer>

<style lang="scss">
  footer {
    padding: 70px;
    text-align: center;

    a {
      text-decoration: none;
      color: $color--white-10;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>