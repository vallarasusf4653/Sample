
var CardNumberAutoIncrement = 1001;
var TravelAutoIncrement = 2001;
var TicketAutoIncrement = 3001;

let CurrentUser: UserDetails;


interface UserDetails {
    userName: string;
    userEmail: string;
    password: string;
    // phoneNumber: string;
    cardNumber: number;
    balance: number;
}

interface TravelHistoryDetails {
    travelID: any;
    cardNumber: number;
    fromLocation: string;
    toLocation: string;
    date: Date
    travelCost: number;

}

interface TicketFairDetails {
    ticketID: any;
    fromLocation: string;
    toLocation: string;
    ticketPrice: number;
}



let isValidUserName = false;
let isValidUserEmail = false;
let isValidUserPhoneNumber = false;

function NewUser() {
    var signin = (document.getElementById('signin') as HTMLDivElement);
    signin.style.display = "none";
    var signup = (document.getElementById('signup') as HTMLDivElement);
    signup.style.display = "block";

}
function ExistUser() {
    var signin = (document.getElementById('signin') as HTMLDivElement);
    signin.style.display = "block";
    var signup = (document.getElementById('signup') as HTMLDivElement);
    signup.style.display = "none";
}



let NewUserName = "";
function validateUserName(paramusername: string) {
    var username = (document.getElementById(paramusername) as HTMLInputElement).value;
    var usernamemessage = document.getElementById(paramusername + "message") as HTMLSpanElement;
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
function validateUserEmail(paramuseremail: string) {
    var useremail = (document.getElementById(paramuseremail) as HTMLInputElement).value;
    var useremailmessage = document.getElementById(paramuseremail + "message") as HTMLSpanElement;
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
function validatePassword(paramuserpassword: string) {
    var password = (document.getElementById(paramuserpassword) as HTMLInputElement).value;
    var passwordmessage = document.getElementById(paramuserpassword + "message") as HTMLSpanElement;
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

function validateConfirmPassword(paramuserconfirmpassword: string) {
    var confirmpassword = (document.getElementById(paramuserconfirmpassword) as HTMLInputElement).value;
    var confirmpasswordmessage = document.getElementById(paramuserconfirmpassword + "message") as HTMLSpanElement;
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
function validatePhoneNumber(paramuserphonenumber: string) {
    let userphone = (document.getElementById(paramuserphonenumber) as HTMLInputElement).value;
    let userphonemessage = document.getElementById(paramuserphonenumber + "message") as HTMLSpanElement;

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
        const user: UserDetails =
        {
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
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "none";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "block";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "block";
    var ticketaddmenu =  document.getElementById('TicketButtonAdd') as HTMLDivElement;
    ticketaddmenu.style.display="none";
}

let CurrentUserEmail = "";
function verifyUserEmail(paramuseremail: string) {
    var useremail = (document.getElementById(paramuseremail) as HTMLInputElement).value;
    var useremailmessage = document.getElementById(paramuseremail + "message") as HTMLSpanElement;
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
function verifyUserPassword(paramuserpassword: string) {
    var password = (document.getElementById(paramuserpassword) as HTMLInputElement).value;
    var passwordmessage = document.getElementById(paramuserpassword + "message") as HTMLSpanElement;
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

async function SignIn() {
    let flag = true;
    const UserList = await fetchUsers();
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
}

function DashBoard() {

    var signin = (document.getElementById('signin') as HTMLDivElement);
    signin.style.display = "none";
    var signup = (document.getElementById('signup') as HTMLDivElement);
    signup.style.display = "none";
    var header = (document.getElementById('header') as HTMLDivElement);
    header.style.display = "none";
    var nav = (document.getElementById('dashboard') as HTMLDivElement);
    nav.style.display = "block";

    homebutton();

}

function homebutton() {
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    var ticketaddmenu =  document.getElementById('TicketButtonAdd') as HTMLDivElement;
    ticketaddmenu.style.display="none";


}

async function travelbutton() {

    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";


    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    var ticketaddmenu =  document.getElementById('TicketButtonAdd') as HTMLDivElement;
    ticketaddmenu.style.display="none";

    const TravelList = await fetchTravelHistory();
    const UserList = await fetchUsers();
    var table = document.querySelector("#travel tbody") as HTMLTableSectionElement;
    table.innerHTML = "";
    TravelList.forEach(travel => {

        if (travel.cardNumber == CurrentUser.cardNumber) {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${travel.travelID}</td><td>${travel.fromLocation}</td><td>${travel.toLocation}</td><td>${travel.date.toString().split('T')[0].split('-').reverse().join('/')}</td><td>${travel.travelCost}</td>`;
            table.appendChild(row);
        }

    });
}
function rechargebutton() {
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    var ticketaddmenu =  document.getElementById('TicketButtonAdd') as HTMLDivElement;
    ticketaddmenu.style.display="none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
}
async function rechargemessage() {
    const userList = await fetchUsers();
    var rechargeAmount = parseInt((document.getElementById("rechargeamount") as HTMLInputElement).value);
    var rechargemessage = document.getElementById("amountmessage") as HTMLSpanElement;
    var currentBalance:number;
    if (rechargeAmount > 0) {
        
        userList.forEach(user => {

            if (user.cardNumber = CurrentUser.cardNumber) {
                currentBalance =user.balance + rechargeAmount;
             

            }
        });

        
        rechargemessage.innerHTML = "Recharged Successfully";
        alert("recharged");

    }
    else {
        alert("Unable to Recharge");
    }
    userList.forEach(element => {
        if(element.cardNumber==CurrentUser.cardNumber)
            {
                element.balance=currentBalance;
                updateUser(element.cardNumber, element);
            }
        
    });
  ;


}

async function showbalancebutton() {
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";

    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
    var ticketaddmenu =  document.getElementById('TicketButtonAdd') as HTMLDivElement;
    ticketaddmenu.style.display="none";
    var balance = document.getElementById("balance") as HTMLSpanElement;
    const UserList = await fetchUsers();
    UserList.forEach(element => {
        if (element.cardNumber == CurrentUser.cardNumber) {
            balance.innerHTML = element.balance.toString();
        }

    });


}

async function Bookticket() {
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";
    var ticketaddmenu =  document.getElementById('TicketButtonAdd') as HTMLDivElement;
    ticketaddmenu.style.display="none";

    var table = document.querySelector("#ticket tbody") as HTMLTableSectionElement;
    table.innerHTML = "";
    var count = 1;
    const TicketFairList = await fetchTciketFair();
    TicketFairList.forEach(travelticket => {

        var row = document.createElement("tr");
        row.innerHTML = `<td>${count}</td><td>${travelticket.fromLocation}</td><td>${travelticket.toLocation}</td><td>${travelticket.ticketPrice}
        </td><td> <button type="button" onclick="editTicket('${travelticket.ticketID}')">Edit</button>
         <button type="button" onclick="deleteTicket('${travelticket.ticketID}')">Delete</button></td>
        </td><td> <button type="button" onclick="Book('${travelticket.ticketID}')">Book</button></td>`;
        table.appendChild(row);
        count++;


    });
}



async function Book(ticketID: number) {
    var flag = true;

    const TicketFairList = await fetchTciketFair();
    const TravelList = await fetchTravelHistory();
    
    const userList = await fetchUsers();
    var Currentbalance :number;
    TicketFairList.forEach(ticket => {
        if (ticket.ticketID == ticketID) {

            userList.forEach(user => {
                if (user.cardNumber == CurrentUser.cardNumber) {


                    if (ticket.ticketPrice <= user.balance) {
                        flag = false;
                       Currentbalance = user.balance -ticket.ticketPrice;
                        // TravelList.push(new TravelHistoryDetails(user.CardNumber,ticket.FromLocation,ticket.ToLocation,new Date(),ticket.TicketPrice));
                        const travel: TravelHistoryDetails =
                        {


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
            }
           
        );
        }
    });
    userList.forEach(element => {
        if(element.cardNumber==CurrentUser.cardNumber)
            {
                element.balance=Currentbalance;
                updateUser(element.cardNumber, element);
            }
        
    });
    if (flag) {
        alert("Insufficient Balance!!")
    }
}

function add()
{
   var ticketaddmenu =  document.getElementById('TicketButtonAdd') as HTMLDivElement;
   ticketaddmenu.style.display="block";
   (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
   (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "block";
   (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";
   (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
   (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
   (document.getElementById('signout') as HTMLDivElement).style.display = "none";
   (document.getElementById('signin') as HTMLDivElement).style.display = "none";
   (document.getElementById('signup') as HTMLDivElement).style.display = "none";
   (document.getElementById('header') as HTMLDivElement).style.display = "none";
   (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";

}

async function fetchTciketFair(): Promise<TicketFairDetails[]> {
    const apiUrl = 'http://localhost:5203/api/TicketFairDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    return await response.json();
}

async function fetchUsers(): Promise<UserDetails[]> {
    const apiUrl = 'http://localhost:5203/api/UserDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    return await response.json();
}

async function fetchTravelHistory(): Promise<TravelHistoryDetails[]> {
    const apiUrl = 'http://localhost:5203/api/TravelHistoryDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    return await response.json();
}



async function addUser(user: UserDetails): Promise<void> {
    const response = await fetch('http://localhost:5203/api/UserDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to add contact');
    }

}

async function addTravel(travel: TravelHistoryDetails): Promise<void> {
    const response = await fetch('http://localhost:5203/api/TravelHistoryDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(travel)
    });
    if (!response.ok) {
        throw new Error('Failed to add contact');
    }

}
async function addticket(ticket: TicketFairDetails): Promise<void> {
    const response = await fetch('http://localhost:5203/api/TicketFairDetails', {
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
}

async function updateUser(id: number, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5203/api/UserDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }
}

async function updateticket(id: number, ticket: TicketFairDetails): Promise<void> {
    const response = await fetch(`http://localhost:5203/api/TicketFairDetails/${id}`, {
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
}

//Delete
async function deleteTicket(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5203/api/TicketFairDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete contact');
    }
    Bookticket();
    
}

var source = document.getElementById('FromLocation') as HTMLInputElement;

var destination = document.getElementById('ToLocation') as HTMLInputElement;
var amount = document.getElementById('TravelCost') as HTMLInputElement;





var editingId :number | null =null;
function Submit() {
   

    const fromLocation = source.value.trim();
    const toLocation = destination.value.trim();
    const price = parseInt(amount.value);
  
   


   
    if (editingId !== null) {
        const Ticket: TicketFairDetails = {
           ticketID:editingId,
            fromLocation: fromLocation,
            toLocation: toLocation,
            ticketPrice: price,
        };
        updateticket(editingId, Ticket);
        fetchTciketFair()
    }

    else {
        const Ticket: TicketFairDetails = {
            ticketID:undefined,
             fromLocation: fromLocation,
             toLocation: toLocation,
             ticketPrice: price,
         };
        addticket(Ticket);
        fetchTciketFair();
    }
    
}

async function editTicket(id:number)
{
    var ticketaddmenu =  document.getElementById('TicketButtonAdd') as HTMLDivElement;
    ticketaddmenu.style.display="block";
    (document.getElementById('dashboard') as HTMLDivElement).style.display = "block";
    (document.getElementById('ticketbutton') as HTMLDivElement).style.display = "block";
    (document.getElementById('homebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('rechargebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('showbalancebutton') as HTMLDivElement).style.display = "none";
    (document.getElementById('signout') as HTMLDivElement).style.display = "none";
    (document.getElementById('signin') as HTMLDivElement).style.display = "none";
    (document.getElementById('signup') as HTMLDivElement).style.display = "none";
    (document.getElementById('header') as HTMLDivElement).style.display = "none";
    (document.getElementById('travelbutton') as HTMLDivElement).style.display = "none";

    editingId=id;
    const ticket = await fetchTciketFair();
    const updateticket = ticket.find(ticket => ticket.ticketID == id);
    if (updateticket != null) {
        source.value = updateticket.fromLocation;
        destination.value=updateticket.toLocation;
        amount.value= updateticket.ticketPrice.toString();

    }
}
