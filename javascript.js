const cards = [
    {
        image: "assets/images/Smartwatch1.jpg",
        title: "Card One"
    },
    {
        image: "assets/images/photo2.jpg",
        title: "Card Two"
    },
    {
        image: "assets/images/photo3.jpg",
        title: "Card Three"
    }
];

const container = document.getElementById("cards");


cards.forEach(card => {

    container.innerHTML += `

        <article class="card">

            <img src="${card.image}">

            <h3>${card.title}</h3>

        </article>

    `;

});



const next = document.getElementById("next");
const prev = document.getElementById("prev");


next.onclick = () => {

    container.scrollLeft += 300;

};


prev.onclick = () => {

    container.scrollLeft -= 300;

};