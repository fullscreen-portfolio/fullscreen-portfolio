<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;

    width: 100%;
    height: 100%;

    /* font-size: max(3vw, 3vh); */
    color: hsl(25deg 100% 50% / 100%);
    filter: grayscale(1.0);

    cursor: pointer;
    transition: all 0.5s var(--transition-timing-function) 0s;
  }

  div:hover {
    filter: grayscale(0.25);
    transition: all var(--transition-duration) var(--transition-timing-function) 0s;
  }

  div:active {
    filter: grayscale(0.0);
    transition: all var(--transition-duration) var(--transition-timing-function) 0s;
  }
</style>

<div>
  <slot></slot>
</div>