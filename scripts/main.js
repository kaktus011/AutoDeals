let orderForm = document.getElementById("orderForm");
let reviewForm = document.getElementById("reviewForm");

function submit_order(orderName) {
   alert(`${orderName}, thank you for the order!`);
}

function submit_review(name, review) {
   const newDiv = document.createElement("div");
   const newContent = `
    <img src="../images/userPFP.png" alt="user pfp" />
    <p><b>`+ name + `:</b></p>
    <p>&nbsp;&nbsp;`+ review + `</p>`;
   newDiv.innerHTML = newContent;

   const parent = document.getElementById("reviews")
   const currReviews = parent.getElementsByTagName("div");
   parent.insertBefore(newDiv, currReviews[0]);
}

orderForm.addEventListener('submit', function (e) {
   let orderFirstName = orderForm.elements['orderFirstName'].value;
   let orderLastName = orderForm['orderLastName'].value;
   let orderEmail = orderForm['orderEmail'].value;
   let orderAddress = orderForm['orderAddress'].value;
   if (orderFirstName != "" && orderLastName != "" && orderEmail != "" && orderAddress != "") {
      let orderName = orderFirstName + " " + orderLastName;
      submit_order(orderName);
   }
   else {
      e.preventDefault();
   }
});

reviewForm.addEventListener('submit', function (e) {
   let reviewName = reviewForm.elements['reviewName'].value;
   let reviewComment = reviewForm.elements['reviewComment'].value;
   if (reviewName != "" && reviewComment != "") {
      submit_review(reviewName, reviewComment);
      e.preventDefault();
      reviewForm.reset();
   }
   else {
      e.preventDefault();
   }
});