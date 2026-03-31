import { View, Text } from "react-native";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import ThemedLoading from "../ThemedLoading";

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
 
  const router = useRouter();
  useEffect(() => {
    console.log("Inside Only users effect");
     console.log("user", user);
    console.log("authChecked",authChecked);
    if (!authChecked && user === null) {
        console.log("go to login");
      router.replace("/login");
    }

    

  }, [user, authChecked]);

  if (!authChecked && !user) {
    console.log("inloading...");
    return <ThemedLoading></ThemedLoading>;
  }

  
  return children;
};

export default UserOnly;
