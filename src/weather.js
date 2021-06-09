

class Weather {
    
    constructor (city, country, temp, tempMax, tempMin, desc, deg){
        this.city = city;
        this.country = country;
        this.temp = temp;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.desc = desc;
        this.deg = deg;
    }

    getDescription(){
        if (this.deg === 'F'){
            let tempF = this.kToF(this.temp);
            let maxF = this.kToF(this.tempMax);
            let minF = this.kToF(this.tempMin);
            return `For ${this.city} in ${this.country}, the current temp is ${tempF} F, with high of ${maxF}
            F and low of ${minF} F. The weather is described as ${this.desc}`;
        } else if (this.deg === 'C') {
            let tempC = this.kToC(this.temp);
            let maxC = this.kToC(this.tempMax);
            let minC = this.kToC(this.tempMin);
            return `For ${this.city} in ${this.country}, the current temp is ${tempC} C, with high of ${maxC}
            C and low of ${minC} C. The weather is described as ${this.desc}`;
        } else {
            return "error";
        }
    }

    kToF(k){
        let f = (k-273.15)*(9/5)+32;
        return Math.round(f*100)/100;
    }

    kToC(k){
        let c = k-273.15;
        return Math.round(c*100)/100;
    }

    getShortDesc(){
        return this.desc;
    }

    getCity () {
        return this.city;
    }
}

export {Weather}