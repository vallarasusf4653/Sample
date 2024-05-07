"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var CardNumberAutoIncrement = 1001;
var TravelAutoIncrement = 2001;
var TicketAutoIncrement = 3001;
let CurrentUser;
let isValidUserName = false;
let isValidUserEmail = false;
let isValidUserPhoneNumber = false;
function NewUser() {
    var signin = document.getElementById('signin');
    signin.style.display = "none";
    var signup = document.getElementById('signup');
    signup.style.display = "block";
}
function ExistUser() {
    var signin = document.getElementById('signin');
    signin.style.display = "block";
    var signup = document.getElementById('signup');
    signup.style.display = "none";
}
let NewUserName = "";
function validateUserName(paramusername) {
    var username = document.getElementById(paramusername).value;
    var usernamemessage = document.getElementById(paramusername + "message");
    if (username != "" && /\w{2,20}/.test(username) && username.length > 2) {
        isValidUserName = true;
        NewUserName = username;
        usernamemessage.style.visibility = "hidden";
    }
    else {
        usernamemessage.innerHTML = "Please enter valid name";
        usernamemessage.style.visibility = "visible";
        usernamemessage.style.color = "tomato";
        usernamemessage.style.marginLeft = "10px";
    }
}
let NewUserEmail = "";
function validateUserEmail(paramuseremail) {
    var useremail = document.getElementById(paramuseremail).value;
    var useremailmessage = document.getElementById(paramuseremail + "message");
    if (/^([a-z0-9]+)@([a-z]+).([a-z]{2,20})$/.test(useremail)) {
        isValidUserEmail = true;
        NewUserEmail = useremail;
        useremailmessage.style.visibility = "hidden";
    }
    else {
        useremailmessage.innerHTML = "Please enter valid name";
        useremailmessage.style.visibility = "visible";
        useremailmessage.style.color = "tomato";
        useremailmessage.style.marginLeft = "10px";
    }
}
let NewUserpassword = "";
function validatePassword(paramuserpassword) {
    var password = document.getElementById(paramuserpassword).value;
    var passwordmessage = document.getElementById(paramuserpassword + "message");
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/.test(password) && password.length > 8) {
        NewUserpassword = password;
        passwordmessage.style.visibility = "hidden";
    }
    else {
        passwordmessage.innerHTML = "Please enter valid name";
        passwordmessage.style.visibility = "visible";
        passwordmessage.style.color = "tomato";
        passwordmessage.style.marginLeft = "10px";
    }
}
function validateConfirmPassword(paramuserconfirmpassword) {
    var confirmpassword = document.getElementById(paramuserconfirmpassword).value;
    var confirmpasswordmessage = document.getElementById(paramuserconfirmpassword + "message");
    if (NewUserpassword == confirmpassword) {
        isValidUserEmail = true;
        confirmpasswordmessage.style.visibility = "hidden";
    }
    else {
        confirmpasswordmessage.innerHTML = "Please enter valid name";
        confirmpasswordmessage.style.visibility = "visible";
        confirmpasswordmessage.style.color = "tomato";
        confirmpasswordmessage.style.marginLeft = "10px";
    }
}
let NewUserPhoneNumber = "";
function validatePhoneNumber(paramuserphonenumber) {
    let userphone = document.getElementById(paramuserphonenumber).value;
    let userphonemessage = document.getElementById(paramuserphonenumber + "message");
    if (/\d{10}/.test(userphone)) {
        NewUserPhoneNumber = userphone;
        isValidUserPhoneNumber = true;
        userphonemessage.style.visibility = "hidden";
    }
    else {
        userphonemessage.innerHTML = "Please enter valid name";
        userphonemessage.style.visibility = "visible";
        userphonemessage.style.color = "tomato";
        userphonemessage.style.marginLeft = "10px";
    }
}
function SignUp() {
    // if ((isValidUserName == true||false) && (isValidUserEmail == true ||false)&&( isValidUserPhoneNumber == true||false)) {
    // UserList.push(new UserDetails(NewUserName, NewUserEmail, NewUserpassword, NewUserPhoneNumber));
    const user = {
        cardNumber: 0,
        userName: NewUserName,
        userEmail: NewUserEmail,
        password: NewUserpassword,
        // phoneNumber: NewUserPhoneNumber,
        balance: 0
    };
    addUser(user);
    alert("Account Created Successfully");
    ExistUser();
    // }
    // else {
    //     alert("Try again!");
    // }
}
function signout() {
    document.getElementById('dashboard').style.display = "none";
    document.getElementById('homebutton').style.display = "none";
    document.getElementById('travelbutton').style.display = "none";
    document.getElementById('ticketbutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "none";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "block";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "block";
    var ticketaddmenu = document.getElementById('TicketButtonAdd');
    ticketaddmenu.style.display = "none";
}
let CurrentUserEmail = "";
function verifyUserEmail(paramuseremail) {
    var useremail = document.getElementById(paramuseremail).value;
    var useremailmessage = document.getElementById(paramuseremail + "message");
    if (/^([a-z0-9]+)@([a-z]+).([a-z]{2,20})$/.test(useremail)) {
        CurrentUserEmail = useremail;
        useremailmessage.style.visibility = "hidden";
    }
    else {
        useremailmessage.innerHTML = "Please enter valid name";
        useremailmessage.style.visibility = "visible";
        useremailmessage.style.color = "tomato";
        useremailmessage.style.marginLeft = "10px";
    }
}
let CurrentUserPassword = "";
function verifyUserPassword(paramuserpassword) {
    var password = document.getElementById(paramuserpassword).value;
    var passwordmessage = document.getElementById(paramuserpassword + "message");
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/.test(password) && password.length > 8) {
        CurrentUserPassword = password;
        passwordmessage.style.visibility = "hidden";
    }
    else {
        passwordmessage.innerHTML = "Please enter valid name";
        passwordmessage.style.visibility = "visible";
        passwordmessage.style.color = "tomato";
        passwordmessage.style.marginLeft = "10px";
    }
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let flag = true;
        const UserList = yield fetchUsers();
        UserList.forEach(user => {
            if (user.userEmail == CurrentUserEmail && user.password == CurrentUserPassword) {
                flag = false;
                CurrentUser = user;
                alert("sign");
                DashBoard();
            }
        });
        if (flag) {
            alert("Invalid Email & Password");
        }
    });
}
function DashBoard() {
    var signin = document.getElementById('signin');
    signin.style.display = "none";
    var signup = document.getElementById('signup');
    signup.style.display = "none";
    var header = document.getElementById('header');
    header.style.display = "none";
    var nav = document.getElementById('dashboard');
    nav.style.display = "block";
    homebutton();
}
function homebutton() {
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('homebutton').style.display = "block";
    document.getElementById('travelbutton').style.display = "none";
    document.getElementById('ticketbutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "none";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "none";
    var ticketaddmenu = document.getElementById('TicketButtonAdd');
    ticketaddmenu.style.display = "none";
}
function travelbutton() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById('dashboard').style.display = "block";
        document.getElementById('homebutton').style.display = "none";
        document.getElementById('rechargebutton').style.display = "none";
        document.getElementById('showbalancebutton').style.display = "none";
        document.getElementById('signout').style.display = "none";
        document.getElementById('signin').style.display = "none";
        document.getElementById('signup').style.display = "none";
        document.getElementById('header').style.display = "none";
        document.getElementById('travelbutton').style.display = "block";
        document.getElementById('ticketbutton').style.display = "none";
        var ticketaddmenu = document.getElementById('TicketButtonAdd');
        ticketaddmenu.style.display = "none";
        const TravelList = yield fetchTravelHistory();
        const UserList = yield fetchUsers();
        var table = document.querySelector("#travel tbody");
        table.innerHTML = "";
        TravelList.forEach(travel => {
            if (travel.cardNumber == CurrentUser.cardNumber) {
                var row = document.createElement("tr");
                row.innerHTML = `<td>${travel.travelID}</td><td>${travel.fromLocation}</td><td>${travel.toLocation}</td><td>${travel.date.toString().split('T')[0].split('-').reverse().join('/')}</td><td>${travel.travelCost}</td>`;
                table.appendChild(row);
            }
        });
    });
}
function rechargebutton() {
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('homebutton').style.display = "none";
    document.getElementById('ticketbutton').style.display = "none";
    var ticketaddmenu = document.getElementById('TicketButtonAdd');
    ticketaddmenu.style.display = "none";
    document.getElementById('rechargebutton').style.display = "block";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('travelbutton').style.display = "none";
}
function rechargemessage() {
    return __awaiter(this, void 0, void 0, function* () {
        const userList = yield fetchUsers();
        var rechargeAmount = parseInt(document.getElementById("rechargeamount").value);
        var rechargemessage = document.getElementById("amountmessage");
        var currentBalance;
        if (rechargeAmount > 0) {
            userList.forEach(user => {
                if (user.cardNumber = CurrentUser.cardNumber) {
                    currentBalance = user.balance + rechargeAmount;
                }
            });
            rechargemessage.innerHTML = "Recharged Successfully";
            alert("recharged");
        }
        else {
            alert("Unable to Recharge");
        }
        userList.forEach(element => {
            if (element.cardNumber == CurrentUser.cardNumber) {
                element.balance = currentBalance;
                updateUser(element.cardNumber, element);
            }
        });
        ;
    });
}
function showbalancebutton() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById('dashboard').style.display = "block";
        document.getElementById('homebutton').style.display = "none";
        document.getElementById('ticketbutton').style.display = "none";
        document.getElementById('rechargebutton').style.display = "none";
        document.getElementById('showbalancebutton').style.display = "block";
        document.getElementById('signout').style.display = "none";
        document.getElementById('signin').style.display = "none";
        document.getElementById('signup').style.display = "none";
        document.getElementById('header').style.display = "none";
        document.getElementById('travelbutton').style.display = "none";
        var ticketaddmenu = document.getElementById('TicketButtonAdd');
        ticketaddmenu.style.display = "none";
        var balance = document.getElementById("balance");
        const UserList = yield fetchUsers();
        UserList.forEach(element => {
            if (element.cardNumber == CurrentUser.cardNumber) {
                balance.innerHTML = element.balance.toString();
            }
        });
    });
}
function Bookticket() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById('dashboard').style.display = "block";
        document.getElementById('ticketbutton').style.display = "block";
        document.getElementById('homebutton').style.display = "none";
        document.getElementById('rechargebutton').style.display = "none";
        document.getElementById('showbalancebutton').style.display = "none";
        document.getElementById('signout').style.display = "none";
        document.getElementById('signin').style.display = "none";
        document.getElementById('signup').style.display = "none";
        document.getElementById('header').style.display = "none";
        document.getElementById('travelbutton').style.display = "none";
        var ticketaddmenu = document.getElementById('TicketButtonAdd');
        ticketaddmenu.style.display = "none";
        var table = document.querySelector("#ticket tbody");
        table.innerHTML = "";
        var count = 1;
        const TicketFairList = yield fetchTciketFair();
        TicketFairList.forEach(travelticket => {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${count}</td><td>${travelticket.fromLocation}</td><td>${travelticket.toLocation}</td><td>${travelticket.ticketPrice}
        </td><td> <button type="button" onclick="editTicket('${travelticket.ticketID}')">Edit</button>
         <button type="button" onclick="deleteTicket('${travelticket.ticketID}')">Delete</button></td>
        </td><td> <button type="button" onclick="Book('${travelticket.ticketID}')">Book</button></td>`;
            table.appendChild(row);
            count++;
        });
    });
}
function Book(ticketID) {
    return __awaiter(this, void 0, void 0, function* () {
        var flag = true;
        const TicketFairList = yield fetchTciketFair();
        const TravelList = yield fetchTravelHistory();
        const userList = yield fetchUsers();
        var Currentbalance;
        TicketFairList.forEach(ticket => {
            if (ticket.ticketID == ticketID) {
                userList.forEach(user => {
                    if (user.cardNumber == CurrentUser.cardNumber) {
                        if (ticket.ticketPrice <= user.balance) {
                            flag = false;
                            Currentbalance = user.balance - ticket.ticketPrice;
                            // TravelList.push(new TravelHistoryDetails(user.CardNumber,ticket.FromLocation,ticket.ToLocation,new Date(),ticket.TicketPrice));
                            const travel = {
                                travelID: undefined,
                                cardNumber: user.cardNumber,
                                fromLocation: ticket.fromLocation,
                                toLocation: ticket.toLocation,
                                date: new Date(),
                                travelCost: ticket.ticketPrice
                            };
                            addTravel(travel);
                            alert("Ticket Booked Successfully");
                            fetchTravelHistory();
                        }
                    }
                    //updateUser(user.cardNumber, user);
                });
            }
        });
        userList.forEach(element => {
            if (element.cardNumber == CurrentUser.cardNumber) {
                element.balance = Currentbalance;
                updateUser(element.cardNumber, element);
            }
        });
        if (flag) {
            alert("Insufficient Balance!!");
        }
    });
}
function add() {
    var ticketaddmenu = document.getElementById('TicketButtonAdd');
    ticketaddmenu.style.display = "block";
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('ticketbutton').style.display = "block";
    document.getElementById('homebutton').style.display = "none";
    document.getElementById('rechargebutton').style.display = "none";
    document.getElementById('showbalancebutton').style.display = "none";
    document.getElementById('signout').style.display = "none";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('travelbutton').style.display = "none";
}
function fetchTciketFair() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5203/api/TicketFairDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5203/api/UserDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function fetchTravelHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5203/api/TravelHistoryDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5203/api/UserDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add contact');
        }
    });
}
function addTravel(travel) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5203/api/TravelHistoryDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel)
        });
        if (!response.ok) {
            throw new Error('Failed to add contact');
        }
    });
}
function addticket(ticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5203/api/TicketFairDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        });
        if (!response.ok) {
            throw new Error('Failed to add contact');
        }
        Bookticket();
    });
}
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5203/api/UserDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
function updateticket(id, ticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5203/api/TicketFairDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
        Bookticket();
    });
}
//Delete
function deleteTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5203/api/TicketFairDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
        Bookticket();
    });
}
var source = document.getElementById('FromLocation');
var destination = document.getElementById('ToLocation');
var amount = document.getElementById('TravelCost');
var editingId = null;
function Submit() {
    const fromLocation = source.value.trim();
    const toLocation = destination.value.trim();
    const price = parseInt(amount.value);
    if (editingId !== null) {
        const Ticket = {
            ticketID: editingId,
            fromLocation: fromLocation,
            toLocation: toLocation,
            ticketPrice: price,
        };
        updateticket(editingId, Ticket);
        fetchTciketFair();
    }
    else {
        const Ticket = {
            ticketID: undefined,
            fromLocation: fromLocation,
            toLocation: toLocation,
            ticketPrice: price,
        };
        addticket(Ticket);
        fetchTciketFair();
    }
}
function editTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var ticketaddmenu = document.getElementById('TicketButtonAdd');
        ticketaddmenu.style.display = "block";
        document.getElementById('dashboard').style.display = "block";
        document.getElementById('ticketbutton').style.display = "block";
        document.getElementById('homebutton').style.display = "none";
        document.getElementById('rechargebutton').style.display = "none";
        document.getElementById('showbalancebutton').style.display = "none";
        document.getElementById('signout').style.display = "none";
        document.getElementById('signin').style.display = "none";
        document.getElementById('signup').style.display = "none";
        document.getElementById('header').style.display = "none";
        document.getElementById('travelbutton').style.display = "none";
        editingId = id;
        const ticket = yield fetchTciketFair();
        const updateticket = ticket.find(ticket => ticket.ticketID == id);
        if (updateticket != null) {
            source.value = updateticket.fromLocation;
            destination.value = updateticket.toLocation;
            amount.value = updateticket.ticketPrice.toString();
        }
    });
}
