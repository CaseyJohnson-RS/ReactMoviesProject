
function Footer()
{
    let dateYear = new Date().getFullYear();

    return (<footer className="page-footer blue darken-1">
    <div className="footer-copyright">
      <div className="container">
      © {dateYear} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>);
}

export {Footer}