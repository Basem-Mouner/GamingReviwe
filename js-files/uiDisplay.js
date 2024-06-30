export default class UiDisplay {

    constructor() {
            //   this.fullname = fName;
        }
        // ===========================DISPLAY  Game Category[cards]==========================
    displayCards(Array) {
            let box_contanier = '';

            for (let i = 0; i < Array.length; i++) {

                box_contanier += `
 <div class="gameCard col-md-6 col-lg-4  col-xl-3 p-2">
 <div class="card_fram  p-0  rounded-2">
 <div class="inner_card m-3">
 <img src=${Array[i].thumbnail} class="w-100 mb-3 rounded-top-2">
 <div class="card-body d-flex justify-content-between mb-3">
 <h3 class="card-title text-white fs-6">${Array[i].title}</h3>
 <span class="text-white fs-6 ms-3">Free</span>
 </div>
 <p class="card-text  text-white-50  text-center">${(Array[i].short_description.split(" ").slice(0,16).join(" "))}</p>
 </div>
 <div class="footerCard  text-white d-flex justify-content-between  p-2">
 <span> ${Array[i].genre}</span>
 <span>${Array[i].platform}</span>
 </div>
 
 </div>
 </div>
 `
            }
            document.getElementById('Main_Cards').innerHTML = box_contanier;
        }
        // ===========================DISPLAY gammes cards==========================
        // ===========================DISPLAY  details==========================
    displayDetailsFoGame(object) {
            var box_contanier =

                `  <div class="detailTitle  d-flex justify-content-between mt-3">
                        <h1 class="text-white ">Details Game</h1>
                        <button class="btn-close btn-close-white mt-2" id="CLOSE_Details"></button>
                    </div>
                    <div class="detailImg col-lg-5 pt-4">
                         <img src=${object.thumbnail} alt="">
                    </div>
                    <div class="detailInformation col-lg-7 ">
                        <h3 class="mb-4">Title: ${object.title}</h3>
                        <p>Category : <span>${object.genre}</span></p>
                        <p> Platform :<span>${object.platform}</span></p>
                        <p>Status :<span>${object.status}</span></p>
                        <p>${object.description}</p>
                        <a class="btn btn-outline-warning mb-5" href=${object.game_url}  target="_blank"> show Game</a>
                    </div>`;

            document.getElementById('Details_Content').innerHTML = box_contanier;
        }
        // ===========================DISPLAY ========================
}