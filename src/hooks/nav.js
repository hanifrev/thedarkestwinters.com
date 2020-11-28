import M from 'materialize-css/dist/css/materialize.min.css'

const navS = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelector('#mobile-links')
    M.Sidenav.init(elems, {})
  })
}

export default navS
