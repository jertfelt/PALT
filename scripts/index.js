function Header () {
	let scrollpos = window.scrollY;
	const header = document.querySelector( ".header--transparent" );
	const menu_toggle = document.querySelector( ".menu-toggle" );
	if ( header ) {
		const header_height = header.offsetHeight;
		const add_class_on_scroll = () => header.classList.add( "fade-in" );
		const add_class_on_scroll_menu_toggle = () =>
			menu_toggle.classList.add( "fade-in-nav" );
		const remove_class_on_scroll = () => header.classList.remove( "fade-in" );
		const remove_class_on_scroll_menu_toggle = () =>
			menu_toggle.classList.remove( "fade-in-nav" );
		window.addEventListener( "scroll", function () {
			scrollpos = window.scrollY;
			if ( scrollpos >= header_height ) {
				add_class_on_scroll();
				add_class_on_scroll_menu_toggle();
			} else {
				remove_class_on_scroll();
				remove_class_on_scroll_menu_toggle();
			}
		} );
	}
}

Header();

function Menu () {
	const menu = document.querySelector( ".main-menu" );
	const menuToggle = document.querySelector( ".menu-toggle" );

	window.addEventListener( "load", () => {
		toggleMobileMenu();
	} );

	function toggleMobileMenu () {
		if ( menuToggle ) {
			menuToggle.addEventListener( "click", ( event ) => {
				event.preventDefault();
				menuToggle.classList.toggle( "menu-open" );
				menu.classList.toggle( "menu-opened" );
			} );
		}
	}
}

Menu();

//Active sub-pages
// ( function () {
// 	const current_path = location.pathname.split( '/' )[1];
// 	if ( current_path === "" ) return;
// 	const menuItems = document.querySelectorAll( '.main-menu li a' );
// 	menuItems.forEach( item => {
// 		if ( item.getAttribute( "href" ).indexOf( current_path ) !== -1 ) {
// 			item.className += " is-active";
// 		}
// 	} )
// } )();


	function flippedCard () {
	const card = document.querySelectorAll(".card");

	card.forEach((inner)=>{
		
		inner.addEventListener("click", () => {
			let innerCard = inner.firstElementChild;
			innerCard.classList.toggle("flipped");
		})
	})
}
flippedCard();


//Skicka-button confirmation (validation in form)
function logSubmit(event) {
  log.textContent = "Tack! Vi hör av oss!";
  event.preventDefault();
}
let form = document.getElementById('form');
let messageUser = document.getElementById('log');
form.addEventListener('submit',logSubmit);

function logThanks(event) {
  thanks.textContent = "Tack! Vi hör av oss!";
  event.preventDefault();
}
let formFooter = document.getElementById('form-footer');
let messageThanks = document.getElementById('thanks');
form.addEventListener('submit',logSubmit);
