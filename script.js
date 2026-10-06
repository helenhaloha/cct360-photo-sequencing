const sequenceButtons = document.querySelectorAll(".sequence-button");
const sequenceContainer = document.querySelector("#photo-sequence");
const storyTitle = document.querySelector("#story-title");

const photos = {
  1: "Image 1",
  2: "Image 2",
  3: "Image 3",
};

const stories = {
  a: {
    title: "Sequence A: A Normal Day",
    order: [1, 2, 3],
  },
  b: {
    title: "Sequence B: Something Changed",
    order: [3, 1, 2],
  },
};

function showSequence(sequenceName) {
  const selectedStory = stories[sequenceName];
  const storyParts = ["Beginning", "Middle", "End"];

  storyTitle.textContent = selectedStory.title;
  sequenceContainer.innerHTML = "";

  selectedStory.order.forEach((photoNumber, index) => {
    const card = document.createElement("article");
    card.className = "photo-card";
    card.innerHTML = `
      <div class="image-placeholder">${photos[photoNumber]}</div>
      <div>
        <h3>${storyParts[index]}</h3>
        <p>Story caption placeholder.</p>
      </div>
    `;
    sequenceContainer.appendChild(card);
  });

  sequenceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.sequence === sequenceName);
  });
}

sequenceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSequence(button.dataset.sequence);
  });
});

showSequence("a");
