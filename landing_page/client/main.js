// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE

async function handleSubmit() {
   
    const first_name = document.getElementById('first_name').value
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;

    const p = document.getElementById('message')

    const data = {
        first_name: first_name, 
        last_name: last_name, 
        email: email
    }

    const response = await fetch('/server/startup_mailing_list_function/mailingList', {
        method:'POST', 
        headers: {
            "Content-type": 'application/json', 
        },
        body: JSON.stringify(data)
    })
    const res = await response.json()


    p.innerText = res.message;
   

}