class HeaderComponent extends HTMLElement {
    constructor() {
        super(); // Always call super first in the constructor
        const template = document.createElement('template');

        template.innerHTML = `
            <style>
                @import url('css/bootstrap.min.css');
                @import url('css/site.css');
            </style>
            <nav id="header" class="navbar navbar-default navbar-fixed-top">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#navbar-responsive-collapse" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand  col-lg-3" href="index.html">sebastian hohmann</a>
              </div>
              <div class="collapse navbar-collapse" id="navbar-responsive-collapse">
        
                <ul class="nav navbar-nav  col-lg-9">
                  <li><a class="xnavbar-link" href="https://ffcast.serv00.net/">financialforecast</a></li>
                  <li class="dropdown">
                    <a class="dropdown-toggle" id="drop3" role="button" data-toggle="dropdown" href="#">research<b
                        class="caret"></b></a>
                    <ul id="menu0" class="dropdown-menu" role="menu" aria-labelledby="drop3">
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="research.html">publications</a></li>
                      <li role="separator" class="divider"></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="research.html#workingpapers">working
                          Papers</a></li>
                    </ul>
                  </li>
                  <li><a class="xnavbar-link" href="teaching.html">teaching</a></li>
                </ul>
        
              </div>
            </div>
          </nav>
        `;

        // Attach a shadow root to the element.
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.initializeDropdowns();
        this.initializeHamburgerMenu();
    }

    initializeDropdowns() {
        // Use jQuery to initialize dropdowns
        $(this.shadowRoot).find('.dropdown').each(function() {
            $(this).on('click', function(event) {
                $(this).toggleClass('open');
                event.stopPropagation();
            });
        });

        // Close dropdowns when clicking outside
        $(document).on('click', () => {
            $(this.shadowRoot).find('.dropdown').removeClass('open');
        });
    }

    initializeHamburgerMenu() {
      const navbarToggle = this.shadowRoot.querySelector('.navbar-toggle');
      const navbarCollapse = this.shadowRoot.querySelector('.navbar-collapse');
  
      navbarToggle.addEventListener('click', () => {
          navbarCollapse.classList.toggle('in');
      });
  }
}
customElements.define('header-component', HeaderComponent);
