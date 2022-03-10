


let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

fetch('https://isro.vercel.app/api/customer_satellites')
.then((response)=>{
    return response.json()
})
.then(data =>{
    data.customer_satellites.forEach(item=>{
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = 
        `
          <h2 class = 'card-title'>${item.id}</h2>
          <p class = 'country'><span>Country : </span>${item.country}</p>
          <p class = 'date'><span>Date : </span> ${item.launch_date}</p>
          <p class = 'launcher'><span>Launcher : </span>${item.launcher}</p>
          <p class = 'mass'><span>Mass : </span>${item.mass}</p>
          
        `
        container.appendChild(card);
    })

})
.catch(error =>console.log(error))


