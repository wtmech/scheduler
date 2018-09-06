//loop to increment the time and push results in array
const setMovieTimes = (length, st, arr, et) => {
  const ap = ['AM', 'PM'];
  for (let i = 0; st < et; i++) {
    let hh = Math.floor(st / 60); // getting hours of day in 0-24 format
    let mm = Math.floor((st % 60) / 5) * 5; // getting minutes of the hour in 0-55 format
    arr[i] = (((hh === 12) ? 12 : hh % 12)) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
    st = st + length + 35;
  }
}

export default setMovieTimes;
