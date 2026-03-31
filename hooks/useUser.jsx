import{useContext} from "react";
import { UserContext } from "../contexts/UserContext";


export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

// export const useAuthCheck = () => {
//     const { user } = useUser();
//     return user !== null; // Returns true if user is authenticated, false otherwise
// }