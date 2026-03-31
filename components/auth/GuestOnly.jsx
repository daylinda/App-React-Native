import { View, Text } from "react-native";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import ThemedLoading from "../ThemedLoading";

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authChecked]);

   if (!authChecked && user) {
    console.log("loading in guest");
    return (<ThemedLoading>

    </ThemedLoading>);
  }
 
  return children;
};

export default GuestOnly;
