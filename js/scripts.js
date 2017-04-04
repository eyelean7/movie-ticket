//business logic
//constructor for Ticket
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = parseInt(age);
  this.price = 20;
}//close constructor
//prototype generates ticket information
Ticket.prototype.ticketInfo = function() {
  return this.movie + " " + this.time + " " + this.age ;
}//close prototype
//prototype calculates ticket price
Ticket.prototype.ticketPrice = function() {
  console.log(this.age);
  if (this.age < 12) {
    this.price -=5;
    console.log(this.price);
  }
  return(this.price);
}//close prototype
//function resets form
function resetFields() {
    $("select.movie").val("");
    $("input#time").val("");
    $("input#input-age").val("");
}

// user interface logic
$(document).ready(function() {


  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("select.movie").val();
    var inputtedTime= $("input#time").val();
    var inputtedAge= $("input#input-age").val();

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

    var resultPrice = newTicket.ticketPrice();


      $("#show-price").show();
      $("#new-movie").text(newTicket.movie);
      $("#new-time").text(newTicket.time);
      $("#new-age").text(newTicket.age);
      $("#new-price").text(resultPrice);
      console.log(inputtedMovie, inputtedTime, inputtedAge);

    resetFields();

  });
});
