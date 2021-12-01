
function addMessage() {

    const usernameInput = document.getElementById('username-input');
    const messageInput = document.getElementById('input-message');

    if (usernameInput.value == '' || messageInput.value == '') {
        alert('Please fill in empty fields')
        return false;
    }

    var timestamp = new Date();
    let someDate = timestamp.toDateString();
    let someTime = timestamp.toLocaleTimeString();

    console.log(someDate, someTime)

    const newMessage = `
    <div class="row m-1 new-message">

        <div class="container">

            <div class="row d-flex">
                <div class="col-1 col-md-2 col-sm-2">
                    <p class="username-submitted">${usernameInput.value}</p>
                </div>
                <div class="col-3 col-md-9 col-sm-9">
                    <p class="timestamp">${someDate} ${someTime}</p>
                </div>
            </div>

            <div class="row pt-1">
                <form action="#">
                        <div class="col">
                            <p class="submitted-message">${messageInput.value}</p>
                        </div>
                </form>
            </div>
        </div>
    </div>    
    `

    document.getElementById('chat-message-list').innerHTML += newMessage;

    usernameInput.value = '';
    messageInput.value = '';

    let submittedMessageArea = document.getElementById('chat-message-list');
    submittedMessageArea.scrollTop = submittedMessageArea.scrollHeight - submittedMessageArea.clientHeight;
};