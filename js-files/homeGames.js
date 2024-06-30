import UiDisplay, {} from './uiDisplay.js';
import Details, {} from './detailsGame.js';
export let category = 'mmorpg';
export const load_page = document.querySelector('.loadingPage');
let gamecards = document.getElementsByClassName('gameCard');


export default class Home {

    constructor(cat) {
        this.cat = cat;
    }
    defaults() {
        load_page.classList.replace('d-none', 'd-block');
        let active = document.querySelectorAll('.nav-link');

        active.forEach(navLinkEl => {
            navLinkEl.addEventListener('click', () => {
                document.querySelector('.active').classList.remove('active');
                navLinkEl.classList.add('active')
            });
        });

        $('.nav-link').click(function(e) {
            category = $(e.target).attr('id');
            load_page.classList.replace('d-none', 'd-block');
            const homeDefaults = new Home(category);
            homeDefaults.gameByCategory();
        });
    }
    async gameByCategory() {

        try {
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.cat}`, {
                method: 'GET',
                cache: 'default',
                headers: {
                    'x-rapidapi-key': 'b7aa9152c4msh44cfa75a4eca8e2p125041jsn8d19ef741955',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            });
            const result = await response.json();
            console.log(result);
            //display result
            const display = new UiDisplay();
            display.displayCards(result);
            // load_page.classList.replace('d-block', 'd-none');
            $(document).ready(function() {
                    load_page.classList.replace('d-block', 'd-none');
                })
                //____________________to return any id after pressed on any card________________________
            console.log(gamecards.length);
            for (let i = 0; i < gamecards.length; i++) {
                gamecards[i].addEventListener('click', function(e) {
                    console.log(i);
                    console.log(`id : ${result[i].id}`);
                    load_page.classList.replace('d-none', 'd-block');
                    let currentIdPressed = result[i].id;

                    let cardDetails = new Details(currentIdPressed);
                    cardDetails.detailGameByID();
                })
            }
            //________________________________________________________
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }

    }

}