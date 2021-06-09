
class DOM {
    constructor(){}

    static createWeatherCard (weather){
        let card = document.createElement('div');
        card.classList.add('card');
        let cardText = document.createElement('div');
        cardText.classList.add('card-text');
        cardText.textContent = weather.getDescription();
        let cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        let image = document.createElement('img');
        this.addGif(image, weather.getShortDesc());
        cardImage.appendChild(image);
        card.appendChild(cardText);
        card.appendChild(cardImage);
        card.appendChild(this.addRemoveButton(card));
        document.querySelector('#content').appendChild(card);
    }

    static addRemoveButton (card){
        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            document.querySelector('#content').removeChild(card);
        });
        return removeButton;
    }

    static addGif(image, text){
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=gmcOvxLZTC8O8HXu2hUS8yfNvi1dCERW&s=${text}`, {mode: 'cors'})
        .then(function(response) {
            return (response.json());
        })
        .then(function(response) {
            image.setAttribute('src', response.data.images.original.url);
        })
        .catch(e => {
            image.setAttribute('src', "https://giphy.com/gifs/kermit-CytQHnbgquUhi");
        });
    }
}

export {DOM}