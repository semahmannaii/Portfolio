let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("header-scroll", window.scrollY > 0)
})

let scrollTop = document.querySelector(".scroll-top")

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
})

// Email JS
function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let message = document.querySelector('.message');
    let sendButton = document.querySelector('.btn');

    sendButton.addEventListener("click", (e) => {
        e.preventDefault();

        if(name.value == "" || email.value == "" || message.value == ""){
            emptyError();
        } else {
            sendEmail(name.value, email.value, message.value);
            success();
        }
    })
}

validate()

function sendEmail(name, email, message){
    emailjs.send("service_lh6bo8d","template_sn7l80k",{
        name: name,
        message: message,
        email: email,
        });
}

function emptyError(){
    swal({
        title: "Oops!",
        text: "Empty Fields!",
        icon: "error",
        button: "Close",
      });
}

function success(){
    swal({
        title: "Thanks For Messaging Me!",
        text: "Message Was Sent With Success!",
        icon: "success",
        button: "Close",
      });
    
    setTimeout(function(){
        window.location.reload();
    }, 2000)
}