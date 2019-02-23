function loop(times, con, doCon, toDo){
    while(con(times)){
      toDo(times);
      times = doCon(times);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1