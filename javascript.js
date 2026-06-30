const cards = [
    {
        image: "assets/images/Smartwatch1.jpg",
        title: "Card One"
    },
    {
        image: "assets/images/Smartwatch2.jpg",
        title: "Card Two"
    },
    {
        image: "assets/images/Smartwatch3.jpg",
        title: "Card Three"
    },
    {
        image: "assets/images/Smartwatch4.jpg",
        title: "Card Four"
    },
    {
        image: "assets/images/Smartwatch5.jpg",
        title: "Card Five"
    },
    {
        image: "assets/images/Smartwatch6.jpg",
        title: "Card Six"
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