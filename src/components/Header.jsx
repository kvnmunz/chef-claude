import chefIcon from "../public/chef-claude-icon.png"

function Header() {
    return (
        <header>
            <img src={chefIcon} alt="Chef Claude" />
            <h1> Chef Claude </h1>
        </header>
    )
}

export default Header