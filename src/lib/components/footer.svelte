<script>
  import david from "../../../public/img/david.png";
  import kenni from "../../../public/img/kenni.png";

  import github from "../../../public/img/github-mark.png";
  import linkedin from "../../../public/img/linkedin.png";
</script>

<footer class="bg-2">
  <div class="element">
    <h2>Created by</h2>
    <div class="card">
      <img src={kenni} alt="team" />
      <div class="text">
        <p><strong>Kenni Kollemorten </strong></p>
        <p>Senior developer</p>
      </div>
      <div class="links">
        <a target="blank" href="https://github.com/kenn7575">
          <img src={github} alt="github" />
        </a>
        <a
          target="blank"
          href="https://linkedin.com/in/kenni-kollemorten
          
          "
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>

    <div class="card">
      <img src={david} alt="team" />
      <div class="text">
        <p><strong>David Sørensen</strong></p>
        <p>Junior developer</p>
      </div>
      <div class="links">
        <a target="blank" href="https://github.com/davidsorensenn">
          <img src={github} alt="github" />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/david-s%C3%B8rensen-424b67271/"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  </div>

  <div class="element">
    <div class="text github-group">
      <h2>Visit this project on github.</h2>
      <p class="github">
        There you can see the code and create issues if you find any bugs.
      </p>

      <a
        class="small"
        target="blank"
        href="https://github.com/kenn7575/The-cloud-cast"
      >
        <img src={github} alt="github" />
      </a>
    </div>
  </div>
  <div class="arr">
    <hr />
    <p>© The cloud cast. All rights reserved.</p>
    <p>Licensed under the Apache License, Version 2.0</p>
  </div>
</footer>
<div class="spacer" />

<style>
  .spacer {
    height: 2rem;
  }
  hr {
    margin: 2rem 0;
  }
  .arr {
    width: 100%;

    text-align: center;
  }
  .small {
    width: fit-content;
  }
  footer {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    border-radius: 25px;
    flex-wrap: wrap;
  }
  .center {
    text-align: center;
    width: 100%;
  }
  .element {
    margin-top: 2rem;
    min-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    width: 50%;
  }
  .github-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  p.github {
    font-size: 1rem;
    margin: 0.5rem 0;
    max-width: 600px;
  }

  p,
  h2,
  strong {
    margin: 0;
  }
  p {
    font-weight: 300;
  }
  h2 {
    font-size: 1.15rem;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: #ddd 2px solid;
  }
</style>
