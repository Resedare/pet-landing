document.addEventListener("DOMContentLoaded", function () {
  const headerFigure = document.querySelector(".header__figure");
  const headerInner = document.querySelector(".header__inner");
  setTimeout(() => {
    headerFigure.classList.add("slow-right-show");
    headerInner.classList.add("slow-left-show");
  }, 200);

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const elementHeight = rect.height;
    const elementWidth = rect.width;
    return (
      rect.top + elementHeight / 4 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left + elementWidth / 4 <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      rect.bottom - elementHeight / 4 >= 0 &&
      rect.right - elementWidth / 4 >= 0
    );
  }
  function isPartElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const elementHeight = rect.height;
    const elementWidth = rect.width;
    return (
      rect.top + elementHeight / 8 <
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left + elementWidth / 8 <
        (window.innerWidth || document.documentElement.clientWidth) &&
      rect.bottom - elementHeight / 8 > 0 &&
      rect.right - elementWidth / 8 > 0
    );
  }
  function handleScroll() {
    const featureList = document.querySelector(".features__list");
    const featureFigure = document.querySelector(".features__inner-figure");
    const subscriptionBlock = document.querySelector(".subscription");

    if (isElementInViewport(featureList)) {
      featureList.classList.add("slow-right-show");
    }

    if (isElementInViewport(featureFigure)) {
      featureFigure.classList.add("slow-left-show");
    }
    if (isPartElementInViewport(subscriptionBlock)) {
      subscriptionBlock.classList.add("slow-bottom-show");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const totalLoadedFiles = document.querySelector(
    ".stats__box-item-texts-amount"
  );
  let totalLoadedFilesCount = 1000000;
  let formattedNumber = totalLoadedFilesCount.toLocaleString("ru-RU");

  totalLoadedFiles.textContent = formattedNumber;
  let updateTotalLoadedFiles = setInterval(() => {
    totalLoadedFilesCount =
      totalLoadedFilesCount + parseInt(Math.random() * 10);
    let formattedNumber = totalLoadedFilesCount.toLocaleString("ru-RU");

    totalLoadedFiles.textContent = formattedNumber;
  }, 1000);
  updateTotalLoadedFiles();
});
