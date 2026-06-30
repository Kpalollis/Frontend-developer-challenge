const cards = [
    {
        image: "accets/images/Smartwatch1.jpg",
        title: "Card One"
    },
    {
        image: "accets/images/Smartwatch2.jpg",
        title: "Card Two"
    },
    {
        image: "accets/images/Smartwatch3.jpg",
        title: "Card Three"
    },
    {
        image: "accets/images/Smartwatch4.jpg",
        title: "Card Four"
    },
    {
        image: "accets/images/Smartwatch5.jpg",
        title: "Card Five"
    },
    {
        image: "accets/images/Smartwatch6.jpg",
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