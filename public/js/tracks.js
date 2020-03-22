var fullTrackList;
var selectedStart;
var selectedEnd;

const createList = (tracksList, initial) => {
  let strHtml = '<div>';
  let startDate;
  let endDate;
  let startTime;
  let endTime;
  let startDateString;
  let endDateString;
  let month1;
  let month2;

  tracksList.reverse().forEach(track => {
      startDate = new Date(track.t_start);
      endDate = new Date(track.t_end);

      startTime = ("0" + startDate.getHours()).slice(-2) + ":" + ("0" + startDate.getMinutes()).slice(-2);
      endTime = ("0" + endDate.getHours()).slice(-2) + ":" + ("0" + endDate.getMinutes()).slice(-2);

      month1 = startDate.getMonth() + 1;
      month2 = endDate.getMonth() + 1;

      startDateString = `${startDate.getDate()}.${month1}.${startDate.getFullYear()}`;
      endDateString = `${endDate.getDate()}.${month2}.${endDate.getFullYear()}`;

      if (initial) {
          track.startTime = startTime;
          track.endTime = endTime;
          track.startDate = startDate;
          track.endDate = endDate;
          track.startDateString = startDateString;
          track.endDateString = endDateString;
      }


    let card = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                     <div class="card-title-box">
                      <h5 class="card-title"> ${track.label}</h5>
                      <div class="patient-number">חולה מס': ${track.pat_num}</div>
                     </div>
                      <div class="card-contant-box">
                        <div class="card-text">
                           <div class="flight-detailes">
                           זמן התחלה: ${startDateString}
                           </div>
                        </div>
                      </div>
                      <div class="card-contant-box">
                        <div class="card-text">
                           <div class="flight-detailes">
                           שעת התחלה: ${startTime}
                           </div>
                        </div>
                      </div>
                      <div class="card-contant-box">
                        <div class="card-text">
                           <div class="flight-detailes">
                            זמן סיום: ${endDateString}
                           </div>
                        </div>
                      </div>
                      <div class="card-contant-box">
                        <div class="card-text">
                           <div class="flight-detailes">
                           שעת סיום: ${endTime}
                           </div>
                        </div>
                      </div>


                      `;
    if (track.link) {
      card += `<a href="${track.link}" class="card-link"> מידע נוסף מאתר משרד הבריאות</a>`;
    }

    card += `</div>
                  </div>`;
    strHtml += card;
  });
  strHtml += '</div>';

  if (initial) {
      fullTrackList = tracksList;
  }
  return strHtml;
};

// const handleSearchMobile = () => {
//   const input = document.getElementById('search-input');
//   const value = input.value.toUpperCase();
//   let filterdFlights = filterFlights(flights, value);
//   renderList(filterdFlights);
// }

// eslint-disable-next-line no-unused-vars
const handleTracksSearchDesktop = () => {
  // Declare variables
  const input = document.getElementById('search-input-dekstop');
  const value = input.value.toUpperCase();
  let filteredTracks = filterTracks(fullTrackList, value);
  fillTable(filteredTracks, false);
};

const filterTracks = (trackList, value) => {
  value = value.trim();
  console.log(value);
  let filterdTracks = trackList.filter((track) => {
      let rangeMatch = false;
      if (selectedStart !== undefined && selectedEnd !== undefined) {
          rangeMatch = doDateRangesIntersect(selectedStart, selectedEnd, track.startDate, track.endDate);
      }

     if (value === "" || value === undefined) {
         return rangeMatch;
     }

    return (track.label.toString().includes(value) ||
      (track.startTime && track.startTime.toString().includes(value)) ||
      (track.endTime && track.endTime.toString().includes(value)) ||
      (track.pat_num && track.pat_num.toString().includes(value)) ||
      (track.startDateString && track.startDateString.toString().includes(value)) ||
      (track.endDateString && track.endDateString.toString().includes(value))) && rangeMatch;
  });
  return filterdTracks;
};

function doDateRangesIntersect(startDate1, endDate1, startDate2, endDate2) {
    let minDateStart, minDateEnd, maxDateStart, maxDateEnd;
    if (startDate1.getTime() > startDate2.getTime()) {
        minDateStart = startDate2;
        minDateEnd = endDate2;
        maxDateStart = startDate1;
        maxDateEnd = endDate1;
    } else {
        minDateStart = startDate1;
        minDateEnd = endDate1;
        maxDateStart = startDate2;
        maxDateEnd = endDate2;
    }

    return (minDateEnd.getTime() > maxDateStart.getTime());
}

function isDateInRange(date, start, end) {
    return doDateRangesIntersect(date, date, start, end);
}

function inputParseDate(dateString, timeString) {
    let dateFields = dateString.split("-");
    let timeFields = timeString.split(":");

    let year = parseInt(dateFields[0]);
    let month = parseInt(dateFields[1]);
    let day = parseInt(dateFields[2]);

    let hour = parseInt(timeFields[0]);
    let minute = parseInt(timeFields[1]);

    return new Date(year, month - 1, day, hour, minute, 0, 0);
}

function parseDateInputs() {
    let startDateString = $("#startDate").val();
    let endDateString = $("#endDate").val();
    let startTimeString = $("#startTime").val();
    let endTimeString = $("#endTime").val();

    if (startDateString === "") {
        return;
    }

    if (startTimeString === "") {
        startTimeString = "00:00";
        endTimeString = "23:59";
    }

    if (endDateString === "") {
        endDateString = startDateString;
    }

    if (endTimeString === "") {
        endTimeString = "23:59";
    }

    selectedStart = inputParseDate(startDateString, startTimeString);
    selectedEnd = inputParseDate(endDateString, endTimeString);
    handleTracksSearchDesktop();
    return;
}

function fillTable(data, initial) {
    $("#tracks-table").html(createList(data, initial));
}
