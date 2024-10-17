import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import logo from "../assets/logo1.png";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Header() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <Navbar className="bg-white">
      <NavbarBrand>
        <img src={logo} alt="" height={10} width={200} />
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex gap-4 font-semibold"
        justify="center"
      >
        <NavbarItem>
          <NavLink color="foreground" href="#" to={"/"}>
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" href="#" to={"/recipes"}>
            Recipes
          </NavLink>
        </NavbarItem>
        {user.isLogin ? (
          <>
            <NavbarItem>
              <NavLink color="foreground" href="#" to={"/createrecipe"}>
                Add Recipes
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink color="foreground" href="#" to={"/myposts"}>
                My Posts
              </NavLink>
            </NavbarItem>
          </>
        ) : (
          ""
        )}

        <NavbarItem>
          <NavLink color="foreground" href="#" to={"/aboutus"}>
            About Us
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      {user.isLogin ? (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={
                  user.isLogin
                    ? user.userInfo.photoUrl
                    : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                }
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.userInfo.email}</p>
              </DropdownItem>
              <DropdownItem key="team_settings">
                <NavLink to={"/"}>Home</NavLink>
              </DropdownItem>
              <DropdownItem key="analytics">
                <NavLink to={"/recipes"}>Recipes</NavLink>
              </DropdownItem>
              <DropdownItem key="system">
                <NavLink to={"/createrecipe"}>Add Recipes</NavLink>
              </DropdownItem>
              <DropdownItem key="configurations">
                <NavLink to={"/myposts"}>My Posts</NavLink>
              </DropdownItem>
              <DropdownItem key="configurations">
                <NavLink to={"/aboutus"}>About Us</NavLink>
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        <NavbarContent as="div" justify="end">
          <button
            onClick={() => {
              navigate("/signin");
            }}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              login
            </span>
          </button>
        </NavbarContent>
      )}
    </Navbar>
  );
}

export default Header;
