//如果没有配置，跳转到配置页面
let setting=localStorage.getItem('start_time');
if (setting===null) {
  window.location.replace("setting.html");
}
//处理时间
else {
  let start_time = localStorage.getItem('start_time').split('-');
  let end_time = localStorage.getItem('end_time').split('-');
  let now_time = String(new Date().getMonth()+1)+'-'+String(new Date().getDate());
  var year = parseInt(new Date().getFullYear());
  let month_text=document.getElementById('month-text');
  let day_text=document.getElementById('day-text');
  let num_day = document.getElementById('num-day');
  end_time=String(end_time[1])+'-'+String(end_time[2]);
  if ((parseInt(localStorage.getItem('end_time').split('-')[0]-year))===0) {
    num_day.innerText=MonthToDay(year,now_time,end_time);
    month_text.innerText=dayToMonth(MonthToDay(year,now_time,end_time))[0];
    day_text.innerText=dayToMonth(MonthToDay(year,now_time,end_time))[1];
  }else{
    let startYear=start_time[0];
    let endYear=parseInt(localStorage.getItem('end_time').split('-')[0]);
    let numYear=parseInt(endYear-startYear);
    if(numYear===1){
      const firstday=MonthToDay(year,now_time,'12-31');
      var lastday=MonthToDay(year+1,'01-01',end_time);
      var numday=firstday+lastday;
      month_text.innerText=dayToMonth(numday)[0];
      day_text.innerText=dayToMonth(numday)[1];
      num_day.innerText=numday;
    }
    //待更新代码
    else{
      var days=0;
      for (var i = 0; i < numYear-1; i++) {
        
      }
    }
  }
  
}

//月份转天
function MonthToDay(year,start, end) {
  var start2 = start.split('-');
  var end2 = end.split('-');
  var day = 0;
  if(start2[0]===end2[0]){
    return end2[1]-start2[1]+1;
  }
  for (var i = parseInt(start2[0]); i < parseInt(end2[0])+1; i++) {
    
    if(i===parseInt(end2[0]) && start2[0]!==end2[0]){
      day+=parseInt(end2[1]);
    }
    else{
      var days1 = daysInMonth(year,i);
      day+=days1;
    };
  }
  day-=parseInt(start2[1]);
  //day-=parseInt(end2[1]);
  //day = day - (parseInt(start2[1]) + parseInt(end2[1]));
  return day;
}

//根据月份判断指定月有多少天
function daysInMonth(year, month) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month-1];
}

//闰年判断
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//天转月
function dayToMonth(day) {
  var month = month>10?parseInt(day/30):'0'+parseInt(day/30);
  var yuday = day%30>10?day%30:'0'+parseInt(day%30);
  
  return [month,yuday];
} 

function restart(){
  localStorage.clear();
  window.location.reload();
}
console.log(dayToMonth(137));
console.log(MonthToDay(2023,'8-1','9-15'));