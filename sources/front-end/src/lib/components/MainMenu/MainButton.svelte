<style>
  label {
    width: 100%;
    height: 100%;
    justify-self: center;
    align-self: center;

    cursor: pointer;

    background-color: hsl(205deg 63% 63% / 44%);
    transition: background-color 0.5s var(--transition-timing-function) 0s;
    border-radius: max(0.25vw, 0.25vh);
  }

  /* label > input[type='checkbox'] {
    display: none !important;
  } */

  label:hover {
    background-color: hsl(205deg 63% 63%);
    transition: background-color 0.75s var(--transition-timing-function) 0s;
  }
</style>

<label for='main-button-checkbox'>
  <input id='main-button-checkbox' type='checkbox' />
</label>