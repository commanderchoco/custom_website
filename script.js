const toastTrigger = document.getElementById('screamToastBtn');
const screamToast = document.getElementById('screamToast');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(screamToast)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}