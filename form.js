var username = document.getElementById("username")
var pass = document.getElementById("pass")
var cpass = document.getElementById("cpass")
var btn = document.getElementById("btn")

btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (pass.value === cpass.value) {
        var oldMsg = document.querySelector(".success")
        if (oldMsg) {
            oldMsg.remove()
        }
        var submit = document.createElement("h3")
        submit.className = "success"

        submit.textContent = "Hey " + username.value + ",  Your Form Was Submitted Sucessfully🎉✅"
        document.querySelector(".form").appendChild(submit)
    }
    else {
        alert("Password Doesn't Match, Please Confirm the password❌")
    }
})