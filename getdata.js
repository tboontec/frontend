function loginToServer() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    emailL: form.emailL.value,
    pwdL: form.pwdL.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/login", requestOptions)
    .then((response) => response.json())
    // .then((response) => response.text())
    // .then((result) => (respanel.innerHTML = result))
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (order) {
        text += `<li>
        Customer: ${order.custName} <br>        
        Item: ${order.name} <br>
        Qty: ${order.quantity} <br>
        ShippingDate: ${order.shipping_date}
        </li>`;
      });
      text += "</ul>";
      respanel.innerHTML = text;
    })    
    .catch((error) => console.log("error", error));
}

function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        email: ${item.email} <br>
        name: ${item.name} <br>
        pwd: ${item.pwd}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}

function postData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    nameA: form.nameA.value,
    emailA: form.emailA.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}

function updateData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    pwdU: form.pwdU.value,
    emailU: form.emailU.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/update", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}


function deleteData() {
  var requestOptions = {
    method: "DELETE",
  };
  url = "http://localhost:3000/customer/delete?emailD=" + form.emailD.value;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}
function searchData() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/customer/search?emailS=" + form.emailS.value;
  console.log(url);
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}
