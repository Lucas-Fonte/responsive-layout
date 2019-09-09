// function selectedArea(){
//   let title = document.getElementById('title').value;
//   title = 'events';
//  //calendar.rerenderEvents();     
//   return title;
// }


document.addEventListener('DOMContentLoaded', function() {
  let Calendar = FullCalendar.Calendar;
  let Draggable = FullCalendarInteraction.Draggable;

  let containerEl = document.getElementById('external-events');
  let calendarEl = document.getElementById('calendar');

  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText
      };
    }
  });


  let calendar = new Calendar(calendarEl, {
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
    weekends: false,
    plugins: [ 'interaction', 'dayGrid', 'timeGrid' , 'resourceTimeline'],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    dateClick: function(info) {
      alert('clicked ' + info.dateStr);
    },
    events: {  
      url: '.././Particular/load.php',
      method: 'GET',
      extraParams:{area: "events"},
      textColor: 'white',
    },

    selectable: true,
    select: function(info) {
      alert('selected ' + info.startStr + ' to ' + info.endStr);
    }, 
    editable: true,
    droppable: true, 
    drop: function(info) {

    }
  });

  calendar.render();
});