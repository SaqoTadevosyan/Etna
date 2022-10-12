import { useNavigation } from "@react-navigation/native";
import { LeftIcon } from "../Icons/ProfileIcons";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../validation/profileSchema";
import FormInput from "../Components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, userProfileSelector } from "../store/slices/profile";
import { IUser } from "types/IProfile";

export default function EditProfile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userProfile: IUser = useSelector(userProfileSelector);
  const { control, formState, getValues, reset } = useForm({
    mode: "all",
    resolver: yupResolver(profileSchema),
  });

  const submitForm = () => {
    const data = getValues();
    dispatch(setUserInfo(data));
    reset({
      name: "",
      userName: "",
      position: "",
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <LeftIcon />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Edit Profile</Text>
          <View style={{ width: 20 }} />
        </View>
        <View>
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
              }}
              style={styles.profileImage}
            />
            <View>
              <Text style={[styles.userName]}>@{userProfile.userName}</Text>
              <Text style={[styles.name]}>{userProfile.name}</Text>
              <Text style={[styles.position]}>{userProfile.position}</Text>
            </View>
          </View>
          <FormInput
            name={"name"}
            control={control}
            errorMessage={formState.errors.name?.message}
          />
          <FormInput
            name={"userName"}
            control={control}
            errorMessage={formState.errors.userName?.message}
          />
          <FormInput
            name={"position"}
            control={control}
            errorMessage={formState.errors.position?.message}
          />

          <TouchableOpacity
            style={[
              styles.submitButton,
              !formState.isValid && styles.disabledButton,
            ]}
            onPress={submitForm}
          >
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    fontFamily: "Avenir-Heavy",
    color: "#0D253C",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 42,
    marginVertical: 5,
    paddingLeft: 10,
  },
  profileImage: {
    height: 90,
    width: 84,
    borderRadius: 22,
    marginBottom: 10,
  },
  userName: {
    color: "#2D4379",
    fontFamily: "Avenir-Medium",
    textAlign: "center",
  },
  name: {
    fontSize: 18,
    fontFamily: "Avenir-Heavy",
    textAlign: "center",
  },
  position: {
    color: "#376AED",
    fontSize: 16,
    fontFamily: "Avenir-Medium",
    textAlign: "center",
  },
  profileInfo: {
    alignItems: "center",
    marginVertical: 10,
  },
  submitButton: {
    height: 60,
    width: 295,
    borderRadius: 12,
    backgroundColor: "#376AED",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Avenir-Heavy",
    textTransform: "uppercase",
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: "#a185ff",
  },
});
