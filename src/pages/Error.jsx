import { useRouteError } from "react-router-dom";
import './Error.css'
import { NavLink } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();

    return (
        <div>
            <div class="alert" style={{ backgroundColor: "Red", color: "white", height: "70px", fontSize: "22px", width: "480px", marginTop: '250px' }}>
                <span class="closebtn">&times;</span>
                <strong>Error!</strong> You are came in wrong address.
                <NavLink to={"/"}>
                    <button type="button" class="btn btn-dark" style={{ marginTop: "50px", marginLeft: '180px' }}>Bakc to Home</button>
                </NavLink>

            </div>
        </div>

    )

}
