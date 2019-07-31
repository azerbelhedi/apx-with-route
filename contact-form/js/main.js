function messageGenerator(name , email , phone , subject , message){
    return(
        `
        name : ${name} ,
        email : ${email} ,
        phone : ${phone} ,
        subject : ${subject}
        message : ${message}
        `
    )
}

function sendMail(message) {
    var link = "mailto:pierre@apxleads.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + message
    ;
    console.log(link)
    window.location.href = link;
}

document.querySelector("#form").addEventListener("submit" , (e) => {
    e.preventDefault()
    console.log("done")
    let message = messageGenerator(
        document.querySelector("#name").value ,
        document.querySelector("#email").value ,
        document.querySelector("#phone").value ,
        document.querySelector("#subject").value ,
        document.querySelector("#message").value 
    )
    console.log(message)

    sendMail(message)
})

