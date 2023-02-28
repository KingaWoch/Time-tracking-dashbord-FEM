let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const buttons = document.querySelectorAll(".time-btn");

const activateButton = (button) => {
  buttons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
};

const clearItems = () => {
  const items = document.querySelectorAll(".grid-item-bg");
  items.forEach((item) => item.remove());
};

const showCards = (clickedButton) => {
  clearItems();
  const page = document.querySelector(".page");

  const calcTimeframe = (option) => {
    if (option === "daily") {
      return "Yesterday";
    } else if (option === "weekly") {
      return "Last Week";
    } else if (option === "monthly") {
      return "Last Month";
    }
  };

  data.forEach((activity) => {
    const title = activity.title;
    const activityClass = title.toLowerCase().replace(" ", "-");
    const timeframe = activity.timeframes[clickedButton];
    const previousTimeFrame = calcTimeframe(clickedButton);
    const gridItemBg = document.createElement("div");
    gridItemBg.classList.add("grid-item-bg", activityClass);
    const addToPage = `
    <div class="grid-item">
        <div class="flex">
            <h2>${title}</h2>
            <button class="options">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fill-rule="evenodd"
                />
            </svg>
            </button>
        </div>
        <div class="flex">
            <span class="current-time">${timeframe.current}</span>
            <span class="previous-time">${previousTimeFrame} - ${timeframe.previous}hrs</span>
        </div>
    </div>
    `;
    gridItemBg.innerHTML = addToPage;
    page.append(gridItemBg);
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    activateButton(button);
    const clickedButton = button.dataset.option;
    showCards(clickedButton);
  });
});

buttons[1].click();
