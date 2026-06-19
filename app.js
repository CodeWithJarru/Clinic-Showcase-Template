const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(update,20);
        }
        else{
            counter.innerText = target;
        }
    };

    update();

});


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

document.querySelectorAll(".service-card,.doctor-card,.stat-card")
.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = ".8s";

    observer.observe(card);

});