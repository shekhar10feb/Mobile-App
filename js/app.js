const container = document.querySelector('.container');

const teas = [
    {
        name: 'Black Tea', 
        image: 'photos/black_tea.JPG'
    },
    {
        name: 'Green Tea',
        image: 'photos/green_tea.jpg'
    },
    {
        name: 'Herbal Tea',
        image: 'photos/herbal_tea.webp'
    },
    {
        name: 'Oolong Tea',
        image: 'photos/Oolong_Tea.jpg'
    },
    {
        name: 'Red Tea',
        image: 'photos/Red_Tea.jpg'
    },
    {
        name: 'Yellow Tea',
        image: 'photos/yellowtea.jpg'
    }
];

const showTeas = () => {
    let output = '';

    teas.forEach(
        ({name, image}) => {
            output += `
              <div class='card>
                 <img class='card--avatar' src=${image} />
                 <h1 class='card--title'>${name}</h1>
                 <a class='card--link' href='#'>Taste</a>
              </div>
            `}
    )
    
    container.innerHTML = output;
}

document.addEventListener('DOMContentLoaded', showTeas);

