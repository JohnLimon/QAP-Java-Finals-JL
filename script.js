//Fetch data from a JSON file and logging employee details into Javascript console on browser.

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((customer) => {
      console.log(getContact(customer));
      console.log(getGender(customer));
      console.log("Checkin Date: " + getCheckinDate(customer));
      console.log("Room Rate: " + customer.roomRate);
      console.log();
    });
  });

//Fetch the data from a JSON file and display it into the HTML browser window.

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => { 
    
    data.forEach((customer) => {
      const customerContainer = document.createElement("div");
      customerContainer.classList.add("customer-container");
      const HTML = `  
        <ul>
          <li> Customer Name: ${getContact(customer)}</li>
          <li> Gender: ${getGender(customer)}</li>
          <li> Checkin Date: ${getCheckinDate(customer)}</li>
          <li> Room Rate: ${customer.roomRate}</li>
        </ul>
        <br>
        `;
      customerContainer.innerHTML = HTML;
      document.body.appendChild(customerContainer);
      });
    })

  //To catch any errors

  .catch(error => {
    console.error(error);
  });

//Functions

function getContact(customer) {
  return `${customer.fName} ${customer.lName}, Phone Number: ${customer.phoneNum}`;
}

function getGender(customer) {
  return customer.gender;
}

function getCheckinDate(customer) {
  return customer.checkinDate + " - " + customer.roomPreferences;
}
