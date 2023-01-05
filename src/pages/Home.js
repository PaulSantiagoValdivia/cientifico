import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
  <div class= "Characters"> 
    ${characters.results.map(character => `
    
    <article class="Characters-item"> 
      <a href="#/${character.id}">
        <img src="${character.image}" alt="${character.name}">
        <h2 class="character-name">${character.name}</h2>
        </img>
      </a>
    </article>
    `).join('')}
  </div>
  `;
  return view;
};

export default Home;