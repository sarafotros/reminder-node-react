let screenOneSeats = 200
let screenTwoSeats = 150
let screenThreeSeats = 300

let food = [{
        name: "Twix",
        price: 1.50,
    },
    {
        name: "Carmac",
        price: 1.50
    },
    {
        name: "Wispa",
        price: 1.00,
    },
    {
        name: "Twirl",
        price: 5.00
    }
]
let drink = [{
        name: "Coke",
        price: 1.50,
    },
    {
        name: "Sprite",
        price: 1.50
    },
    {
        name: "Water",
        price: 1.00,
    },
    {
        name: "Tango Ice Blast",
        price: 5.00
    }
]
class order {
    constructor(name, age, student, filmType, ticketsPurchased) {
        this.name = name;
        this.age = age;
        this.student = student;
        this.filmType = filmType;
        this.ticketsPurchased = ticketsPurchased;
    }
    seats(seat) {
        if(seat > 5){
            console.log("Not enough remaining seats");
        }else {
            this.seat = seat;
            console.log(this.seat);
        }
    };
    numberOfSeatsLeft(){
        if(this.ticketsPurchased<=5 && (screenOneSeats >=5 || screenThreeSeats >=5) && this.filmType == "twoD"){
            console.log(`You are purchasing ${this.ticketsPurchased} tickets. Seats available in screen 1: ${screenOneSeats}. Seats available in screen 3: ${screenThreeSeats}`)
            screenOneSeats -= this.ticketsPurchased
            screenThreeSeats -= this.ticketsPurchased
            return (`After your purchase, seats now available in screen 1: ${screenOneSeats}. Seats now available in screen 3: ${screenThreeSeats}`)
        }
        else if (this.ticketsPurchased<=5 && (screenTwoSeats >=5 || screenThreeSeats >=5) && this.filmType == "threeD"){
            console.log(`You are purchasing ${this.ticketsPurchased} tickets. Seats available in screen 2: ${screenTwoSeats}. Seats available in screen three: ${screenThreeSeats}`)
            screenTwoSeats -= this.ticketsPurchased
            screenThreeSeats -= this.ticketsPurchased
            return (`After your purchase, seats now available in screen 2: ${screenTwoSeats} seats now available in screen 3: ${screenThreeSeats}`)
        }
        else {
            return ("No seats available")
        }
    }
    price() {
        if(this.student == "no" && this.age <= 7) {
            return("Your child ticket price will be £3")
        }
        else if (this.student == "no" && this.age >= 7 && this.age <= 65) {
                return("Your adult ticket price will be £10")
        }
        else if(this.student == "yes" && this.age >= 7 && this.age <=65) {
            return("Your student price will be £6")
        }
        else if (this.student == "no" && this.age >= 65) {
            return("Your senior ticket price will be £5")
        }
        else {
            return("Invaild age")
        };
    }
    finalPrice(input) { 
        let total = 0;
        for (let j = 0; j < input.length; j++) {
            total += input[j].this.price
        
        }
        return total;
    }
}
