const fillGasTank = (gallons) => {

    if (gallons > 15) {
        console.log(`You cannot add this much gas to the tank ${gallons} of gas`)
    }
    else 
    console.log(`I filled the tank with ${gallons} of gas`)
   }


fillGasTank(20)
fillGasTank(12)
