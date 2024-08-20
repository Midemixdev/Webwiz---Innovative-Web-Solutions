// for flexbox gap for flexbox gap for flexbox gap
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// for sticky for sticy for sticky

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
obs.observe(sectionHeroEl);
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// // Remove nav-open class on page load
headerEl.classList.remove("nav-open");
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  const href = link.getAttribute("href");
  // Check if the link is internal (starts with #)
  if (href.startsWith("#")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Scroll to internal sections
      if (href !== "#") {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
      // Scroll to top
      else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Close mobile navigation
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    });
  }
  // Do nothing for external links (let them navigate normally)
  else if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("(http)") ||
    href.startsWith("(github)")
  ) {
    // No action needed, let the link navigate normally
  }
});
const video = document.querySelector(".video");

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
