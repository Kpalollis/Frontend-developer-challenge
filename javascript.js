const cards = [
    {
        image: "https://picsum.photos/300/200?1",
        title: "Card One"
    },
    {
        image: "https://picsum.photos/300/200?2",
        title: "Card Two"
    },
    {
        image: "https://picsum.photos/300/200?3",
        title: "Card Three"
    },
    {
        image: "https://picsum.photos/300/200?4",
        title: "Card Four"
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