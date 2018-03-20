// Bible Quote Generator


const quoteDB =
    [{
        author: "John 14:6", 
        quote: "Yeshua said, 'I AM the Way — and the Truth and the Life; no one comes to the Father except through me.'"
    }, {
        author: "Jeremiah 29:11",
        quote: "'For I know what plans I have in mind for you,' says Adonai,'plans for well-being, not for bad things; so that you can have hope and a future.'"
    }, {
        author: "John 3:16",
        quote: "'For God so loved the world that he gave his only and unique Son, so that everyone who trusts in him may have eternal life, instead of being utterly destroyed.'"
    }, {
        author: "James 4:7",
        quote: "Therefore, submit to God. Moreover, take a stand against the Adversary, and he will flee from you."
    }, {
        author: "Mark 12:30-31",
        quote: "'You are to love Adonai your God with all your heart, with all your soul, with all your understanding and with all your strength.' The second is this: 'You are to love your neighbor as yourself.' There is no other commandment greater than these."
    }];

const randomQuote = () => {
    let rand = Math.floor(Math.random() * 5);

    return quoteDB[rand];
}

console.log(randomQuote());