function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitForm(event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
}
