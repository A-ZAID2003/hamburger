;<Popup
  modal
  trigger={
    <button
      className="hamburger-icon-button"
      type="button"
      data-testid="hamburgerIconButton"
    >
      <GiHamburgerMenu size="30" />
    </button>
  }
  className="popup-content"
>
  {close => (
    <div className="modal-container">
      <button
        className="close-button"
        type="button"
        data-testid="closeButton"
        onClick={() => close()}
      >
        <IoMdClose size="30" color="#616e7c" />
      </button>
      <ul className="nav-links-list">
        <li className="nav-link-item">
          <Link className="nav-link" to="/" onClick={() => close()}>
            <AiFillHome size="36" />
            <p className="nav-link-content">Home</p>
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/about" onClick={() => close()}>
            <BsInfoCircleFill size="32" />
            <p className="nav-link-content">About</p>
          </Link>
        </li>
      </ul>
    </div>
  )}
</Popup>
