document.getElementById('addFormData').addEventListener('submit', addPost);

function addPost(event) {

    event.preventDefault();

    let name = document.getElementById('inputName').value;

    let email = document.getElementById('inputEmail').value;

    let subject = document.getElementById('inputSubject').value;

    let message = document.getElementById('inputMessage').value;


    const myPost = {

        name: name,

        email: email,

        subject: subject,

        message: message

    };

    fetch('https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us', {

        method: 'POST',

        // mode: 'no-cors',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(myPost)

    })

        .then((res) => {

            if (res.ok) {

                return res.json()
            } else {

                return Promise.reject({ status: res.status, statusText: res.statusText });

            }
        })

        .then((data) => console.log(data))

        .catch(err => console.log('Error message:', err.statusText));

}
