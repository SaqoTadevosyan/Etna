import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  Control,
  FieldValues,
  FieldError,
  Merge,
  FieldErrorsImpl,
  Controller,
} from "react-hook-form";

interface Props {
  control: Control<FieldValues>;
  name: string;
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

export default function FormInput({ control, name, errorMessage }: Props) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <TextInput
              style={styles.input}
              placeholder={`Input your ${name}`}
              {...field}
              onChangeText={field.onChange}
            />
          );
        }}
      />

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 42,
    marginVertical: 5,
    paddingLeft: 10,
  },
  errorMessage: {
    color: "#FF3743",
    fontFamily: "Avenir-Medium",
    fontSize: 12,
    paddingLeft: 5,
  },
});
