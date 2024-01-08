const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const form = document.querySelector('quote__form')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

form.addEventListener('submit', function(event) {

    event.preventDefault();

    // get the data
    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const project = event.target.project.value;

    const subject = firstName + " " + lastName + ": Quote Request"
    const body = encodeURIComponent(`Hello,\n\nYou have received a quote request from ${firstName} ${lastName}.\nHere are the details:\n\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nProject: ${project}\n\nThank you.`);

    window.open('mailto:mastersm89@gmail.com?subject=subject&body=body');
})


   /*  const link = `mailto:${email}?subject=${subject}&body=${body}`; */
