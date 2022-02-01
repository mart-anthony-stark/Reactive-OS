export const handleDrag = (mX, mY, el) => {
  let styles = window.getComputedStyle(el);
  let left = parseInt(styles.left);
  let top = parseInt(styles.top);

  el.style.top = `${top + mY}px`;
  el.style.left = `${left + mX}px`;
};
