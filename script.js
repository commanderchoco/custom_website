const toastTrigger = document.getElementById('screamToastBtn');
const screamToast = document.getElementById('screamToast');
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(screamToast)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}