const Header = () => {
  const view = `  
    <header class="Header-main">
      <div class="Header-logo">
          <a href="/"><img src="https://i.imgur.com/7utDxm8.png" alt="Rick and Morty"></a>
      </div>
      <nav class="Header-nav">
        <a href="#/about/" class="nav-element">About</a>
          <button class="switch" id="switch">
            <span><i class="fas fa-sun"></i></span>
            <span><i class="fas fa-moon"></i></span>
          </button>
      </nav>
    </header>`;
  return view;
};
export default Header;