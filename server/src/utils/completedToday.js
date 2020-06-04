module.exports = function completedToday(today, prev){
  const todayDate = new Date(today);
  const todayDay = today.getDate()
  const prevDate = new Date(prev);
  const prevDay = prevDate.getDate()
  console.log(todayDate)
  console.log(prevDate)
  if (Math.abs(todayDay - prevDay) > 0 && (todayDate-prevDate)/(1000*3600*24) > 0) {
    return false
  } else {
    return true;
  }
}
