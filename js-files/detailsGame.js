import UiDisplay, {} from './uiDisplay.js';
import { load_page } from './homeGames.js';
const detailPage = document.querySelector('.details');
export default class Details {

    constructor(id) {
        this.id = id;
    }

    async detailGameByID() {
        try {
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, {
                method: 'GET',
                cache: 'default',
                headers: {
                    'x-rapidapi-key': 'b7aa9152c4msh44cfa75a4eca8e2p125041jsn8d19ef741955',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            });
            const result = await response.json();
            console.log(result);

            const display = new UiDisplay();
            display.displayDetailsFoGame(result);
            $('body').css('overflow', 'hidden');
            detailPage.classList.replace('d-none', 'd-block');
            $(document).ready(function() {
                load_page.classList.replace('d-block', 'd-none');
            })

            $('#CLOSE_Details').click(function() {
                detailPage.classList.replace('d-block', 'd-none');
                $('body').css('overflow', 'auto');
            });
        } catch (error) {
            console.error(error);
        }
    }


}