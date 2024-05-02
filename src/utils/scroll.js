export function scrollTo(x = 0, y = 69) {
  return window.scroll(x, y);
}

export function scrollTarget(target) {
  try {
    const defaultElementToView = document.getElementById(
      target ? target : "services"
    );
    defaultElementToView.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } catch (error) {
    alert("Target not found");
    console.log(error.message);
  }
}
