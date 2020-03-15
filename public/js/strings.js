
const initUpdatedTime = () => {
  const updatedTime = "15.3.2020, 14:20";
  if (window.location.pathname.includes('embed')) {
    document.getElementById("last-updated-time-embed").textContent = updatedTime;
  } else {
    document.getElementById("last-updated-time").textContent = updatedTime;
  }


};

initUpdatedTime();
