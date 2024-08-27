// https://blog.adam-marsden.co.uk/better-github-labels-f1360b43e0a7

[
  {
    name: "Type: Help Needed",
    color: "5319e7",
  },
  {
    name: "Priority: Critical",
    color: "ff2222",
  },
  {
    name: "Priority: High",
    color: "FF7922",
  },
  {
    name: "Priority: Low",
    color: "c2e0c6",
  },
  {
    name: "Priority: Medium",
    color: "fbca04",
  },
  {
    name: "Status: Complete",
    color: "7ED321",
  },
  {
    name: "Status: Confirmed",
    color: "0e8a16",
  },
  {
    name: "Status: Feedback Needed",
    color: "006b75",
  },
  {
    name: "Status: In Progress",
    color: "FC8264",
  },
  {
    name: "Status: On Hold",
    color: "BABABA",
  },
  {
    name: "Status: Review Needed",
    color: "EAE435",
  },
  {
    name: "Type: Bug",
    color: "ff2222",
  },
  {
    name: "Type: Enhancement",
    color: "1d76db",
  },
  {
    name: "Type: Feature",
    color: "6DFF6D",
  },
  {
    name: "Type: Idea",
    color: "6DE6FF",
  },
  {
    name: "Type: Question",
    color: "FF6DD9",
  },
  {
    name: "For: App",
    color: "250F8A",
  },
  {
    name: "For: Backend",
    color: "6864C4",
  },
  {
    name: "For: Frontend",
    color: "89B67F",
  },
  {
    name: "For: Design",
    color: "64F162",
  },
  {
    name: "For: Documentation",
    color: "D533D4",
  },
  {
    name: "For: Marketing",
    color: "AD11E7",
  },
  {
    name: "For: Research",
    color: "F9447C",
  },
  {
    name: "For: Security",
    color: "5DB0A5",
  },
  {
    name: "For: Testing",
    color: "C5C405",
  },
  {
    name: "For: Translation",
    color: "1AC66D",
  },
  {
    name: "For: UX",
    color: "94ADBD",
  },
  {
    name: "For: Other",
    color: "C3A326",
  },
  {
    name: "Priority: Emergency",
    color: "B60205",
  },
  {
    name: "Status: Blocked",
    color: "2F5ABE",
  },
  {
    name: "Status: Duplicate",
    color: "952817",
  },
  {
    name: "Status: Invalid",
    color: "5A27F1",
  },
  {
    name: "Status: Wontfix",
    color: "9B0380",
  },
  {
    name: "Type: Maintenance",
    color: "14D7CD",
  },
  {
    name: "Type: Performance",
    color: "1DB1D3",
  },
  {
    name: "Type: Refactor",
    color: "65E412",
  },
].forEach(function (label) {
  addLabel(label);
});

function updateLabel(label) {
  var flag = false;
  [].slice
    .call(document.querySelectorAll(".labels-list-item"))
    .forEach(function (element) {
      if (
        element.querySelector(".label-link").textContent.trim() === label.name
      ) {
        flag = true;
        element.querySelector(".js-edit-label").click();
        element.querySelector(".js-new-label-name-input").value = label.name;
        element.querySelector(".js-new-label-color-input").value =
          "#" + label.color;
        element.querySelector(".js-edit-label-cancel ~ .btn-primary").click();
      }
    });
  return flag;
}

function addNewLabel(label) {
  document.querySelector(".js-new-label-name-input").value = label.name;
  document.querySelector(".js-new-label-color-input").value = "#" + label.color;
  document.querySelector(".js-details-target ~ .btn-primary").disabled = false;
  document.querySelector(".js-details-target ~ .btn-primary").click();
}

function addLabel(label) {
  if (!updateLabel(label)) addNewLabel(label);
}
