var username = document.getElementById("username")
var mail = document.getElementById("mail")
var pass = document.getElementById("pass")
var cpass = document.getElementById("cpass")
var btn = document.getElementById("btn")

btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (pass.value == "" || cpass.value == "" || username.value == "" || !mail.value.include("@")) {
        alert("Please fill valid details")
    }
    else if (pass.value === cpass.value && pass.value !== "" && cpass.value !== "") {
        var oldMsg = document.querySelector(".success")
        if (oldMsg) {
            oldMsg.remove()
        }
        var submit = document.createElement("h3")
        submit.className = "success"

        submit.textContent = "Hey " + username.value + ",  Your Form Was Submitted Sucessfully🎉✅"
        document.querySelector(".form").appendChild(submit)
        
        setTimeout(function(){
            location.reload()
        },2000)
    }
    else {
        alert("Password Doesn't Match, Please Confirm the password❌")
    }
})
