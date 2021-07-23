//Andiamo a memorizzare il nostro Menu all'interno di un array
//suddiviso per oggetti quali hanno proprietà riferenti ai items del menu
let menù = [
    {
      title: "buttermilk pancakes",
      category: "colazione",
      prezzo:"$15.99",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      title: "diner double",
      category: "pranzo",
      prezzo: "$13.99",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      title: "godzilla milkshake",
      category: "drinks",
      prezzo:"$6.99",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      title: "country delight",
      category: "colazione",
      prezzo: "$20.99",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      title: "egg attack",
      category: "cena",
      prezzo: "$22.99",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      title: "oreo dream",
      category: "drinks",
      prezzo: "$18.99",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      title: "bacon overflow",
      category: "colazione",
      prezzo: "$8.99",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      title: "american classic",
      category: "cena",
      prezzo: "$12.99",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      title: "quarantine buddy",
      category: "drinks",
      prezzo: "$16.99",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

let json = JSON.stringify(menù);
const eliminaMenuBtn = document.querySelectorAll('.BtnElimina');
const aggiungiAlMenuBtn = document.querySelector(".BtnAggiungi");
const filterButtons = document.querySelectorAll(".Btn");
const sezioneCentrale = document.querySelector(".section-center");

DisplayMenu(menù); 

  function DisplayMenu(ArrayMenu){ // ArrayMenu: è il nostro paramentro che al momento della dichiarazione della fuzione "DisplayMenu()" chiameremo come parametro il nostro array di oggetti.
    let displayMenu = ArrayMenu.map((menuProprietà)=>{

          /* Il metodo map
            si utilizza nel momento in cui abbiamo la necessità di gestire
            o modificare  i valori memorizzati negli array utilizzando una funzione di callback.*/

            return `<div class="section-center">
              <h4 style="font-weight: bold;">${menuProprietà.title}</h4>
              <h4 class="prezzo">${menuProprietà.prezzo}</h4>
              <p>${menuProprietà.desc}</p>
              <button data-id="1" class="BtnElimina">Elimina</button>
              </div>`;
      });
      displayMenu = displayMenu.join("");
      sezioneCentrale.innerHTML = displayMenu;
    }

    // Filter Btns
    filterButtons.forEach((Buttons)=>{
        Buttons.addEventListener('click', (Buttons)=>{
            const catogorieBtns = Buttons.currentTarget.dataset.id;
             const MenuCategory = menù.filter((menuItem)=>{
                 if(menuItem.category === catogorieBtns){
                     return menuItem;
                 }
             });
            //  console.log(catogorieBtns);
            //  console.log(MenuCategory);
            if(catogorieBtns === "tutti"){
                DisplayMenu(menù)
            }else{
                DisplayMenu(MenuCategory);
            }
        });
    });


    //addBtn
    aggiungiAlMenuBtn.addEventListener('click', ()=>{
      const title = document.querySelector('.Addtitle').value;
      const category = document.querySelector('.addCategory').value;
      const prezzo = document.querySelector('.prezzoAdd').value;
      const desc = document.querySelector('.descrizioneAdd').value;
      var AddedMenu = [{
        title,
        category,
        prezzo,
        desc,
      },];
       menù = AddedMenu.concat(menù);
       json = JSON.stringify(menù);
       console.log(json)
       return DisplayMenu(menù);
      });
