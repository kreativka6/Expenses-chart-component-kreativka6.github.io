let datas = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

 
  let graph = document.querySelector('.graph');

  function work(){
for(let i = 0; i < datas.length; i++){

   let column = document.createElement('div');
   let value = document.createElement('div');
    let bubble = document.createElement('div');
   let dayColumn = document.createElement('div');
   let height = datas[i].amount;

   column.style.height = height + "px";
   column.classList.add('col');
    value.innerHTML = datas[i].day;
    value.classList.add('day');
    bubble.innerHTML = "$ " + height;
    bubble.classList.add('legend');
    dayColumn.appendChild(bubble); 
    dayColumn.appendChild(column);
    dayColumn.appendChild(value);
    graph.appendChild(dayColumn);


    column.addEventListener('mouseover', function(){
      if(bubble.style.visibility == "hidden"){
      bubble.style.visibility = "visible";
      } else{
        bubble.style.visibility = "hidden";
        
      }
    });
}
  };

  window.addEventListener("onload", work());


