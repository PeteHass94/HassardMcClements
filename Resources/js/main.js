function date_time(CurrentDay, CurrentHour)
{
        var day_hour = [];
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        var superscript=" ";
        if(d>3 && d<21) { superscript="th";}
        switch (d % 10) {
            case 1:  superscript="st";
                      break;
            case 2:  superscript="nd";
                      break;
            case 3:  superscript="rd";
                      break;
            default: superscript="th";
        }
        d= d+superscript;
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = days[day]+' '+months[month]+' '+d+' '+year+', '+h+':'+m+':'+s;
        day_hour.push(days[day]);
        day_hour.push(h);
        document.getElementById('date_time').innerHTML = result;
        setTimeout('date_time("'+CurrentDay+','+CurrentHour+'");','1000');
        return day_hour;
}

function open_closed(day_hour)
{
        date = new Date;
        var day_hour = [date.getDay(),date.getHours()];
        openTimes = new Array('9', '10', '11', '12', '14', '15', '16');
        var message = "Office is ";
        var note = "Closed";
        var openColor = '#FF4545';
        for (var i = 0; i<7; i++) {
          if (day_hour[0]>0 && day_hour[0] < 6)
          {
            if (day_hour[1] == openTimes[i])
            {
              openColor = '#3CA619';
              note = "Open";
              break;
            }
            else if (day_hour[1] == '13' )  {
              openColor = '#FCA7A7';
              note = "Closed for Lunch";
              break;
            }
            else {
            }
          }
        }
        fullMessage = message + note;
        document.getElementById('open_closed').innerHTML = fullMessage;
        setTimeout('open_closed("'+day_hour+'");','1000');
        document.getElementById('open_closed').style.color = openColor;
        return true;
}
var isActive = false;
