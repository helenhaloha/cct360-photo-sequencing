const sequenceButtons = document.querySelectorAll(".sequence-button");
const sequenceContainer = document.querySelector("#photo-sequence");
const storyNumber = document.querySelector("#story-number");
const storyTitle = document.querySelector("#story-title");
const storySummary = document.querySelector("#story-summary");

const photos = {
  home: {
    src: "assets/boat-window.png",
    alt: "A red paper boat resting beside a rain-covered window",
  },
  street: {
    src: "assets/boat-street.png",
    alt: "A red paper boat floating through rainwater on a city street",
  },
  lake: {
    src: "assets/boat-lake.png",
    alt: "A red paper boat floating on a calm lake at sunrise",
  },
};

const stories = {
  a: {
    number: "Sequence A",
    title: "Out Into the World",
    summary:
      "A quiet paper boat leaves home and discovers a much bigger world.",
    steps: [
      {
        photo: "home",
        part: "Beginning",
        heading: "A Dream by the Window",
        caption:
          "On a rainy morning, a little red boat waits by the window and dreams of adventure.",
      },
      {
        photo: "street",
        part: "Middle",
        heading: "Into the Current",
        caption:
          "It slips into the rushing water and travels through the noisy city streets.",
      },
      {
        photo: "lake",
        part: "End",
        heading: "A Wider World",
        caption:
          "By sunrise, the tiny boat reaches the open lake and finds the world it imagined.",
      },
    ],
  },
  b: {
    number: "Sequence B",
    title: "The Journey Home",
    summary:
      "A lonely paper boat follows the current until it reaches a familiar place.",
    steps: [
      {
        photo: "lake",
        part: "Beginning",
        heading: "Alone at Sunrise",
        caption:
          "At sunrise, a small red boat drifts alone on a lake, far away from home.",
      },
      {
        photo: "street",
        part: "Middle",
        heading: "Following the Rain",
        caption:
          "The current carries it from the quiet water back through the busy city.",
      },
      {
        photo: "home",
        part: "End",
        heading: "Safe Again",
        caption:
          "At last, the boat rests beside a familiar window—safe at home again.",
      },
    ],
  },
};

function createPhotoCard(step) {
  const photo = photos[step.photo];
  const card = document.createElement("article");
  card.className = "photo-card";

  card.innerHTML = `
    <img src="${photo.src}" alt="${photo.alt}">
    <div class="photo-copy">
      <p class="step-label">${step.part}</p>
      <h3>${step.heading}</h3>
      <p>${step.caption}</p>
    </div>
  `;

  return card;
}

function showSequence(sequenceName) {
  const selectedStory = stories[sequenceName];

  storyNumber.textContent = selectedStory.number;
  storyTitle.textContent = selectedStory.title;
  storySummary.textContent = selectedStory.summary;
  sequenceContainer.innerHTML = "";

  selectedStory.steps.forEach((step) => {
    sequenceContainer.appendChild(createPhotoCard(step));
  });

  sequenceButtons.forEach((button) => {
    const isSelected = button.dataset.sequence === sequenceName;
    button.classList.toggle("active", isSelected);
    button.setAttribute("aria-pressed", isSelected);
  });
}

sequenceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSequence(button.dataset.sequence);
  });
});

showSequence("a");
