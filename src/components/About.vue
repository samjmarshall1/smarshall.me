<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Sam
        <span class="text-primary">Marshall</span>
      </h1>
      <div class="subheading mb-5">
        192 Willis Street,Te Aro | Wellington | New Zealand | · (+64) 27 453-1173 ·
        <a
          href="mailto:samjmarshall1@live.com"
        >samjmarshall1@live.com</a>
      </div>
      <p
        class="lead mb-5"
      >I am a fresh faced Kiwi from the top of the South Island at start of his career in Performance Testing, With a passion for quality and problem solving.</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/samueljohnmarshall/" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://twitter.com/sjmrsh" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://www.facebook.com/samjohnmarshall" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'facebook']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
